import { createContext, useContext, SetStateAction, Dispatch, useState } from "react";

interface Menu {
    activeMenu: boolean,
    setActiveMenu:  Dispatch<SetStateAction<boolean>>,
}

interface Props {
    children: React.ReactNode
}

const MenuContext = createContext({} as Menu);

const MenuProvider = ({children} : Props) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(false);

    const data = {
        activeMenu,
        setActiveMenu
    }

    return <MenuContext.Provider value={data}>
        {children}
    </MenuContext.Provider>
}

export default MenuProvider;

export const useMenu = () => useContext(MenuContext);
