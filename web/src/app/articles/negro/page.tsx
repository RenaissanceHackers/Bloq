import { View } from "~/components/articles/view";

const content = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [{ type: "italic" }],
          text: "Thus all art is propaganda and ever must be, despite the wailing of the purists. I stand in utter shamelessness and say that whatever art I have for writing has been used always for propaganda for gaining the right of black folk to love and enjoy.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [{ type: "italic" }],
          text: "I do not care a damn for any art that is not used for propaganda. But I do care when propaganda is confined to one side while the other is stripped and silent.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", marks: [{ type: "bold" }], text: "W.E.B. Du Bois" },
        { type: "text", text: ', "Criteria of Negro Art"' },
      ],
    },
    {
      type: "image",
      attrs: {
        src: "https://pjrjxbdononaezaz.public.blob.vercel-storage.com/image-BB79FwO7UOJs7EOituyuWG6r2eymhT.png",
        alt: null,
        title: null,
        width: null,
        height: null,
      },
    },
  ],
};

export default function NegroPage() {
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
          name="saima"
          updatedAt={"Mar 12"}
          path="/hardcode/article-1-avatar.webp"
        />
        <div className="sticky bottom-0 flex justify-center rounded-3xl bg-background py-2">
          <div></div>
        </div>
      </div>
    </section>
  );
}
