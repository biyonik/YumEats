import {SearchBar} from "./SearchBarComponent/SearchBar";
import {Title} from "./TitleComponent/Title.jsx";
import {SecondTitle} from "./SecondTitleComponent/SecondTitle";
import {CartButton} from "./CartButtonComponent/CartButton";
import {OpenMenuButton} from "./OpenMenuButtonComponent/OpenMenuButton";
import {SideNav} from "./SideNavComponent/SideNav";
import {useState} from "react";
import {SideNavBackDrop} from "./SideNavComponent/SideNavBackDropComponent/SideNavBackDrop.jsx";


const TopNav = () => {
    const [sideNav, setSideNav] = useState(false);

    return (
        <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <OpenMenuButton setSideNav={setSideNav} />
                <Title />
                <SecondTitle />
            </div>
            <SearchBar />
            <CartButton />
            <SideNavBackDrop sideNav={sideNav} />
            <SideNav setSideNav={setSideNav} sideNav={sideNav} />
        </div>
    )
}

export default TopNav;
