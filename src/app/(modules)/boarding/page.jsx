"use client";
import React, { useEffect, useMemo } from "react";
import { useWizardStep } from "./hooks/useWizardStep";
import { useBasicInfoForm, useInstituteInfoForm, useThemeForm, usePasswordForm } from "./hooks/useForm";
import GlobalICONS from "@/lib/utils/icons";
import BoardingIcons from "./utils/icons";
import Wizard from "@/components/Wizard";
import DynamicForm from "@/components/form";
import Payment from "./components/payment";
import styles from "./styles/index.module.css";
import boardingConstants from "./utils/constants";
import { useInstitute } from "@/services/context/institute";
import BoardingUtils from "./utils";
import { useRouter } from "next/navigation";

const Boarding = () => {
    // Custom hooks for state management
    const { currentStep, handleStepChange } = useWizardStep(boardingConstants.INITIAL_WIZARD_STEP);
    const { onboardedUser } = useInstitute();
    const { basicFormConfig, handleBasicSubmit, isBasicFormLoading, basicInfoFormErrors } = useBasicInfoForm(onboardedUser.data);
    const { instituteFormConfig, handleInstituteSubmit, isDetailsFormLoading, instituteFormErrors } = useInstituteInfoForm(onboardedUser.data);
    const { themeFormConfig, handleThemeSubmit, isThemeFormLoading, themeFormErrors } = useThemeForm();
    const { passwordFormConfig, handlePasswordSubmit, isPasswordFormLoading, passwordFormErrors } = usePasswordForm();

    const router = useRouter();
    const handelNavigation = (route) => {
        router.push(route);
    };
    // Form buttons configuration
    const getFormButtons = (isFirst = false, isLast = false, isLoading = false) => {
        return [
            currentStep != 1 && {
                label: "Previous",
                onClick: () => handleStepChange(currentStep - 1),
                variant: "secondary",
                flat: true,
                outlined: true,
                icon: GlobalICONS.LEFT_ARROW,
                disabled: isFirst,
                buttonContainerClassName: styles.previous_button_container,
            },
            {
                label: isLast ? "Submit" : "Save & Next",
                type: "Submit",
                icon: !isLast ? GlobalICONS.NEXT_ARROW : undefined,
                iconPosition: "right",
                loading: isLoading,
            },
        ].filter(Boolean);
    };

    // Wizard steps configuration
    const wizardSteps = useMemo(
        () => [
            {
                heading: boardingConstants.WIZARD_STEPS.BASIC_INFO.heading,
                subHeading: boardingConstants.WIZARD_STEPS.BASIC_INFO.subHeading,
                icon: GlobalICONS.DOC,
                number: 1,
                form: (
                    <DynamicForm
                        key="basic-form"
                        formId="basic"
                        formData={basicFormConfig}
                        formButtons={getFormButtons(true, false, isBasicFormLoading)}
                        onSubmit={handleBasicSubmit}
                        responseErrors={basicInfoFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.PAYMENT.heading,
                subHeading: boardingConstants.WIZARD_STEPS.PAYMENT.subHeading,
                icon: BoardingIcons.PAYMENT,
                number: 2,
                form: <Payment key="payment-form" handleStepChange={handleStepChange} currentStep={currentStep} />,
            },
            {
                heading: boardingConstants.WIZARD_STEPS.INSTITUTE_INFO.heading,
                subHeading: boardingConstants.WIZARD_STEPS.INSTITUTE_INFO.subHeading,
                icon: BoardingIcons.INSTITUTE,
                number: 3,
                form: (
                    <DynamicForm
                        key="institute-form"
                        formId="institute"
                        formData={instituteFormConfig}
                        formButtons={getFormButtons(false, false, isDetailsFormLoading)}
                        onSubmit={handleInstituteSubmit}
                        responseErrors={instituteFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.THEME.heading,
                subHeading: boardingConstants.WIZARD_STEPS.THEME.subHeading,
                icon: BoardingIcons.THEME,
                number: 4,
                form: (
                    <DynamicForm
                        key="theme-form"
                        formId="theme"
                        formData={themeFormConfig}
                        formButtons={getFormButtons(false, false, isThemeFormLoading)}
                        onSubmit={handleThemeSubmit}
                        responseErrors={themeFormErrors}
                    />
                ),
            },
            {
                heading: boardingConstants.WIZARD_STEPS.PASSWORD.heading,
                subHeading: boardingConstants.WIZARD_STEPS.PASSWORD.subHeading,
                icon: BoardingIcons.CREDENTIALS,
                number: 5,
                lastWizardStep: true,
                form: (
                    <DynamicForm
                        key="password-form"
                        formId="password"
                        formData={passwordFormConfig}
                        formButtons={getFormButtons(false, true, isPasswordFormLoading)}
                        onSubmit={handlePasswordSubmit}
                        responseErrors={passwordFormErrors}
                    />
                ),
            },
        ],
        [onboardedUser, basicFormConfig, instituteFormConfig, themeFormConfig, passwordFormConfig, handleBasicSubmit, handleInstituteSubmit, handleThemeSubmit, handlePasswordSubmit, currentStep]
    );

    useEffect(() => {
        onboardedUser.fetch({
            onError: () => handelNavigation("/institute/login"),
        });
    }, []);

    const validateCurrentStep = () => {
        const userStatus = onboardedUser.data.currentOnboardingStep;
        const navigationResult = BoardingUtils.handleWizardNavigation(userStatus);
        if (!navigationResult.isAllowed) {
            window.location.href = navigationResult.redirectUrl;
        }
    };

    useEffect(() => {
        if (onboardedUser.data?.currentOnboardingStep) {
            validateCurrentStep();
        }
    }, [onboardedUser.data]);
    console.log(onboardedUser.data);

    return (
        <div className={styles.container}>
            <Wizard activeWizardStep={currentStep} handleWizardChange={handleStepChange} wizardData={wizardSteps} />
        </div>
    );
};

export default Boarding;
