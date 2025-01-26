import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
const Banner = () => {
    return (
        <div className={styles.main_banner}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.sub_title}>Get your 14 days free trail</span>
                    <h1>The Revolutionary App That Makes Your Life Easier Than Others</h1>
                    <Button href="/institute/login" flat={true} rounded={true} className={styles.get_started}>
                        Get Started
                    </Button>
                    <Image width={1500} height={1500} src="/assets/images/banner2.jpg" alt="image" />
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.banner_shape3}>
                <Image width={100} height={80} src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape2.png" alt="image" />
            </div>
            <div className={styles.banner_shape8}>
                <Image width={400} height={80} src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape11.png" alt="image" />
            </div>
            <div className={styles.banner_shape7}>
                <Image width={400} height={80} src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape11.png" alt="image" />
            </div>
        </div>
    );
};

export default Banner;
