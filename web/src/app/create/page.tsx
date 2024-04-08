import Link from "next/link";
import { Icons } from "~/components/icons";
import { EditorProvider } from "~/components/create/rich-text-editor";

export default function CreatePage() {
  return (
    <section className="h-full flex-1">
      <div className="container flex h-full w-full max-w-5xl flex-1 flex-col space-y-4 py-12">
        <Link href={"/owner"} className="flex items-center gap-2">
          <Icons.chevron_left className="h-4 w-4" />
          <div> Back to recent tasks</div>
        </Link>
        <EditorProvider />
      </div>
    </section>
  );
}
