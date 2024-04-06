import { View } from "~/components/articie/view";
import { Comment } from "~/components/articie/comment";

export default function ArticlePage() {
  return (
    <section className="flex-1">
      <div className="container flex max-w-5xl flex-1 flex-col space-y-3 py-4">
        <div className=""></div>
        <View />
        <Comment />
      </div>
    </section>
  );
}
