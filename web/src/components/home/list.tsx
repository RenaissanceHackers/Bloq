import { Motion } from "./motion";
import { ListItemHardCode } from "./list-item-hard-code";

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
      <div className="mt-2 grid w-full max-w-2xl grid-cols-1 gap-2.5">
        <ListItemHardCode
          path={"/articles/negro"}
          title={
            <div>
              <span className="font-bold">W.E.B. Du Bois,</span>
              &ldquo;Criteria of Negro Art&ldquo;
            </div>
          }
          img="/hardcode/article-1.webp"
          des="Thus all art is propaganda and ever must be, despite the wailing
          of the purists. I stand in utter shamelessness and say that
          whatever art I have for writing has been used always for
          propaganda for gaining the right of black folk to love and enjoy.
          I do not care a damn for any art that is not used for propaganda.
          But I do care when propaganda is confined to one side while the
          other is stripped and silent."
          like={28}
          comment={2}
        />
        <ListItemHardCode
          path={"/articles/gm"}
          title={
            <div>
              <span className="font-bold">Gm Frens !!! ✨✨✨</span>
            </div>
          }
          des="Hope you're doing good today , it's a new week and you know what that's mean ? New drop !🤌🥳🤩"
          img="/hardcode/article-2.webp"
          like={28}
          comment={2}
        />
        <ListItemHardCode
          path={"/articles/voices"}
          title={
            <div>
              <span className="font-bold">
                latest edition of Loom of Voices
              </span>
            </div>
          }
          des="One of the most enriching aspects of my journey into Web 3 has been the opportunity to connect with special people. Meeting such souls has reaffirmed my belief in our power to forge a brighter future"
          img="/hardcode/article-3.webp"
          like={28}
          comment={2}
        />
        <ListItemHardCode
          path={"/articles/meals"}
          title={
            <div>
              <span className="font-bold">Many meals! 🍞😊</span>
            </div>
          }
          des="Bread is a staple food made from flour, water, yeast, and salt. It's a versatile food that can be enjoyed in many ways. Whether you like it toasted with butter, used for sandwiches, or dipped in soup, bread is a delicious and comforting option. Plus, there are so many types of bread to explore, from crusty baguettes to fluffy brioche. It's a simple pleasure that brings joy to many meals! 🍞😊"
          img="/hardcode/article-4.webp"
          like={28}
          comment={2}
        />
        <ListItemHardCode
          path={"/articles/meals"}
          title={
            <div>
              <span className="font-bold">
                Epic perk from our frens at Mocaverse & Moca Foundation💜{" "}
              </span>
            </div>
          }
          des="Epic perk from our frens at Mocaverse & Moca Foundation 💜🔥We’re giving 500 WLs & 20 guaranteed codes for the $MOCA Token Public Sale! 🦄"
          img="/hardcode/article-5.png"
          like={28}
          comment={2}
        />
      </div>
    </Motion>
  );
}
