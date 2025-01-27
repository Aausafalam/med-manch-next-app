import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const Client = () => {
    const data = [
        {
            src: "sodexo v6.png",
        },
        {
            src: "TPC-scottsdale-logo-p-500.png",
        },
        {
            src: "BillHansen-logo-p-500.png",
        },
        {
            src: "WarbyParker-logo-p-500.png",
        },
        {
            src: "Standford-logo.png",
        },

        {
            src: "Target-logo.png",
        },

        {
            src: "Google-logo.png",
        },
    ];

    return (
        <div className={styles.container}>
            {data.map((client) => (
                <div>
                    <Image src={require(`../../assets/images/png/${client.src}`)} width={400} height={100} />
                </div>
            ))}
        </div>
    );
};

export default Client;
