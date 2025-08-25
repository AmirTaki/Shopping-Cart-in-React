import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to = '/' className="text-xl font-semibold">Home.</Link>
        </header>
    )
}

export default Header;