import { View } from "~/components/articles/view";

const content = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          marks: [{ type: "textStyle", attrs: { color: "rgb(0, 0, 0)" } }],
          text: "Bread is a staple food made from flour, water, yeast, and salt. It's a versatile food that can be enjoyed in many ways. Whether you like it toasted with butter, used for sandwiches, or dipped in soup, bread is a delicious and comforting option. Plus, there are so many types of bread to explore, from crusty baguettes to fluffy brioche. It's a simple pleasure that brings joy to many meals! 🍞😊",
        },
      ],
    },
    { type: "paragraph" },
  ],
};

export default function MealsPage() {
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
