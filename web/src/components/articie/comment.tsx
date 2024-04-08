import { api } from "~/trpc/server";
import { CommentsList } from "./comments-list";
import { Discussion } from "./discussion";

interface CommentProps {
  postId: number;
}

export async function Comment({ postId }: CommentProps) {
  const commentList = await api.comment.readCommentsForPost({ postId });
  return (
    <div className="flex flex-col space-y-8">
      <div className="space-x-1.5 text-lg font-bold leading-none tracking-tight">
        <span className="">Latest comments</span>
        <span className="tracking-wide">({commentList.length})</span>
      </div>
      <Discussion postID={postId} />
      <CommentsList postID={postId} />
    </div>
  );
}
