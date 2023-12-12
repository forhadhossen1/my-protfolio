import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layouts = () => {
    return (
        <div className="md:container md:mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;

// className="md:container md:mx-auto"