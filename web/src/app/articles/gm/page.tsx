import { View } from "~/components/articles/view";

const content = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [{ type: "text", text: "Gm Frens !!! ✨✨✨" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Hope you're doing good today , it's a new week and you know what that's mean ?",
        },
      ],
    },
    {
      type: "paragraph",
      content: [{ type: "text", text: "New drop !🤌🥳🤩" }],
    },
    {
      type: "paragraph",
      content: [{ type: "text", text: '" The Sea Lace "' }],
    },
    { type: "paragraph", content: [{ type: "text", text: "10 editions" }] },
    {
      type: "paragraph",
      content: [{ type: "text", text: "Have a wonderful week fam !🫶💙🫶" }],
    },
    { type: "paragraph" },
    {
      type: "image",
      attrs: {
        src: "https://pjrjxbdononaezaz.public.blob.vercel-storage.com/image-JMsODs9rKeIHCUH2gzMXoYFd6M2sQe.png",
        alt: null,
        title: null,
        width: null,
        height: null,
      },
    },
    { type: "paragraph" },
  ],
};

export default function GmPage() {
  return (
    <section className="flex-1 bg-background">
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
          path="/hardcode/article-3-avatar.webp"
        />
      </div>
    </section>
  );
}
