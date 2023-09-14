'use client';

import { ChevronRightIcon } from '../Icons/ChevronRightIcon';

interface ConnectButtonProps {
    isConnected: boolean;
    onClick?: () => void;
}

const ConnectButton = ({
    isConnected,
    onClick = () => {},
}: ConnectButtonProps) => {
    return isConnected ? (
        <button
            className="self-start rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-semibold text-red-500 hover:bg-gray-100"
            onClick={onClick}
        >
            Disconnect
        </button>
    ) : (
        <button
            className="flex items-center justify-between gap-1 self-start rounded-md border border-gray-300 bg-white px-2 py-1 text-sm font-semibold text-gray-800 hover:bg-gray-100"
            onClick={onClick}
        >
            Connect{' '}
            <span className="h-4 w-4 flex-grow-0">
                <ChevronRightIcon />
            </span>
        </button>
    );
};

export { ConnectButton };
