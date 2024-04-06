import { CommentsList } from "./comments-list";
import { Discussion } from "./discussion";

export function Comment() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="space-x-1.5 text-lg font-bold leading-none tracking-tight">
        <span className="">Latest comments</span>
        <span className="tracking-wide">(7)</span>
      </div>
      <Discussion />
      <CommentsList />
    </div>
  );
}
