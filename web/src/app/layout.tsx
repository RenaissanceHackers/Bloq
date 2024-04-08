import "~/styles/loader.css";
import "~/styles/globals.css";
import "~/styles/prosemirror.css";

import { font } from "~/lib/font";

import { Toaster } from "react-hot-toast";
import { Providers } from "~/components/providers";
import { SiteHeader } from "~/components/layout/site-header";
import { ScrollToTop } from "~/components/layout/scroll-to-top";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { CreateWithWallet } from "~/components/with-wallet";

export const metadata = {
  title: "Renaissance",
  description: "Renaissance solana dapp",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} light`}>
        <Providers>
          <CreateWithWallet>
            <div className="relative flex h-screen flex-col bg-background antialiased dark:bg-neutral-950">
              <Toaster />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <ScrollToTop />
              <TailwindIndicator />
              {/* <SiteFooter /> */}
            </div>
          </CreateWithWallet>
        </Providers>
      </body>
    </html>
  );
}
