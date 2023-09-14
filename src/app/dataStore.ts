import type { Integration, Setting } from './types';

export const getSettings = (): Setting[] => {
    return [
        {
            heading: 'General',
            subheading: 'View and update your store details',
            href: '/test',
            icon: 'settings',
        },
        {
            heading: 'Billing Plan',
            subheading: 'View your current plan',
            href: '/test',
            icon: 'settings',
        },
        {
            heading: 'Team',
            subheading: 'View and add teammates',
            href: '/test',
            icon: 'users',
        },
        {
            heading: 'SMS Settings',
            subheading: 'View and update your SMS Settings',
            href: '/test',
            icon: 'messagesquare',
        },
        {
            heading: 'Web Tracking Installation',
            subheading: 'Insert code above <head>',
            href: '/test',
            icon: 'code',
        },
    ];
};

export const getIntegrations = (): Integration[] => {
    return [
        {
            heading: 'Shopify',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'shopify',
            isConnected: false,
        },
        {
            heading: 'Klaviyo',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'klaviyo',
            isConnected: false,
        },
        {
            heading: 'Stripe',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'stripe',
            isConnected: false,
        },
        {
            heading: 'Instagram',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'instagram',
            isConnected: false,
        },
        {
            heading: 'Facebook',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'facebook',
            isConnected: false,
        },
        {
            heading: 'Google',
            subheading: 'View Analytics data inside BlueReceipt',
            href: '/test',
            icon: 'google',
            isConnected: true,
        },
    ];
};
