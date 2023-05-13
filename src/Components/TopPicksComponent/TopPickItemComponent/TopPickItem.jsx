export const TopPickItem = ({item}) => {
    return (
        <div className="rounded-3xl relative">
            <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                <p className="px-2 pt-4 font-bold">{item.title}</p>
                <p className="px-2">{item.price}</p>
                <button className="border-dotted border-white text-white mx-2 absolute bottom-4">Add To Cart</button>
            </div>
            <img
                className=" h-[200px] w-full object-cover rounded-3xl cursor-pointer transition duration-300 ease-out hover:scale-105 hover:opacity-50"
                src={item.img}
                alt={item.title}
            />
        </div>
    )
}
