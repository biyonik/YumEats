import {mealData} from "../../data/data.js";
import {MealItem} from "./MealItemComponent/MealItem";
import {useState} from "react";
import MealFilterNavigation from "./MealFilterNavigationComponent/MealFilterNavigation.jsx";


const Meal = () => {
    const [foods, setFoods] = useState(mealData);

    const handleFilterFoods = (category) => {
        if (!category) return setFoods(mealData);

        const newFoods = mealData.filter(item => item.category === category);
        setFoods(newFoods);
    }

    return (
        <div className="max-w-[1520px] m-auto p-4 py-8">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Our Meal</h1>
            <MealFilterNavigation filter={handleFilterFoods} />
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
                {
                    foods.map((item, index) => <MealItem key={index} item={item} />)
                }
            </div>
        </div>
    )

}

export default Meal;
