"use client";

import React from "react";

import { uploadFn } from "./image-upload";
import { defaultExtensions } from "./extensions";
import { EditorRoot, EditorCommand } from "novel";
import { slashCommand, suggestionItems } from "./slash-command";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { ImageResizer, handleCommandNavigation } from "novel/extensions";
import { EditorCommandItem, EditorCommandEmpty, EditorContent } from "novel";
import { useDebouncedCallback } from "use-debounce";
import { useForm, type Resolver } from "react-hook-form";
import type { EditorInstance, JSONContent } from "novel";

import { TextButtons } from "./text-buttons";
import { Button } from "../ui/button";
import { defaultEditorContent } from "~/config/content";
import { Input } from "../ui/input";
import { Icons } from "../icons";
import { useAtom } from "jotai";
import { titleAtom } from "~/context/atom";
import { api } from "~/trpc/react";
import { useWallet } from "@jup-ag/wallet-adapter";

const extensions = [...defaultExtensions, slashCommand];

interface FormValues {
  formTitle: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.formTitle ? values : {},
    errors: !values.formTitle
      ? {
          formTitle: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export function Editor() {
  const [initialContent, setInitialContent] =
    React.useState<null | JSONContent>(null);

  const { publicKey } = useWallet();

  const [saveStatus, setSaveStatus] = React.useState("Saved");

  const { mutate } = api.article.create.useMutation();

  const [json, setJson] = React.useState<JSONContent>();

  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON();

      window.localStorage.setItem("novel-content", JSON.stringify(json));
      setSaveStatus("Saved");
      setJson(json);
    },
    500,
  );

  const { register, handleSubmit } = useForm<FormValues>({ resolver });

  const [title, setTitle] = useAtom(titleAtom);

  const onSubmit = handleSubmit((data) => {
    if (publicKey) {
      setTitle(data.formTitle);
      const submitContent = String(json);
      mutate({
        title: data.formTitle,
        content: submitContent,
        address: publicKey.toString(),
      });
    }
  });

  React.useEffect(() => {
    const content = window.localStorage.getItem("novel-content");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (content) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setInitialContent(JSON.parse(content));
      setJson(content as unknown as JSONContent);
    } else setInitialContent(defaultEditorContent);
  }, []);

  if (!initialContent) return null;

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full max-w-screen-lg border-muted bg-background sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"
    >
      <div className="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">
        {saveStatus}
      </div>
      <div className="p-4">
        <Input
          {...register("formTitle")}
          placeholder="Untitled"
          className="h-12 w-full border-none text-2xl font-bold shadow-none outline-none focus-visible:ring-0"
          type="text"
          defaultValue={title}
        />
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className="w-full"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full !pb-6 !px-6 !pt-2`,
            },
          }}
          onUpdate={({ editor }) => {
            void debouncedUpdates(editor);
            setSaveStatus("Unsaved");
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">
              No results
            </EditorCommandEmpty>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command?.(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                key={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommand>
          <div className="flex items-center justify-between px-4 pb-2">
            <TextButtons />
            <div>
              <Button
                type="submit"
                className="bg-[#17C964]/80 font-bold uppercase hover:bg-[#17C964]"
              >
                <span className="tracking-wide">publish</span>
                <Icons.chevron_right className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </EditorContent>
      </EditorRoot>
    </form>
  );
}
