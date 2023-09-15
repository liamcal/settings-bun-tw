import { TargetIcon } from '../Icons/TargetIcon';
import type { Integration } from '../types';
import { ConnectButton } from './ConnectButton';
import { ConnectedPill } from './ConnectedPill';
import { IntegrationsIconSlot } from './IntegrationsIconSlot';

interface IntegrationsCardProps {
    integration: Integration;
}
const IntegrationsCard = ({ integration }: IntegrationsCardProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-md border p-4">
            <div className="flex flex-row justify-between">
                <IntegrationsIconSlot icon={integration.icon} />
                {integration.isConnected && <ConnectedPill />}
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="text-lg">{integration.heading}</h2>
                <p className="text-xs text-gray-500">
                    {integration.subheading}
                </p>
            </div>
            <ConnectButton isConnected={integration.isConnected} />
        </div>
    );
};

export { IntegrationsCard };
