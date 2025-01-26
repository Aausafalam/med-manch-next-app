import React from "react";
import Navbar from "../layouts/WithNavbarSidebar/components/Navbar2";
import "./styles/index.css";

const LandingLayout = ({ children }) => {
    return (
        <div id="lading_page">
            <Navbar />
            {children}
        </div>
    );
};

export default LandingLayout;
