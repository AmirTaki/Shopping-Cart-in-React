import { Outlet } from "react-router-dom";
import Header  from "../components/Header";
import CarTab from "./CarTab";


const Layout = () => {
    return(
        <div className="bg-zinc-200">
            <main className="w-[1200px] max-w-full m-auto p-5">
                <Header />
                <Outlet />
            </main>
            <CarTab />
        </div>
    )
}

export default Layout;