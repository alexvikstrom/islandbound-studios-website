import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import GamesList from "../components/games/GamesList";
import Footer from "../components/footer/Footer";
import Divider from "../components/Divider";
import AcrossOurGames from "../components/games/AcrossOurGames";

import { games } from "../data/games";

import type { UniverseId } from "../types/game";
import type { GameCardData } from "../types/game";

function Games() {
    const [universeIds, setUniverseIds] = useState<UniverseId[]>([]);

    const [gameCards, setGameCards] = useState<GameCardData[]>([]);

    const [totalVisits, setTotalVisits] = useState(0);
    const [totalPlaying, setTotalPlaying] = useState(0);

    useEffect(() => {
        async function fetchAllUniverseIds() {
            try {
                const requests = games.map(
                    (game) => fetch(`/roblox-api/universes/v1/places/${game.rootPlaceId}/universe`)
                )

                const responses = await Promise.all(requests)

                const data = await Promise.all(
                    responses.map((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error: ${response.status}`);
                        }
                        return response.json()
                    })
                )

                setUniverseIds(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchAllUniverseIds();
    }, []);

    useEffect(() => {
        if (universeIds.length === 0) {
            return;
        }

        async function fetchGameCardsData() {
            try {
                const ids = universeIds.map((game) => game.universeId).join(",");

                const mainResponse = await fetch(`/roblox-games/v1/games?universeIds=${ids}`);

                if (!mainResponse.ok) throw new Error(`HTTP error: ${mainResponse.status}`);

                const mainData = await mainResponse.json();

                const iconResponse = await fetch(`roblox-thumbnails/v1/games/icons?universeIds=${ids}&size=512x512&format=Png&isCircular=false`)

                if (!iconResponse.ok) throw new Error(`HTTP error: ${iconResponse.status}`)

                const iconData = await iconResponse.json();

                const gameCardsData: GameCardData[] = mainData.data.map((game: any) => ({
                    rootPlaceId: String(game.rootPlaceId),
                    name: game.name,
                    icon: iconData.data.find((icon: any) => icon.targetId === game.id)?.imageUrl ?? "https://tr.rbxcdn.com/180DAY-88edbd4c22e4a1b7ef17bb94d78ebde1/256/256/GameIcon10/Webp/noFilter",
                    playing: game.playing,
                    visits: game.visits
                }));

                const totalVisits = gameCardsData.reduce((total, game) => total + game.visits, 0);
                const totalPlaying = gameCardsData.reduce((total, game) => total + game.playing, 0);

                setTotalVisits(totalVisits);
                setTotalPlaying(totalPlaying);

                setGameCards(gameCardsData);
            } catch (error) {
                console.error(error)
            }
        }
        fetchGameCardsData();
    }, [universeIds])

    document.title = "Games - Islandbound Studios"

    return (
        <div className="min-h-dvh bg-neutral-950 text-white">
            <Header />
            <main className="px-4 py-4 md:px-8 md:py-8 2xl:px-40 2xl:py-8">
                <div className="px-3.5">
                    <h1 className="text-4xl font-semibold">Our Games</h1>
                    <h4 className="text-lg text-neutral-400 font-normal">A portfolio of all our Roblox games</h4>
                </div>
                <GamesList gameCards={gameCards} />
                <Divider />
                <AcrossOurGames totalVisits={totalVisits} totalPlaying={totalPlaying} />
            </main>
            <Footer />
        </div>
    );
}

export default Games;