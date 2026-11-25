import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Games from "./pages/Games";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;