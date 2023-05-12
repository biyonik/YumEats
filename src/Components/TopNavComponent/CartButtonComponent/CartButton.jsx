import {BsFillCartFill} from "react-icons/all.js";

export const CartButton = () => {
    return (
        <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
            <BsFillCartFill className="text-2xl ml-2" size={25} />
            Cart
        </button>
    )
}
