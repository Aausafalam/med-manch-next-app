import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import LandingIcons from "../../Utils/icons";
const Banner = ({ setShowModel }) => {
    const data = {
        title: "Skip the Ordinary Job Hunt:",
        subTitle: "Doctors and Nurses Earn Rewards for Getting Hired, While Employers Secure Top Medical Talent in Record Time",
    };
    const buttons = [
        {
            label: "Hire Expert Talent",
            href: "/",
            className: styles.signup_today,
            icon: LandingIcons.RIGHT_ARROW,
            onClick: () => setShowModel({ hiringForm: true }),
        },
        {
            label: "Get a Job",
            href: "/",
            className: styles.get_a_job,
            icon: LandingIcons.RIGHT_ARROW_TRANSPARENT,
            outlined: true,
            variant: "dark",
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
                        <Button
                            onClick={button.onClick}
                            outlined={button.outlined}
                            variant={button.variant}
                            rounded={true}
                            icon={button.icon}
                            iconPosition={"right"}
                            flat={true}
                            className={button.className}
                        >
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
