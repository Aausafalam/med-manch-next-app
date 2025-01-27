import React from "react";
import Navbar from "../../layouts/WithNavbarSidebar/components/Navbar2";
import "./styles/index.css";

const TalentLayout = ({ children }) => {
    return (
        <div id="talent_page">
            <Navbar />
            {children}
        </div>
    );
};

export default TalentLayout;
