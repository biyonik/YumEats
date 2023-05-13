export const CategoryItem = ({item}) => {
    return (
        <div className="p-4 flex justify-center items-center hover:scale-105 duration-300">
            <img
                src={item.image}
                alt={item.name}
            />
        </div>
    )
}
