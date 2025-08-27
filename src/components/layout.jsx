import { Outlet } from "react-router-dom";
import Header  from "../components/Header";
import CarTab from "./CarTab";
import { useSelector } from "react-redux";
import { use } from "react";


const Layout = () => {
   const statusTabCart =  useSelector(store => store.cart.statusTab)
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