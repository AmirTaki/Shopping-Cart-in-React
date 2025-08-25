import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png"

const Header = () => {
    return (
        <header>
            <Link to = '/' className="text-xl font-semibold">Home.</Link>
            <div className="">
                <img src={iconCart} alt="" />
            </div>
        </header>
    )
}

export default Header;