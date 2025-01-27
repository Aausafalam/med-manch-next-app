import React from "react";
import styles from "./page.module.css";
import ProfessionalsLayout from "./(modules)/professionals/layout";
import Professionals from "./(modules)/professionals/page";

const Home = () => {
    return (
        <ProfessionalsLayout>
            <Professionals />
        </ProfessionalsLayout>
    );
};

export default Home;
