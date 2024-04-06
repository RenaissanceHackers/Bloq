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