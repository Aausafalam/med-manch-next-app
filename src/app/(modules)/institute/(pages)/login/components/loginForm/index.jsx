import DynamicForm from "@/components/form";
import React, { useCallback, useMemo } from "react";
import styles from "./index.module.css";
import GlobalICONS from "@/lib/utils/icons";
import { useRouter } from "next/navigation";
import { useInstitute } from "@/services/context/hiring";
import ErrorText from "@/components/ErrorText";

const LoginForm = () => {
    const { instituteSignup } = useInstitute();
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };
    const handleSubmit = useCallback(
        async (formData) => {
            console.log(formData);
            localStorage.setItem("institute_email", formData.email);
            await instituteSignup.execute({
                payload: formData,
                onSuccess: () => handleNavigation("/institute/verify-email"),
            });
        },
        [instituteSignup]
    );

    const formData = useMemo(
        () => [
            {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "john@example.com",
                grid: 1,
                validationRules: {
                    required: true,
                },
            },
        ],
        []
    );

    const formButtons = [
        {
            label: "Continue With Email",
            type: "Submit",
            fullWidth: true,
            loading: instituteSignup?.isLoading,
            icon: GlobalICONS.NEXT_ARROW,
            iconPosition: "right",
        },
    ];

    return (
        <>
            <DynamicForm formData={formData} formButtons={formButtons} onSubmit={handleSubmit} />
            <ErrorText message={instituteSignup.errorMessage} />
        </>
    );
};

export default LoginForm;
