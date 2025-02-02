import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />

            <div className="bg-background h-full">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;

