import React from "react";
import Navbar from "../../layouts/WithNavbarSidebar/components/Navbar2";
import "./styles/index.css";

const ProfessionalsLayout = ({ children }) => {
    return (
        <div id="professionals_page">
            <Navbar />
            {children}
        </div>
    );
};

export default ProfessionalsLayout;
