import {AiOutlineSearch} from "react-icons/all.js";

export const SearchBar = () => {
    return (
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
            <AiOutlineSearch className="text-2xl" size={25} />
            <input
                type="text"
                placeholder="Search meals..."
                className="bg-transparent p-2 w-full focus:outline-none"/>
        </div>
    )
}
