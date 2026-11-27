function Footer() {
    return (
        <footer className="w-full py-4 flex flex-col gap-4 bg-neutral-950 border-t border-neutral-600/40">
            <div className="px-4 flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                    <div className="aspect-square w-11.5 h-11.5 flex justify-center items-center">
                        <img src="/favicon.svg" alt="" className="w-[80%] h-[80%]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <h4 className="text-xl font-semibold">IslandBound</h4>
                        <p className="text-xs font-semibold text-stone-400 tracking-[0.2em]">STUDIOS</p>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <div className="aspect-square h-11.5 px-1 py-1 group flex items-center justify-center rounded-2xl hover:bg-white/10 transition-colors duration-250">
                            <img src="/X.png" alt="" className="w-[80%] h-[80%] brightness-75 group-hover:brightness-100 transition-all duration-250" />
                        </div>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <div className="aspect-square h-11.5 px-1 py-1 group flex items-center justify-center rounded-2xl hover:bg-white/10 transition-colors duration-250">
                            <img src="/Youtube.png" alt="" className="w-[80%] h-[80%] brightness-75 group-hover:brightness-100 transition-all duration-250" />
                        </div>
                    </a>
                </div>
            </div>
            <h5 className="px-4 text-neutral-400">© 2026 Islandbound Studios™. All rights reserved.</h5>
        </footer>
    );
}

export default Footer;