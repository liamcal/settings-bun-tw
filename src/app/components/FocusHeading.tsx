import { ArrowLeftIcon } from '../Icons/ArrowLeftIcon';
import { ExternalLinkIcon } from '../Icons/ExternalLinkIcon';
import { ShoppingBagIcon } from '../Icons/ShoppingBagIcon';

const FocusHeading = () => {
    return (
        <div className="flex flex-row items-center gap-2 border px-8 py-8 shadow md:px-12">
            <button className="mr-6 h-6 w-6 shrink-0 text-gray-500">
                <ArrowLeftIcon />
            </button>
            <div className="mr-2 flex h-4 w-4 shrink-0 items-center">
                <ShoppingBagIcon />
            </div>
            <h1 className="font-medium">Store Settings</h1>
            <div className="hidden border-l-2 pl-2 text-sm text-gray-500 sm:flex">
                View and update your store details
            </div>
            <div className="hidden text-sm md:flex">
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
