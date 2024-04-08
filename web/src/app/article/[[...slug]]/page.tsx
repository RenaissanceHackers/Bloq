import { View } from "~/components/articie/view";
import { Comment } from "~/components/articie/comment";
import { api } from "~/trpc/server";

interface ArticlePageProps {
  params: { slug: string[] };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await api.article.get_post({ id: Number(params.slug[0]) });

  return (
    <section className="flex-1 bg-background">
      {post[0] ? (
        <div className="container flex max-w-5xl flex-1 flex-col space-y-3 py-4">
          <View {...post[0]} />
          <Comment postId={post[0]?.id} />
        </div>
      ) : (
        <div>not found</div>
      )}
    </section>
  );
}
