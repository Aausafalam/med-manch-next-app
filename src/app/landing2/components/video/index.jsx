import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import LandingIcons from "../../Utils/icons";

const Video = () => {
    return (
        <div className={styles.container}>
            <div className={styles.video_box}>
                <Image width={1500} height={400} src="https://templates.envytheme.com/pakap/default/assets/img/video/video-bg1.jpg" alt="video-bg1" />
                <a href="https://www.youtube.com/watch?v=PWvPbGWVRrU" className="video-btn popup-video">
                    {LandingIcons.PLAY}
                </a>
                <div className={styles.shape}>
                    <Image className={styles.shape1} src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape1.png" alt="shape1" width={100} height={80} />
                    <Image className={styles.shape2} src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape2.png" alt="shape2" width={100} height={80} />
                </div>
            </div>
        </div>
    );
};

export default Video;
