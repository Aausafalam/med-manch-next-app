"use client";
import React, { useMemo } from "react";
import styles from "./index.module.css";
import DynamicForm from "@/components/form";
import { Country } from "country-state-city";
import { useHiring } from "@/services/context/hiring";

const HiringForm = ({ data, onClose }) => {
    const { hiringCreateJob } = useHiring();
    const hiringFormConfig = useMemo(
        () => [
            {
                type: "rowHeader",
                label: "Contact Information",
                grid: 1,
            },
            {
                type: "text",
                name: "name",
                label: "Full Name",
                grid: 2,
                defaultValue: data?.name,
                placeholder: "Jon Doe",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "tel",
                name: "contactNumber",
                label: "Contact Number",
                grid: 2,
                defaultValue: data?.contactNumber,
                placeholder: "7033432213",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "email",
                name: "email",
                label: "Email Address",
                grid: 2,
                defaultValue: data?.email,
                placeholder: "example@example.com",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "rowHeader",
                label: "",
                grid: 2,
            },
            {
                type: "rowHeader",
                label: "Company Information",
                grid: 1,
            },
            {
                type: "text",
                name: "occupation",
                label: "Occupation",
                grid: 2,
                defaultValue: data?.occupation,
                placeholder: "Enter occupation",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "type",
                label: "Type",
                grid: 2,
                defaultValue: data?.type,
                placeholder: "Enter type",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "country",
                label: "Country",
                grid: 3,
                placeholder: "Select Country Name",
                options: Country.getAllCountries().map((country) => ({ label: country.name, value: `${country.name}_${country.isoCode}` })),
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.country,
                defaultValue: "India_IN",
            },
            {
                type: "select",
                name: "state",
                label: "State",
                grid: 3,
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
                grid: 3,
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
                type: "rowHeader",
                label: "Hiring Requirements",
                grid: 1,
            },
            {
                type: "text",
                name: "jobRole",
                label: "Job Role",
                grid: 2,
                defaultValue: data?.jobRole,
                placeholder: "Enter job role",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "number",
                name: "numberOfVacancy",
                label: "No. of Vacancy",
                grid: 2,
                defaultValue: data?.numberOfVacancy,
                placeholder: "Enter number of Vacancy",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "select",
                name: "urgency",
                label: "Urgency",
                grid: 2,
                defaultValue: data?.numberOfVacancy,
                options: [
                    { label: "Immediately", value: "Immediately" },
                    { label: "Within 1 Month", value: "Within 1 Month" },
                    { label: "More than 1 Month", value: "More than 1 Month" },
                ],
                placeholder: "Enter Urgency",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "rowHeader",
                label: "Additional Details",
                grid: 1,
            },
            {
                type: "textarea",
                name: "qualifications",
                label: "Preferred Candidate Skills/Qualifications",
                grid: 1,
                defaultValue: data?.numberOfVacancy,
                placeholder: "Enter write here...",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        console.log(formData);
        hiringCreateJob.execute({
            payload: formData,
            onSuccess: () => {
                // onClose();
            },
        });
    };

    const formButtons = [
        {
            label: "Cancel",
            onClick: onClose,
            variant: "danger",
            flat: true,
            outlined: true,
        },
        {
            label: "Submit",
            type: "Submit",
            variant: "dark",
            // icon: ,
            iconPosition: "right",
            loading: hiringCreateJob.isLoading,
        },
    ];

    return (
        <div className={styles.container}>
            <DynamicForm formData={hiringFormConfig} onSubmit={handleFormSubmit} formButtons={formButtons} />
            <div className={styles.success_message}>
                <p>{hiringCreateJob.successMessages}</p>
            </div>
        </div>
    );
};

export default HiringForm;
