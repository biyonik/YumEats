import {AiOutlineClose} from "react-icons/all";

export const CloseMenuButton = ({setSideNav}) => {
    return (
        <div onClick={() => setSideNav((prevState) => !prevState)} className="cursor-pointer absolute right-4 top-4">
            <AiOutlineClose className="text-2xl" size={25}/>
        </div>
    )
}
