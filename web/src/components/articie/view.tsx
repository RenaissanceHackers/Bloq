"use client";

import React from "react";

import { EditorRoot, EditorCommand } from "novel";

import { handleImageDrop, handleImagePaste } from "novel/plugins";
import { ImageResizer, handleCommandNavigation } from "novel/extensions";
import { EditorCommandItem, EditorCommandEmpty, EditorContent } from "novel";

import type { JSONContent } from "novel";

import { defaultEditorContent } from "~/config/content";
import { defaultExtensions } from "../create/extensions";
import { slashCommand, suggestionItems } from "../create/slash-command";
import { uploadFn } from "../create/image-upload";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const extensions = [...defaultExtensions, slashCommand];

export function View() {
  const [initialContent, setInitialContent] =
    React.useState<null | JSONContent>(null);

  React.useEffect(() => {
    const content = window.localStorage.getItem("novel-content");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (content) setInitialContent(JSON.parse(content));
    else setInitialContent(defaultEditorContent);
  }, []);

  if (!initialContent) return null;

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="flex flex-col gap-2.5">
        <p className="w-full text-2xl font-bold leading-none tracking-tight">
          Jupiter Exchange Surpasses Uniswap to Become the Most Used DeFi
          Trading Platform Across All Blockchains
        </p>
        <p className="text-sm font-normal text-gray-500">
          Jupiter&apos;s rise to become the leading DeFi trading platform, with
          over 1 million monthly active users and a pivotal role in onboarding
          new Solana users, underscores its innovative approach and market
          dominance.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-500">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  className="h-8 w-8 rounded-full"
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="uppercase">SOLANAFLOOR</div>
              <div className="font-normal">Mar 17, 24</div>
            </div>
          </div>
        </div>
      </div>
      <EditorRoot>
        <EditorContent
          editable={false}
          initialContent={initialContent}
          extensions={extensions}
          className="relative w-full max-w-screen-lg"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none !px-0 !pb-6 !pt-2 max-w-full`,
            },
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
    </div>
  );
}
