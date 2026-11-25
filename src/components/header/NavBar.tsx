import { Link } from "react-router";

function NavBar() {
    return (
        <nav>
            <div>
                <ul className="flex flex-row gap-2">
                    <li>
                        <Link to="/">
                            <h3 className="px-3 py-2 hover:bg-white/10 rounded-xl text-xl font-medium">Home</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/games">
                            <h3 className="px-3 py-2 hover:bg-white/10 rounded-xl text-xl font-medium">Games</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;