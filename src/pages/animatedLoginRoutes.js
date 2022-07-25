import { Routes, Route, useLocation } from "react-router-dom";
import Login from './login';
import SignUp from './signup';
import ForgotPassword from './forgotpassword';

import { AnimatePresence } from "framer-motion";

export default function AnimatedLoginRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}