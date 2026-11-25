import Header from "../components/header/Header";
import GamesList from "../components/games/GamesList";
import Footer from "../components/footer/Footer";

function Games() {
    return (
        <div className="min-h-dvh bg-neutral-950 text-white">
            <Header />
            <main>
                <div>
                    <h1 className="">Our Games</h1>
                    <h4 className="text-neutral-400">A portfolio of our most successful Roblox games</h4>
                </div>
                <div>
                    <GamesList />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Games;