import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home1";
import Layout from "./Layout";
import NoPage from "./NoPage1";
import Pocitadlo from "./Pocitadlo";
import Kavy from "./Kavy";
import Kalkulacka from "./kalkulacka/Kalkulacka";




export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="pocitadlo" element={<Pocitadlo />} />
                    <Route path="kavy" element={<Kavy />} />
                    <Route path="kalkulacka" element={<Kalkulacka />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};