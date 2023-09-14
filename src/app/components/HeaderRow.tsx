import { CloudSnowIcon } from '../Icons/CloudSnowIcon';
import { SearchInput } from './SearchInput';

const HeaderRow = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between gap-4 pt-4">
                <div className="flex flex-row gap-4">
                    <div className="item-center flex rounded-md border p-4">
                        <div className="h-6 w-6">
                            <CloudSnowIcon />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl">Trysnow</h1>
                        <p className="text-sm text-gray-500">trysnow.com</p>
                    </div>
                </div>
                <SearchInput />
            </div>
            <hr />
        </>
    );
};

export { HeaderRow };
