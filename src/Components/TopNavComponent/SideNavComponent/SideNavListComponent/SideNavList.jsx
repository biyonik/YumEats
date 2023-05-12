import {SideNavListItems} from "./SideNavListItems.jsx";
import {SideNavListItem} from "../SideNavListItemComponent/SideNavListItem";

export const SideNavList = () => {
    return (
        <nav>
            <ul className="flex flex-col p-4 text-gray-900">
                {
                    SideNavListItems.map((item, index) => <SideNavListItem item={item} key={index} />)
                }
            </ul>
        </nav>
    )
}
