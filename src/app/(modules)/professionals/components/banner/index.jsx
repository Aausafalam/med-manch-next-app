import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import LandingIcons from "../../Utils/icons";
const Banner = ({ setShowModel }) => {
    const data = {
        title: "Where Healthcare workers Are Respected, Rewarded, and Redefined",
        subTitle: "You’ve given your best to your profession—now it’s time for us give back to you",
    };
    const buttons = [
        {
            label: "Sign Up Today",
            href: "/",
            className: styles.signup_today,
            icon: LandingIcons.RIGHT_ARROW,
            onClick: () => setShowModel({ professionalForm: true }),
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>{data.title}</h2>
                <p>{data.subTitle}</p>
                <div className={styles.button_container}>
                    {buttons.map((button) => (
                        <Button onClick={button.onClick} rounded={true} icon={button.icon} iconPosition={"right"} flat={true} className={button.className}>
                            {button.label}
                        </Button>
                    ))}
                </div>
            </div>
            <div className={styles.banner}>
                <Image width={1000} height={400} src={require("../../assets/images/png/hero-image.png")} />
            </div>
        </div>
    );
};

export default Banner;
