import { useEffect } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"

function Home() {
    useEffect(() => {
        document.title = "Home - Islandbound Studios"
    }, [])

    return (
        <div className="min-h-dvh bg-neutral-950 text-white">
            <Header />
            <main>
                <div className="relative w-full h-175 overflow-hidden">
                    <img src="/Porsche-911-GT3-RS.jpg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" />
                    <video src="/IMG_0710.mov" autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover"></video>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;