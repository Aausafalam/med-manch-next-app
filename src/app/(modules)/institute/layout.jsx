"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import LayoutWithoutSidebarNavbar from "../../layouts/WithoutNavbarSidebar";
import "./styles/index.css";
import { useInstitute } from "@/services/context/hiring";

const AuthLayout = ({ children }) => {
    const { onboardedUser } = useInstitute();
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };
    useEffect(() => {
        onboardedUser.fetch({});
    }, []);

    useEffect(() => {
        if (onboardedUser.data?.currentOnboardingStep) {
            handleNavigation(`/boarding?wizardStep=${onboardedUser.data?.currentOnboardingStep}`);
        }
    }, [onboardedUser.data]);

    return (
        <LayoutWithoutSidebarNavbar>
            <div id="auth_module">{children}</div>
        </LayoutWithoutSidebarNavbar>
    );
};

export default AuthLayout;
