import React from "react";
import styles from "./index.module.css";
import LandingIcons from "../../Utils/icons";

const WhyRecruitersLoveUs = () => {
    const data = {
        gotTalent: [
            {
                title: "Hire in Half the Time",
                subTitle: "We connect you with top-tier doctors and nurses, reducing time-to-hire by 50%.",
                icon: LandingIcons.USER,
            },
            {
                title: "Access Pre-Screened, Specialist Talent",
                subTitle: "We find candidates that other agencies struggle to find",
                icon: LandingIcons.JOBS,
            },
            {
                title: "Unmatched Industry Expertise",
                subTitle: "The team has placed 700+ specialist doctors and nurses",
                icon: LandingIcons.INDUSTRY,
            },
        ],
        needTalent: [
            {
                title: "Faster Career Breakthroughs",
                subTitle: "Land your ideal job quickly, with personalized matches that highlight your skills.",
                icon: LandingIcons.USER,
            },
            {
                title: "Get Rewarded for Success",
                subTitle: "Bonus of up to Rs 50,000 for signing up, landing a job, and excelling in your role.",
                icon: LandingIcons.JOBS,
            },
            {
                title: "We’ve Got Your Back",
                subTitle: "Join a platform with a 98% satisfaction rate among candidates like you.",
                icon: LandingIcons.INDUSTRY,
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className={styles.got_talent}>
                <p>Got Talent ?</p>
                <h2>Why Recruiters love us</h2>
                <div className={styles.list}>
                    {data.gotTalent.map((item, index) => (
                        <div key={index}>
                            {item.icon}
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.got_talent} ${styles.need_talent}`}>
                <p>Need Talent ?</p>
                <h2>Why Job Seekers love us</h2>
                <div className={styles.list}>
                    {data.needTalent.map((item, index) => (
                        <div key={index}>
                            {item.icon}
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyRecruitersLoveUs;
