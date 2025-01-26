import React from "react";
import styles from "./index.module.css";
import LandingIcons from "../../Utils/icons";

const AppOutline = () => {
    const data = [
        {
            heading: "User Friendly",
            subHeading: "Most probably the best dashboard design for your business you can try.",
            icon: LandingIcons.MOBILE,
            iconBackgroundColor: "linear-gradient(45.24deg, #9f5ff1 5.99%, #ff54b0 91.87%)",
        },
        {
            heading: "Award-Winning App",
            subHeading: "Most probably the best dashboard design for your business you can try.",
            icon: LandingIcons.AWARD,
            iconBackgroundColor: "linear-gradient(44.44deg, #ED2775 7.79%, #FF7448 94.18%)",
        },
        {
            heading: "Privacy Protected",
            subHeading: "Most probably the best dashboard design for your business you can try.",
            icon: LandingIcons.PRIVACY,
            iconBackgroundColor: "linear-gradient(44.44deg, #3F75FF 7.79%, #4ADEFF 94.18%)",
        },
        {
            heading: "Lifetime Update",
            subHeading: "Most probably the best dashboard design for your business you can try.",
            icon: LandingIcons.DIAMOND,
            iconBackgroundColor: "linear-gradient(44.44deg, #FF4B3F 7.79%, #FFAC30 94.18%)",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {data.map((item, index) => (
                    <div key={index} className={styles.grid_item}>
                        <div style={{ background: item.iconBackgroundColor }} className={styles.icon}>
                            {item.icon}
                        </div>
                        <h3>{item.heading}</h3>
                        <p>{item.subHeading}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppOutline;
