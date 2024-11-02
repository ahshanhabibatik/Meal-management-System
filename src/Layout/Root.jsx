import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;