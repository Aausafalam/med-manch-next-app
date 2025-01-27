"use client";
import React, { useMemo } from "react";
import styles from "./index.module.css";
import DynamicForm from "@/components/form";
import { Country } from "country-state-city";
import { useHiring } from "@/services/context/hiring";
import { useProfessional } from "@/services/context/professional";

const ProfessionalForm = ({ onClose, data }) => {
    const { professionalCreate } = useProfessional();
    const professionalFormConfig = useMemo(
        () => [
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
                type: "text",
                name: "specialization",
                label: "Specialization",
                grid: 2,
                defaultValue: data?.specialization,
                placeholder: "Enter Specialization",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "number",
                name: "yearsOfExperience",
                label: "Years of Experience",
                grid: 2,
                defaultValue: data?.yearsOfExperience,
                placeholder: "Enter Years of Experience",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "text",
                name: "highestQualification",
                label: "Highest Qualification",
                grid: 2,
                defaultValue: data?.highestQualification,
                placeholder: "Enter Highest Qualification",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "number",
                name: "expectedSalary",
                label: "Expected Salary",
                grid: 2,
                placeholder: "Select Expected Salary",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
                defaultValue: data?.expectedSalary,
            },
            {
                type: "select",
                name: "availabilityToJoin",
                label: "Availability to Join",
                grid: 2,
                placeholder: "Select Availability",
                validationRules: {
                    required: true,
                },
                options: [{ label: "Yes", value: true }],
                validateOnChange: true,
                defaultValue: data?.availabilityToJoin,
            },
            {
                type: "text",
                name: "preferredLocation",
                label: "Preferred Location",
                grid: 2,
                defaultValue: data?.preferredLocation,
                placeholder: "Enter Preferred Location Multiple",
                validationRules: {
                    required: true,
                },
                validateOnChange: true,
            },
            {
                type: "file",
                name: "resume",
                label: "Upload Resume",
                grid: 2,
                defaultValue: data?.resume,
                placeholder: "Upload Resume",
                validationRules: {},
                url: "/upload/resume",
                accept: ["pdf"],
            },
        ],
        [data]
    );

    const handleFormSubmit = (formData) => {
        console.log(formData);
        professionalCreate.execute({
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
            loading: professionalCreate.isLoading,
        },
    ];

    return (
        <div className={styles.container}>
            <DynamicForm responseErrors={professionalCreate.errorMessages} formData={professionalFormConfig} onSubmit={handleFormSubmit} formButtons={formButtons} />
            <div className={styles.success_message}>
                <p>{professionalCreate.successMessages}</p>
            </div>
        </div>
    );
};

export default ProfessionalForm;
