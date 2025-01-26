import { useEffect, useMemo } from "react";
import { Country } from "country-state-city";
import BoardingUtils from "../utils";
import boardingConstants from "../utils/constants";
import ColorOptions from "../components/colorOptions";
import ThemeOptions from "../components/themeOptions";
import { useInstitute } from "@/services/context/institute";
import { useWizardStep } from "./useWizardStep";
import LandingTemplateOption from "../components/landingTemplateOption";
import GlobalUtils from "@/lib/utils";
import { useTemplate } from "@/services/context/template";

export const useBasicInfoForm = (data) => {
    const { instituteSetupBasicInfo, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const basicFormConfig = useMemo(
        () => [
            {
                type: "text",
                name: "ownerName",
                label: "Owner Name",
                grid: 2,
                defaultValue: data?.ownerName,
                placeholder: "Jon Doe",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "ownerPhone",
                label: "Owner Phone",
                grid: 2,
                defaultValue: data?.ownerPhone,
                placeholder: "7033432213",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "instituteName",
                label: "Institute Name",
                grid: 2,
                defaultValue: data?.instituteName,
                placeholder: "Harvard  Institute",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "instituteType",
                label: "Institute Type",
                grid: 2,
                defaultValue: data?.instituteType,
                placeholder: "Select Institute Type",
                options: BoardingUtils.getInstituteOptions(),
                validateOnChange: true,
                validationRules: {
                    required: true,
                },
            },
            {
                type: "text",
                name: "brandName",
                label: "Brand Name",
                grid: 2,
                defaultValue: data?.brandName,
                placeholder: "abc",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleBasicSubmit = (formData) => {
        console.log("Basic Info Submit:", formData);
        const options = {
            targetKeys: ["ownerName", "ownerPhone", "instituteName", "instituteType", "brandName"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupBasicInfo.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };

    return { basicFormConfig, handleBasicSubmit, isBasicFormLoading: instituteSetupBasicInfo.isLoading, basicInfoFormErrors: instituteSetupBasicInfo.errorMessages };
};

export const useInstituteInfoForm = (data) => {
    const { instituteSetupDetails, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const instituteFormConfig = useMemo(
        () => [
            {
                type: "text",
                name: "brandTagLine",
                label: "Brand Tag Line",
                grid: 2,
                defaultValue: data?.brandTagLine,
                placeholder: "brand tag line",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "alternatePhone",
                label: "Alternate Phone Number",
                grid: 2,
                defaultValue: data?.alternatePhone,
                placeholder: "7033432213",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "textarea",
                name: "address",
                label: "Address",
                grid: 1,
                placeholder: "write address here...",
                defaultValue: data?.address,
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "country",
                label: "Country",
                grid: 4,
                placeholder: "Select Country Name",
                options: Country.getAllCountries().map((country) => ({ label: country.name, value: `${country.name}_${country.isoCode}` })),
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.country,
            },
            {
                type: "select",
                name: "state",
                label: "State",
                grid: 4,
                placeholder: "Select State Name",
                validationRules: {
                    required: true,
                },
                options: [],
                dynamicOptions: true,
                validateOnChange: true,
                defaultValue: data?.state,
            },
            {
                type: "select",
                name: "city",
                label: "City",
                grid: 4,
                placeholder: "Select City Name",
                validationRules: {
                    required: true,
                },
                options: [],
                dynamicOptions: true,
                validateOnChange: true,
                defaultValue: data?.city,
            },
            {
                type: "number",
                name: "postalCode",
                label: "Postal Code",
                grid: 4,
                placeholder: "Postal Code",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.postalCode,
            },
            {
                type: "file",
                name: "brandLogo",
                label: "Brand Logo",
                grid: 2,
                accept: ["image"],
                multiple: false,
                defaultValue: data?.brandLogo,
                url: "/brand/logo/upload",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "file",
                name: "identityProof",
                label: "Identity Proof",
                grid: 2,
                accept: ["image", "pdf"],
                multiple: false,
                defaultValue: data?.identityProof,
                url: "/owners/documents/identity-proof/upload",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleInstituteSubmit = (formData) => {
        console.log("Institute Info Submit:", formData);
        const options = {
            targetKeys: ["brandTagLine", "alternatePhone", "address", "country", "state", "city", "postalCode", "brandLogo", "identityProof"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupDetails.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };

    return { instituteFormConfig, handleInstituteSubmit, instituteFormErrors: instituteSetupDetails.errorMessages, isDetailsFormLoading: instituteSetupDetails.isLoading };
};
export const useThemeForm = (data) => {
    const { instituteSetupTheme, onboardedUser } = useInstitute();
    const { templateList } = useTemplate();
    const { currentStep, handleStepChange } = useWizardStep();

    const themeFormConfig = useMemo(
        () => [
            {
                type: "customSelect",
                name: "templateId",
                label: "LMS Landing Template",
                grid: 1,
                options: boardingConstants.TEMPLATE_OPTIONS.map((option) => ({ ...option, icon: <LandingTemplateOption label={option.label} url={option.url} thumbnail={option.thumbnail} /> })),
                defaultValue: data?.templateId || "c1f9719d-e16c-4f73-989c-b36d86edb9dd",
                validationRules: {
                    required: true,
                },
            },
            ,
            {
                type: "customSelect",
                name: "primaryColor",
                label: "Primary Color",
                grid: 1,
                options: boardingConstants.COLOR_OPTIONS.map((option) => ({ ...option, icon: <ColorOptions color={option.value} /> })),
                defaultValue: data?.primaryColor || "rgb(115, 103, 240)",
                validationRules: {
                    required: true,
                },
            },
            {
                type: "customSelect",
                name: "theme",
                label: "Theme",
                grid: 1,
                options: boardingConstants.THEME_OPTIONS.map((option) => ({ ...option, icon: <ThemeOptions themeIcon={option.icon} /> })),
                defaultValue: data?.theme || "light",
                validationRules: {
                    required: true,
                },
            },
            {
                type: "customSelect",
                name: "skin",
                label: "Skin",
                grid: 1,
                options: boardingConstants.SKIN_OPTIONS,
                defaultValue: data?.skin || "DEFAULT",
                validationRules: {
                    required: true,
                },
            },
        ],
        [data]
    );

    const handleThemeSubmit = (formData) => {
        console.log("Theme Info Submit:", formData);
        const options = {
            targetKeys: ["templateId", "primaryColor", "theme", "skin"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        console.log(formData, onboardedUser.data);
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupTheme.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };
    useEffect(() => {
        templateList.fetch({});
    }, []);
    return { themeFormConfig, handleThemeSubmit, isThemeFormLoading: instituteSetupTheme.isLoading, themeFormErrors: instituteSetupTheme.errorMessages };
};

export const usePasswordForm = (data) => {
    const { instituteSetupPassword, onboardedUser } = useInstitute();
    const { currentStep, handleStepChange } = useWizardStep();

    const passwordFormConfig = useMemo(
        () => [
            {
                type: "password",
                name: "password",
                label: "Password",
                grid: 2,
                defaultValue: "",
                placeholder: "**********",
                validationRules: {
                    required: true,
                },
                defaultValue: data?.password,
            },
            {
                type: "password",
                name: "confirmPassword",
                label: "Confirm Password",
                grid: 2,
                defaultValue: "",
                placeholder: "**********",
                validationRules: {
                    required: true,
                },
                defaultValue: data?.confirmPassword,
            },
        ],
        [data]
    );

    const handlePasswordSubmit = (formData) => {
        console.log("Password  Submit:", formData);
        const options = {
            targetKeys: ["password", "confirmPassword"],
            trimStrings: true,
            precisionForNumbers: 2,
            ignoreEmptyValues: true,
        };
        if (GlobalUtils.hasFormChanges(formData, onboardedUser.data, options)) {
            instituteSetupPassword.execute({
                payload: formData,
                onSuccess: () => {
                    onboardedUser.fetch({});
                    handleStepChange(currentStep + 1);
                },
            });
        } else {
            handleStepChange(currentStep + 1);
        }
    };

    return { passwordFormConfig, handlePasswordSubmit, isPasswordFormLoading: instituteSetupPassword.isLoading, passwordFormErrors: instituteSetupPassword.errorMessages };
};
