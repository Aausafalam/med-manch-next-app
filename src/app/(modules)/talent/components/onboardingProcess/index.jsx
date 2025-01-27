import React from "react";
import styles from "./index.module.css";

const OnboardingProcess = () => {
    return (
        <div className={styles.container}>
            <div className={styles.steps_container}>
                <div>
                    <span>STEP</span>
                    <h2>{"1"}</h2>
                    <p>Sign up and set your preferences</p>
                </div>
            </div>
        </div>
    );
};

export default OnboardingProcess;
