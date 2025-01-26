import React from "react";
import styles from "./index.module.css";
import LandingIcons from "../../Utils/icons";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

const KeyFeatures = () => {
    const data = [
        {
            heading: "High Resolution",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.EYE,
            iconBackgroundColor: "linear-gradient(45.24deg, #9f5ff1 5.99%, #ff54b0 91.87%)",
        },
        {
            heading: "Retina Ready Screen",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.STACK,
            iconBackgroundColor: "linear-gradient(44.44deg, #FF4B3F 7.79%, #FFAC30 94.18%)",
        },
        {
            heading: "Easy Editable Data",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.LEAF,
            iconBackgroundColor: "linear-gradient(45deg, #ED2775 0%, #FF7448 100%)",
        },
        {
            heading: "Fully Secured",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.SECURE,
            iconBackgroundColor: "linear-gradient(44.44deg, #3F75FF 7.79%, #4ADEFF 94.18%)",
        },
        {
            heading: "Cloud Storage",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.CLOUD,
            iconBackgroundColor: "linear-gradient(43.32deg, #6A55F8 14.73%, #CA48F6 86.35%, #CA48F6 86.35%)",
        },
        {
            heading: "Responsive Ready",
            subHeading: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: LandingIcons.PIE_CHART,
            iconBackgroundColor: "linear-gradient(45deg, #6A55F8 0%, #EE6C74 100%)",
        },
    ];
    return (
        <div className={styles.container_wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <span>KEY FEATURES</span>
                    <h2>Most Probably Included Best Features Ever</h2>
                </div>
                <div className={styles.grid}>
                    {data.map((item) => (
                        <div className={styles.grid_item}>
                            <div style={{ background: item.iconBackgroundColor }} class={styles.icon}>
                                {item.icon}
                            </div>
                            <h3>{item.heading}</h3>
                            <p>{item.subHeading}</p>
                        </div>
                    ))}
                </div>
                {/* <div className={styles.view_more}>
                    <Button rounded={true} className={styles.view_more_button}>
                        View More
                    </Button>
                </div> */}
            </div>
        </div>
    );
};

export default KeyFeatures;
