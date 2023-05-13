import {ArrowRightCircleIcon} from "@heroicons/react/24/solid/index.js";

export const MealItem = ({item}) => {
    return (
        <div className="border-none hover:scale-105 duration-300">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-4">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">{item.price}</p>
            </div>
            <div className="pl-4 py-4 -mt-7">
                <p className="flex items-center text-indigo-600">View More
                    <ArrowRightCircleIcon className="w-5 ml-2" />
                </p>
            </div>
        </div>
    )
}
