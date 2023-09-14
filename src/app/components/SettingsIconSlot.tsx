import { CodeIcon } from '../Icons/CodeIcon';
import { MessageSquareIcon } from '../Icons/MessageSquareIcon';
import { SettingsIcon } from '../Icons/SettingsIcon';
import { UsersIcon } from '../Icons/UsersIcon';
import { SettingsIconVariant } from '../types';

interface SettingsIconSlotProps {
    icon: SettingsIconVariant;
}

const getIcon = (icon: SettingsIconVariant) => {
    switch (icon) {
        case 'settings':
            return <SettingsIcon />;
        case 'users':
            return <UsersIcon />;
        case 'code':
            return <CodeIcon />;
        case 'messagesquare':
            return <MessageSquareIcon />;
        default:
            return null;
    }
};
const SettingsIconSlot = ({ icon }: SettingsIconSlotProps) => {
    return (
        <div className="rounded-md bg-gray-100 p-4">
            <div className="h-4 w-4">{getIcon(icon)}</div>
        </div>
    );
};

export { SettingsIconSlot };
