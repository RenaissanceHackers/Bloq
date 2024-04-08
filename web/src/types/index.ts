export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export type MobileNavItem = NavItemWithOptionalChildren;

declare global {
  interface Window {
    okxwallet: {
      solana: {
        signMessage: (
          message: string | Uint8Array,
          encoding: string,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) => Promise<any>;
        isConnected: boolean;
        _publicKey: string | null;
      };
    };
  }
}
