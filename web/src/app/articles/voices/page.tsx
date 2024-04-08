import { View } from "~/components/articles/view";

const content = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "In the realm where creativity meets sound, a story unfolds — one that resonates with metaphors, melodies, and the enigmatic essence of an artist known as ",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/u/iamlosi",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: "outline-none focus:underline",
              },
            },
            {
              type: "textStyle",
              attrs: { color: "rgb(251 58 93/var(--tw-text-opacity))" },
            },
          ],
          text: "@iamlosi",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/u/iamlosi",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "The ful",
        },
        {
          type: "text",
          text: "l narrative, once composed within the notes of their creations, now comes alive in the latest edition of Loom of Voices.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Embark on a musical journey into L" },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/u/iamlosi",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "osi's wo",
        },
        {
          type: "text",
          text: "rld, where metaphors dance with reality, and every composition whispers tales of emotions and the human experience. The c",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/u/iamlosi",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "omplete ",
        },
        {
          type: "text",
          text: "interview is a symphony of artistic expression, waiting to be heard by those who seek the profound within the chords.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "For the full experience of Losi's exclusive interview, follow the link below. Let the harmony of music and imagination guide you to the heart of this week's transc",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://hey.xyz/u/iamlosi",
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class:
                  "text-muted-foreground underline underline-offset-[3px] hover:text-primary transition-colors cursor-pointer",
              },
            },
          ],
          text: "endent s",
        },
        { type: "text", text: "torytelling." },
      ],
    },
    { type: "paragraph" },
    {
      type: "image",
      attrs: {
        src: "https://pjrjxbdononaezaz.public.blob.vercel-storage.com/article-3-Mr956N6HYKvtKmdcQ4rEzG1wD7wBi0.webp",
        alt: null,
        title: null,
        width: null,
        height: null,
      },
    },
  ],
};

export default function VoicesPage() {
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
          name="anusha"
          updatedAt={"Mar 30"}
          path="/hardcode/article-2-avatar.webp"
        />
        <div className="sticky bottom-0 flex justify-center rounded-3xl bg-background py-2">
          <div></div>
        </div>
      </div>
    </section>
  );
}
