import {AiOutlineMenu} from "react-icons/all.js";

export const OpenMenuButton = ({setSideNav}) => {

    return (
        <div onClick={() => setSideNav((prevState) => !prevState)} className="cursor-pointer">
            <AiOutlineMenu className="text-2xl" size={25} />
        </div>
    )
}
