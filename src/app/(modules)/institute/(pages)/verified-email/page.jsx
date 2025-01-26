"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import AuthHeader from "../../components/header";
import AuthWrapper from "../../components/authWrapper";
import { useInstitute } from "@/services/context/institute";
import { CheckCircle } from "lucide-react";
const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

export default function EmailVerified() {
    const { onboardedUser } = useInstitute();
    const [isAnimated, setIsAnimated] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const router = useRouter();
    const handleNavigation = (path) => {
        router.push(path);
    };

    // useEffect(() => {
    //     onboardedUser.fetch({});
    // }, []);

    useEffect(() => {
        setIsAnimated(true);

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    onboardedUser.fetch({
                        onSuccess: (data) => {
                            if (data?.currentOnboardingStep) {
                                handleNavigation(`/boarding?wizardStep=${data?.currentOnboardingStep}`);
                            }
                        },
                    });
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onboardedUser.data]);

    return (
        <AuthWrapper>
            <div className={cn("transform transition-all duration-700 scale-0 opacity-0", isAnimated && "scale-100 opacity-100")}>
                <div className="mx-auto w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-violet-500" />
                </div>
            </div>

            <AuthHeader
                style={{ textAlign: "center" }}
                heading={"Email Verified Successfully!"}
                subHeading={<>Your email has been successfully verified. Redirecting to the details page in {countdown} seconds...</>}
            />
            <div className="relative h-1 w-full bg-gray-100 overflow-hidden rounded-full">
                <div
                    className="absolute inset-y-0 left-0 bg-violet-500 transition-all duration-1000 rounded-full"
                    style={{
                        width: `${((5 - countdown) / 5) * 100}%`,
                    }}
                />
            </div>
        </AuthWrapper>
    );
}
