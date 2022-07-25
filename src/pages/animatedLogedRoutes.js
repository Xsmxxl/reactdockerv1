import { Route, Routes, useLocation } from "react-router-dom";
import Home from './home';
import ResumenUser from './resumen';
import ConstanciaDePago from './user/constanciaDePago';

import { AnimatePresence } from "framer-motion";

export default function AnimatedLogedRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/*" element={<Home />}>
                        <Route path='resumen' element={<ResumenUser />} />
                        <Route path='constancia' element={<ConstanciaDePago />} />
                    </Route>
                </Routes>
            </AnimatePresence>
        </>
    );
}