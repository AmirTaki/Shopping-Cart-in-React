import { Outlet } from "react-router-dom";
import Header  from "../components/Header";
import CarTab from "./CarTab";


const Layout = () => {
    return(
        <>
            <div className="">Layout <Outlet /></div>
        </>
    )
}

export default Layout;