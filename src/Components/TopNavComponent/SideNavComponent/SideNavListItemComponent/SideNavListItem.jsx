
export const SideNavListItem = ({item}) => {
    return (
        <li className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <item.icon className="text-2xl" size={25}/>
            <p className="text-lg">{item.title}</p>
        </li>
    )
}
