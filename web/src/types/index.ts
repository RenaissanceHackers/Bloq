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

export interface TaskProps {
  id: number;
  title: string;
  expiryDate: Date;
  token: boolean;
  description: string;
  taskTwitter: string | null;
  tokenAmount: string | null;
  pointAmount: string | null;
  tokenName: string | null;
  contribution: string;
  status: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

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
