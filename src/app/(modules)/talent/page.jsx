"use client";

import React, { useState } from "react";
import styles from "./styles/index.module.css";
import Banner from "./components/banner";
import ClientReviews from "./components/clientReviews";
import KeyBenefits from "./components/keyBenefits";
import Client from "./components/client";
import Footer from "@/app/layouts/WithNavbarSidebar/components/Footer";
import Modal from "@/components/Popup/Popup";
import HiringForm from "./components/hiringForm";
import ProfessionalForm from "../professionals/components/professionalsForm";

const Talent = () => {
    const [showModel, setShowModel] = useState({});

    const onClose = () => {
        setShowModel({});
    };

    return (
        <div className={styles.container}>
            <Banner setShowModel={setShowModel} />
            <Client />
            <KeyBenefits />
            <ClientReviews />
            <Modal
                show={showModel.hiringForm}
                title={
                    <div className={styles.form_heading}>
                        <h2>Let’s Find Your Perfect Hire!</h2>
                        <p>Fill in your details and let us connect you with the best talent</p>
                    </div>
                }
                onClose={onClose}
                maxWidth={"1300px"}
            >
                <HiringForm onClose={onClose} />
            </Modal>

            <Modal
                show={showModel.professionalForm}
                title={
                    <div className={styles.form_heading}>
                        <h2>Let’s Find Your Dream Job!</h2>
                        <p>Share your details, and we’ll connect you with the best opportunities tailored just for you.</p>
                    </div>
                }
                onClose={onClose}
                maxWidth={"1200px"}
            >
                <ProfessionalForm onClose={onClose} />
            </Modal>

            <Footer />
        </div>
    );
};

export default Talent;
