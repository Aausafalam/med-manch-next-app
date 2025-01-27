import DynamicForm from "@/components/form";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import Button from "@/components/form/components/FieldTemplates/ButtonField";
import Link from "next/link";
import { useInstitute } from "@/services/context/hiring";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import SuccessText from "@/components/SuccessText";

const EmailVerifyForm = ({ email }) => {
    const { instituteSignup } = useInstitute();
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    const handleResendMail = useCallback(async () => {
        await instituteSignup.execute({
            payload: { email },
            onSuccess: () => handleNavigation(`/institute/verify-email`),
            options: { showNotification: true },
        });
    }, [instituteSignup, email]);

    return (
        <div className={styles.container}>
            <Button href="/" fullWidth={true}>
                Skip for Now
            </Button>
            {!instituteSignup.isLoading && (
                <div className={styles.resend_prompt}>
                    <p>
                        Didn't get the mail?{" "}
                        <Link onClick={handleResendMail} href="#">
                            Resend
                        </Link>
                    </p>
                    <p className={styles.change_email}>
                        Did you enter the wrong email address? <Link href="/institute/login">Click here</Link> to change it
                    </p>
                </div>
            )}
            <Loader message={"Sending verification link"} isLoading={instituteSignup.isLoading} />
            <SuccessText message={instituteSignup.successMessage ? "Successfully Sent Verification Link" : ""} />
        </div>
    );
};

export default EmailVerifyForm;
