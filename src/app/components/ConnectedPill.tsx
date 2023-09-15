import { TargetIcon } from '../Icons/TargetIcon';

const ConnectedPill = () => {
    return (
        <div className="self-start rounded-full bg-green-200 px-2 py-1 text-xs text-green-700">
            <div className="flex items-center gap-2">
                <span className="h-3 w-3">
                    <TargetIcon />
                </span>
                Connected
            </div>
        </div>
    );
};

export { ConnectedPill };
