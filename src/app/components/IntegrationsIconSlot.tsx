import { FacebookIcon } from '../Icons/FacebookIcon';
import { GoogleIcon } from '../Icons/GoogleIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { KlaviyoIcon } from '../Icons/KlaviyoIcon';
import { ShopifyIcon } from '../Icons/ShopifyIcon';
import { StripeIcon } from '../Icons/StripeIcon';
import type { IntegrationIconVariant } from '../types';

interface IntegrationIconSlotProps {
    icon: IntegrationIconVariant;
}

const getIcon = (icon: IntegrationIconVariant) => {
    switch (icon) {
        case 'shopify':
            return <ShopifyIcon />;
        case 'google':
            return <GoogleIcon />;
        case 'instagram':
            return <InstagramIcon />;
        case 'stripe':
            return <StripeIcon />;
        case 'facebook':
            return <FacebookIcon />;
        case 'klaviyo':
            return <KlaviyoIcon />;
        default:
            return null;
    }
};
const IntegrationsIconSlot = ({ icon }: IntegrationIconSlotProps) => {
    return <div className="h-8 w-8">{getIcon(icon)}</div>;
};

export { IntegrationsIconSlot };
