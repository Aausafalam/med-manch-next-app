import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import WhyRecruitersLoveUs from "../whyRecruitersLoveUs";

const KeyBenefits = () => {
    const data = [
        {
            title: "Fast-Track Your Career",
            subTitle: "We match you with the best specialist roles",
            icon: "watch.svg",
        },
        {
            title: "Reward Your Success",
            subTitle: "Earn Upto ₹50,000 when you secure your job",
            icon: "watch.svg",
        },
        {
            title: "Exclusive Opportunities",
            subTitle: "Access jobs you won’t find elsewhere",
            icon: "watch.svg",
        },
    ];

    const claimData = {
        image: "../../assets/images/png/portrait-cute-girl-smiling-with-satisfaction-holding-money-looking-pleased-winning-prize-dollar-bills.png",
        title: <span>Find the right talent now</span>,
        button: {
            label: "Contact Now",
            className: styles.claim_reward_button,
        },
    };

    return (
        <div className={styles.container_wrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h3>Performance that proves it</h3>
                <div className={styles.content}>
                    {data.map((item) => (
                        <div>
                            <Image src={require(`../../assets/images/svg/${item.icon}`)} width={100} height={100} />
                            <h4>{item.title}</h4>
                            <p>{item.subTitle}</p>
                        </div>
                    ))}
                </div>

                <WhyRecruitersLoveUs />

                <div className={styles.claim_reward}>
                    <div>{claimData.image && <Image src={require(claimData.image)} width={1400} height={300} />}</div>
                    <div>
                        <h3>{claimData.title}</h3>
                        <Button flat={true} rounded={true} className={claimData.button.className}>
                            {claimData.button.label}
                        </Button>
                    </div>
                    <div className={styles.claim_reward_overlay}></div>
                </div>
            </div>
        </div>
    );
};

export default KeyBenefits;
