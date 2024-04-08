"use wallet";

import React from "react";

import { Button } from "../ui/button";
import { Icons } from "../icons";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { AlertDialogCancel } from "../ui/alert-dialog";
import { exploreTaskAtom, type TaskProps } from "~/context/atom";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { useWallet } from "@jup-ag/wallet-adapter";
import bs58 from "bs58";

export function HardOwnerDialogBox(props: TaskProps) {
  const [explore, setExplore] = useAtom(exploreTaskAtom);

  const { publicKey, signMessage } = useWallet();

  const form = useForm({
    mode: "onChange",
  });

  const [loading, setLoading] = React.useState(false);

  async function onSubmit() {
    if (publicKey) {
      toast("Good Job!", {
        icon: "👏",
      });
      setLoading(true);
      const now = Date.now();

      const snonce = String(now).slice(0, 10);

      let base58SignedMessage: string;

      const message = JSON.stringify({
        snonce,
      });
      if (
        window.okxwallet?.solana != null &&
        window.okxwallet.solana.isConnected &&
        window.okxwallet.solana._publicKey != null
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const signedMessage = await window.okxwallet.solana.signMessage(
          new TextEncoder().encode(message),
          "utf8",
        );
        base58SignedMessage = bs58.encode(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
          Buffer.from(signedMessage.signature),
        );
      } else {
        const signedMessage = await signMessage!(
          new TextEncoder().encode(message),
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        base58SignedMessage = bs58.encode(Buffer.from(signedMessage));
      }

      const data = { ...props, accepted: true, progress: true };
      setExplore([...explore, data]);
      toast.success("Published!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
        position: "bottom-right",
      });
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      <span className="font-bold leading-none tracking-tight">
        1. Task Informations for {props.title}
      </span>
      <div className="flex flex-col space-y-1.5">
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Description:</span>
            {props.descriptionDetail}
          </p>
        </div>
      </div>
      <span className="font-bold leading-none tracking-tight">
        2. Requirements
      </span>
      <div className="my-0.5 flex items-center gap-4">
        <span>Contribution points:</span>
        <span className="text-lg font-bold text-green-500">
          {props.tokenAmount?.toLowerCase()}
        </span>
      </div>
      <span className="font-bold leading-none tracking-tight">3. Reward</span>

      <div className="flex items-center gap-2 text-sm font-normal text-white group-hover:text-gray-50">
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.point className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span>{props.contribution}</span>
            <span className="capitalize">Point</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F9C97C] px-2 py-1.5">
          <Icons.ren className="h-4 w-4" />
          <div className="flex items-center gap-1">
            <span className="">{props.pointAmount?.toLocaleString()}</span>
            <span className="uppercase">${props.tokenName}</span>
          </div>
        </div>
      </div>
      <div className="my-0.5 flex flex-col space-y-1.5 pl-0.5">
        <span className="text-sm font-medium leading-none text-foreground/50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          The top ten are allocated this share based on the quality of content,
          with specific distribution rules available for more information here.
        </span>
      </div>
      <div className="flex w-full items-center gap-4">
        <AlertDialogCancel className="w-full px-0">
          <Button className="h-10 w-full py-3 text-lg font-semibold">
            Cancel
          </Button>
        </AlertDialogCancel>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="z-50 w-full">
            {loading ? (
              <Button className="h-10  w-full bg-green-500 py-3 text-lg font-semibold hover:bg-green-600">
                loading...
              </Button>
            ) : (
              <Button
                type="submit"
                className="h-10 w-full bg-green-500 py-3 text-lg font-semibold hover:bg-green-600"
              >
                publish
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
