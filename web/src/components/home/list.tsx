import { Motion } from "./motion";
import { ListItem } from "~/components/home/list-item";

export function List() {
  return (
    <Motion
      asChild
      animate="visible"
      variants={{
        visible: {
          transition: { delayChildren: 0.25, staggerChildren: 0.1 },
        },
      }}
    >
      <div className="mt-2 grid grid-cols-1 gap-2.5">
        <ListItem />
      </div>
    </Motion>
  );
}
