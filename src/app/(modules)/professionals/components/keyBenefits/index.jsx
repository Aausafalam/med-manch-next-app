import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

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
    const counts = [
        {
            title: "40Y+",
            subTitle: "of Team Expertise",
        },
        {
            title: "98%",
            subTitle: "Candidate Satisfaction",
        },
        {
            title: "10000+",
            subTitle: "Candidates profiled screened",
        },
    ];

    const claimData = {
        image: "../../assets/images/png/portrait-cute-girl-smiling-with-satisfaction-holding-money-looking-pleased-winning-prize-dollar-bills.png",
        title: (
            <span>
                Get upto Rs 50,000 <br /> by getting a job from our platform. 
            </span>
        ),
        button: {
            label: "Claim your reward",
            className: styles.claim_reward_button,
        },
    };

    return (
        <div className={styles.container_wrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <h3>Key Benefits</h3>
                <div className={styles.content}>
                    {data.map((item) => (
                        <div>
                            <Image src={require(`../../assets/images/svg/${item.icon}`)} width={100} height={100} />
                            <h4>{item.title}</h4>
                            <p>{item.subTitle}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.company_info}>
                    <div className={styles.count}>
                        <div>
                            <div className={styles.count_item}>
                                <h2>{counts[0].title}</h2>
                                <p>{counts[0].subTitle}</p>
                            </div>
                            <div className={`${styles.count_item} ${styles.count_item_satisfaction}`}>
                                <h2>{counts[1].title}</h2>
                                <p>{counts[1].subTitle}</p>
                            </div>
                        </div>
                        <div className={`${styles.count_item} ${styles.count_item_satisfaction}`}>
                            <h2>{counts[2].title}</h2>
                            <p>{counts[2].subTitle}</p>
                        </div>
                    </div>
                    <div>
                        <Image src={require("../../assets/images/png/key_man-woman-sitting-waiting-room 1.png")} width={1000} height={500} />
                    </div>
                    <Image src={require("../../assets/images/png/key_vector.png")} width={1400} height={300} />
                </div>

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
