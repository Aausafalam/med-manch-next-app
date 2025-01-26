import React from "react";
import styles from "./index.module.css";
import LandingIcons from "../../Utils/icons";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

const AppProgress = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image src="https://templates.envytheme.com/pakap/default/assets/img/app/app-img2.png" alt="app-progress" width={1000} height={1000} />
            </div>
            <div class={styles.content}>
                <span>APP PROGRESS</span>
                <h2>Set Up The Challenges and Track Your Progress</h2>
                <p>
                    Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. never
                    missyour chance its just began. backup just log in with your mail account from.
                </p>
                <p>
                    Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy backup just log
                    in with your mail account from.
                </p>
                <div className={styles.start_trail}>
                    <Button rounded={true} className={styles.start_trail_button}>
                        Start Free Trail
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AppProgress;
