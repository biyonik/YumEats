import {CloseMenuButton} from "../CloseMenuButtonComponent/CloseMenuButton";
import {SideNavTitle} from "./SideNavTitleComponent/SideNavTitle";
import {SideNavList} from "./SideNavListComponent/SideNavList";

export const SideNav = ({setSideNav,sideNav}) => {
    return (
        <div className={sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}
        >
            <CloseMenuButton setSideNav={setSideNav} />
            <SideNavTitle />
            <SideNavList />
        </div>
    )
}
