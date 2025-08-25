import { Outlet } from "react-router-dom";
import Header  from "../components/Header";
import CarTab from "./CarTab";


const Layout = () => {
    return(
        <>
            <main>
                <Header />
                <Outlet />
            </main>
            <CarTab />
        </>
    )
}

export default Layout;