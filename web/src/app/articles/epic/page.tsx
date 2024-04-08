import { View } from "~/components/articles/view";

const content = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "pic perk from our frens at Mocaverse & Moca Foundation 💜",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "🔥We’re giving 500 WLs & 20 guaranteed codes for the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/search?q=%24MOCA&src=link_click&type=pubs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "outline-none focus:underline",
              },
            },
          ],
          text: "$MOC",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/search?q=%24MOCA&src=link_click&type=pubs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "A Tok",
        },
        { type: "text", text: "en Public Sale! 🦄" },
      ],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "To qualify, mirror & comment THIS " },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/search?q=%24MOCA&src=link_click&type=pubs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "post ",
        },
        {
          type: "text",
          text: "inside the Phaver app. Winners notified tomorrow by push notifications!",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Deta" },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/search?q=%24MOCA&src=link_click&type=pubs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "ils ⤵",
        },
        { type: "text", text: "️" },
        { type: "hardBreak" },
        {
          type: "text",
          text: "🔹Participation deadline: April 9th 1PM UTC. Code activation by April 11th.",
        },
        { type: "hardBreak" },
        { type: "text", text: "🔹First Come, First Served (F" },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/search?q=%24MOCA&src=link_click&type=pubs",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "CFS) ",
        },
        { type: "text", text: "with L3-L4 priority" },
        { type: "hardBreak" },
        {
          type: "text",
          text: "🔹To increase your chances repost the above post ⤴️ and comment your Phaver username below 👇",
        },
      ],
    },
    { type: "paragraph" },
  ],
};

export default function EpicPage() {
  return (
    <section className="relative flex-1 bg-background">
      <div className="container flex max-w-5xl flex-1 flex-col space-y-3 py-4">
        <View
          title={""}
          content={content}
          likes={0}
          saves={0}
          views={0}
          taskId={null}
          name="eman_kaira"
          updatedAt={"Mar 28"}
          path="/hardcode/article-5-avatar.webp"
        />
        <div className="sticky bottom-0 flex justify-center rounded-3xl bg-background py-2">
          <div></div>
        </div>
      </div>
    </section>
  );
}
