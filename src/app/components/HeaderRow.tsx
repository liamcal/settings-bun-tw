import { SearchInput } from './SearchInput';

const HeaderRow = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-2xl">Heading</h1>
                <SearchInput />
            </div>
            <hr />
        </>
    );
};

export { HeaderRow };
