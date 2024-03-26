import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home1";
import Layout from "./Layout";
import NoPage from "./NoPage1";
import Pocitadlo from "./Pocitadlo";
import Kavy from "./Kavy";
import Kalkulacka from "./kalkulacka/Kalkulacka";
import Eshop from "./Eshop";
import OblibenaBarva from "./OblibenaBarva";




export default function App() {
    return (
        <HashRouter>
            <Layout/>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="/pocitadlo" element={<Pocitadlo />} />
                    <Route path="/kavy" element={<Kavy />} />
                    <Route path="/eshop" element={<Eshop />} />
                    <Route path="/kalkulacka" element={<Kalkulacka />} />
                    <Route path="/oblibenabarva" element={<OblibenaBarva />} />
                    <Route path="*" element={<NoPage />} />
            </Routes>
        </HashRouter>
    )
};