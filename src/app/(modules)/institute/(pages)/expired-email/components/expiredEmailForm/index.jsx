import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { useInstitute } from "@/services/context/hiring";
import Loader from "@/components/Loader";
import SuccessText from "@/components/SuccessText";
import { useRouter } from "next/navigation";

const ExpiredEmailForm = ({ token }) => {
    const { instituteVerifyEmail } = useInstitute();

    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const handleTokenVerification = (token) => {
        if (token) {
            instituteVerifyEmail.execute({
                payload: { token },
                onSuccess: () => handleNavigation("/institute/verified-email"),
                onError: () => handleNavigation(`/institute/expired-email?token=${token}`),
            });
        }
    };

    useEffect(() => {
        handleTokenVerification(token);
    }, [token]);

    return (
        <div className={styles.container}>
            <div className={styles.resend_prompt}>
                <p>
                    Haven’t signed up yet? To create your account and get the verification link, please
                    <Link href="/institute/login"> click here</Link>.
                </p>
            </div>
        </div>
    );
};

export default ExpiredEmailForm;
