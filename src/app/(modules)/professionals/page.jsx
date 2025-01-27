"use client";

import React, { useState } from "react";
import styles from "./styles/index.module.css";
import Banner from "./components/banner";
import ClientReviews from "./components/clientReviews";
import KeyBenefits from "./components/keyBenefits";
import Client from "./components/client";
import Footer from "@/app/layouts/WithNavbarSidebar/components/Footer";
import WhyRecruitersLoveUs from "./components/whyRecruitersLoveUs";
import ProfessionalForm from "./components/professionalsForm";
import Modal from "@/components/Popup/Popup";

const Professionals = () => {
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
            {/* <OnboardingProcess /> */}
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

export default Professionals;
