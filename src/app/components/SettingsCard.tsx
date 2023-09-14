import type { Setting } from '../types';
import { SettingsIconSlot } from './SettingsIconSlot';

interface SettingsCardProps {
    setting: Setting;
}

const SettingsCard = ({ setting }: SettingsCardProps) => {
    return (
        <div className="flex flex-row items-center gap-4 rounded-md border p-4">
            <SettingsIconSlot icon={setting.icon} />
            <div className="flex flex-col gap-1">
                <h2>{setting.heading}</h2>
                <p className="text-xs text-gray-500">{setting.subheading}</p>
            </div>
        </div>
    );
};

export { SettingsCard };
