import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useInstitute } from "@/services/context/institute";
import AuthHeader from "@/app/(modules)/institute/components/header";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ValidateToken = ({ token }) => {
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
            <AuthHeader
                heading={
                    <>
                        Validating Your Request <span className="loading_dot"></span>
                    </>
                }
                subHeading={<>Hold on a moment while we verify your email. This won't take long!</>}
            />
            <div className="relative w-20 h-20 mx-auto mt-4">
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                    className="absolute inset-0"
                >
                    <div className="w-full h-full rounded-full border-4 border-indigo-100 border-t-indigo-600" />
                </motion.div>
                <motion.div
                    animate={{
                        scale: [0.8, 1.1, 0.8],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden rounded-b-3xl">
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-indigo-50/30 to-transparent"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
                    }}
                />
            </div>
        </div>
    );
};

export default ValidateToken;
