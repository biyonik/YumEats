
const MealFilterNavigation = ({filter}) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center py-2">
            <div className="flex justify-center md:justify-center">
                <button onClick={() => filter()} className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700">All</button>
                <button onClick={() => filter('pizza')} className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700">Pizza</button>
                <button onClick={() => filter('chicken')} className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700">Chicken</button>
                <button onClick={() => filter('salad')} className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700">Salad</button>
            </div>
        </div>
    )
}

export default MealFilterNavigation;
