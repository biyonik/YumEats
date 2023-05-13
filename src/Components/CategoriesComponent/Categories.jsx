import {categories} from "../../data/data.js";
import {CategoryItem} from "./CategoryItemComponent/CategoryItem";


const Categories = () => {
    return (
        <div className="max-w-[1520px] m-auto px-4 py-8">
            <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Trending Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
                {
                    categories.map((item, index) => <CategoryItem key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default Categories;
