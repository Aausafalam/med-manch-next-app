import React from "react";
import styles from "./index.module.css";
import LandingIcons from "../../Utils/icons";
import Image from "next/image";
import Button from "@/components/form/components/FieldTemplates/ButtonField";

const DownloadApp = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text_content}>
                    <span>DOWNLOAD APP</span>
                    <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                    <p>
                        Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business
                        purpose orem ipsum dummy text.
                    </p>
                    <div className={styles.button_container}>
                        <Button href="#" flat={true} className={styles.app_button}>
                            <Image src="https://templates.envytheme.com/pakap/default/assets/img/play-store.png" alt="image" width={100} height={100} />
                            <p>
                                <span> Get It On</span>
                                <span>Google Play</span>
                            </p>
                        </Button>
                        <Button href="#" flat={true} className={styles.app_button}>
                            <Image src="https://templates.envytheme.com/pakap/default/assets/img/apple-store.png" alt="image" width={100} height={100} />
                            <p>
                                <span>Download on the</span>
                                <span>Apple Store</span>
                            </p>
                        </Button>
                    </div>
                </div>

                <div className="app-download-image aos-init aos-animate" data-aos="fade-up">
                    <Image src="https://templates.envytheme.com/pakap/default/assets/img/app/app-img3.png" alt="app-img" width={1000} height={100} />
                </div>
            </div>
            <div class={styles.shape5}>
                <Image src="https://templates.envytheme.com/pakap/default/assets/img/shape/shape4.png" alt="shape4" width={100} height={100} />
            </div>
            <div className={styles.lines}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};

export default DownloadApp;
