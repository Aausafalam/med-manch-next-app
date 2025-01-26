import React from "react";
import styles from "./styles/index.module.css";
import Banner from "./components/banner";
import AppOutline from "./components/appOutline";
import Video from "./components/video";
import KeyFeatures from "./components/keyFeatures";
import AppProgress from "./components/appProgress";
import DownloadApp from "./components/downloadApp";

const Landing2 = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <AppOutline />
            <Video />
            <KeyFeatures />
            <AppProgress />
            <DownloadApp />
        </div>
    );
};

export default Landing2;
