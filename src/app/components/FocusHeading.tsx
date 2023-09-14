import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';
import { ExternalLinkIcon } from '../Icons/ExternalLinkIcon';
import { ShoppingBagIcon } from '../Icons/ShoppingBagIcon';

const FocusHeading = () => {
    return (
        <div className="flex flex-row items-center gap-2 border px-12 py-8 shadow">
            <div className="mr-6 h-4 w-4 text-gray-500">
                <ArrowLeftIcon />
            </div>
            <div className="mr-4 flex h-4 w-4 items-center">
                <ShoppingBagIcon />
            </div>
            <h1 className="font-medium">Store Settings</h1>
            <div className="border-l-2 pl-2 text-sm text-gray-500">
                View and update your store details
            </div>
            <div className="text-sm">
                <a className="flex items-center gap-1" href="#">
                    <span>Tutorial video </span>
                    <span className="h-4 w-4">
                        <ExternalLinkIcon />
                    </span>
                </a>
            </div>
        </div>
    );
};

export { FocusHeading };
