import { Link, useLocation } from "react-router";

import NavBar from "./NavBar";

function Header() {
    const location = useLocation();

    function handleHeaderClick() {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth", });
        }
    }

    return (
        <header className="w-full px-4 py-3 sticky top-0 z-50 bg-neutral-950/97.5 backdrop-blur-sm border-b border-stone-600/40 flex flex-row justify-between">
            <div>
                <Link to="/" onClick={handleHeaderClick}>
                    <div className="flex flex-row gap-4">
                        <div className="aspect-square w-11.5 h-11.5 flex justify-center items-center">
                            <img src="/favicon.svg" alt="" className="w-[80%] h-[80%]" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h3 className="text-xl font-semibold">IslandBound</h3>
                            <h4 className="text-xs font-semibold text-stone-400 tracking-[0.2em]">STUDIOS</h4>
                        </div>
                    </div>
                </Link>
            </div>
            <NavBar />
        </header>
    );
}

export default Header;