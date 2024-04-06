"use client";

import React from "react";
import Image from "next/image";
import { EditorRoot, EditorCommand } from "novel";

import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { ImageResizer, handleCommandNavigation } from "novel/extensions";
import { EditorCommandItem, EditorCommandEmpty, EditorContent } from "novel";

import type { JSONContent } from "novel";

import { defaultEditorContent } from "~/config/content";
import { defaultExtensions } from "../create/extensions";
import { slashCommand, suggestionItems } from "../create/slash-command";
import { uploadFn } from "../create/image-upload";
import { Card } from "../ui/card";

const extensions = [...defaultExtensions, slashCommand];

export function CommentsList() {
  const [initialContent, setInitialContent] =
    React.useState<null | JSONContent>(null);

  React.useEffect(() => {
    const content = window.localStorage.getItem("novel-comment");
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
          src={"/test.jpg"}
          className="rounded-full border"
          fill
        />
      </div>
      <Card className="relative w-full max-w-screen-lg shadow-sm">
        <div className="flex items-center px-2 py-2">
          <span className="px-2 ">Alex</span>
          <span>•</span>
          <span>Mar 27</span>
        </div>
        <EditorRoot>
          <EditorContent
            editable={false}
            initialContent={initialContent}
            extensions={extensions}
            className="relative mt-0.5 w-full max-w-screen-lg"
            editorProps={{
              handleDOMEvents: {
                keydown: (_view, event) => handleCommandNavigation(event),
              },
              handlePaste: (view, event) =>
                handleImagePaste(view, event, uploadFn),
              handleDrop: (view, event, _slice, moved) =>
                handleImageDrop(view, event, moved, uploadFn),
              attributes: {
                class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full !p-4 !pt-0`,
              },
            }}
            slotAfter={<ImageResizer />}
          >
            <EditorCommand className="z-50 h-auto overflow-y-auto rounded-md bg-background px-1 py-2 transition-all">
              <EditorCommandEmpty className="px-2 text-muted-foreground">
                No results
              </EditorCommandEmpty>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
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
          </EditorContent>
        </EditorRoot>
      </Card>
    </div>
  );
}
