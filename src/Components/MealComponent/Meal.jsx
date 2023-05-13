import {mealData} from "../../data/data.js";
import {ArrowRightCircleIcon} from "@heroicons/react/24/solid/index.js";
import {MealItem} from "./MealItemComponent/MealItem";


const Meal = () => {
    return (
        <div className="max-w-[1520px] m-auto p-4 py-12">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-8">Our Meal</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
                {
                    mealData.map((item, index) => <MealItem key={index} item={item} />)
                }
            </div>
        </div>
    )

}

export default Meal;
