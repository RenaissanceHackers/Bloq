/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import Image, { type StaticImageData } from "next/image";
import {
  EditorContent,
  type EditorInstance,
  EditorRoot,
  type JSONContent,
} from "novel";
import { handleCommandNavigation } from "novel/extensions";
import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { slashCommand } from "../create/slash-command";
import { TextButtons } from "../create/text-buttons";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { defaultEditorContent } from "~/config/content";
import { defaultExtensions } from "../create/extensions";
import { uploadFn } from "../create/image-upload";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

import { Form } from "../ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useWallet } from "@jup-ag/wallet-adapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";

const FormSchema = z.object({
  content: z.string(),
});

type FormValues = z.infer<typeof FormSchema>;

const extensions = [...defaultExtensions, slashCommand];

interface DiscussionProps {
  postID: number;
}

export function Discussion({ postID }: DiscussionProps) {
  const [initialContent, setInitialContent] =
    React.useState<null | JSONContent>(null);

  const [click, setClick] = React.useState(false);

  const [content, setContent] = React.useState<JSONContent>();

  const { publicKey } = useWallet();

  const user = api.user.get_by_address.useQuery(
    { address: publicKey ? publicKey.toString() : "" },
    { enabled: !!publicKey },
  ).data;

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  const { mutate, status } = api.comment.create.useMutation();

  function onSubmit(data: FormValues) {
    console.log(data);
    if (publicKey && user?.id) {
      mutate({
        userId: user?.id,
        postId: postID,
        content: JSON.stringify(content),
      });
    }
  }

  const debouncedUpdates = useDebouncedCallback(
    async (editor: EditorInstance) => {
      const json = editor.getJSON();
      setContent(json);
    },
    500,
  );

  React.useEffect(() => {
    const content = window.localStorage.getItem("novel-self-comment");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (content) setInitialContent(JSON.parse(content));
    else setInitialContent(defaultEditorContent);
  }, []);

  if (!initialContent) return null;

  return (
    <div className="flex gap-2">
      <div className="relative mt-0.5 h-8 w-8 rounded-full">
        <Image
          alt="test"
          src={user?.avatart as unknown as StaticImageData}
          className="rounded-full border"
          fill
        />
      </div>
      {click ? (
        <div className="w-full rounded">
          <EditorRoot>
            <EditorContent
              initialContent={initialContent}
              extensions={extensions}
              className="relative w-full max-w-screen-lg border-muted bg-background shadow-sm sm:rounded sm:border"
              editorProps={{
                handleDOMEvents: {
                  keydown: (_view, event) => handleCommandNavigation(event),
                },
                handlePaste: (view, event) =>
                  handleImagePaste(view, event, uploadFn),
                handleDrop: (view, event, _slice, moved) =>
                  handleImageDrop(view, event, moved, uploadFn),
                attributes: {
                  class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full !p-4`,
                },
              }}
              onUpdate={({ editor }) => {
                void debouncedUpdates(editor);
              }}
            >
              <div className="flex items-center justify-between px-4 pb-2">
                <TextButtons />
                {publicKey ? (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="z-50"
                    >
                      <Button
                        type="submit"
                        onClick={() => console.log("11111")}
                      >
                        publish
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <div>no connect</div>
                )}
              </div>
            </EditorContent>
          </EditorRoot>
        </div>
      ) : (
        <div className="w-full rounded" onClick={() => setClick(true)}>
          <Textarea placeholder="Type your message here." className="rounded" />
        </div>
      )}
    </div>
  );
}
