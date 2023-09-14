export type SettingsIconVariant =
    | 'settings'
    | 'users'
    | 'code'
    | 'messagesquare';

export interface Setting {
    heading: string;
    subheading: string;
    href: string;
    icon: SettingsIconVariant;
}

export type IntegrationIconVariant =
    | 'shopify'
    | 'klaviyo'
    | 'stripe'
    | 'instagram'
    | 'facebook'
    | 'google';

export interface Integration {
    heading: string;
    subheading: string;
    href: string;
    icon: IntegrationIconVariant;
    isConnected: boolean;
}
