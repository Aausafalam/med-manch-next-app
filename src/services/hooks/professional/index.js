import { professionalApiService } from "@/services/api/professional";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to handle Professional signup functionality with loading and notification states
 * @returns {Object} Object containing Professional signup execution function and related states
 */

export const useProfessionalCreate = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_PROFESSIONAL_KEY = apiConstants.loadingStateKeys.CREATE_PROFESSIONAL;

    /**
     * Handles the Professional  process with loading states and error handling
     * @param {Object} payload - The professional data
     * @param {Object} params - Additional parameters for the signup request
     * @param {function} onSuccess - Callback to execute on successful signup
     * @param {function} onError - Callback to execute on signup failure
     */

    const executeProfessionalCreate = useCallback(
        async ({ payload, onSuccess, onError, options }, params) => {
            setLoading(CREATE_PROFESSIONAL_KEY, true);
            const controller = new AbortController();

            try {
                const data = await professionalApiService.createProfessional(payload, params, controller.signal);

                showSuccessNotification({
                    key: CREATE_PROFESSIONAL_KEY,
                    value: data,
                    hideNotification: false,
                });

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_PROFESSIONAL_KEY,
                    value: error || "Failed to complete professional job creation",
                });

                onError?.();
                console.error("CreateJob error:", error);
                throw error;
            } finally {
                setLoading(CREATE_PROFESSIONAL_KEY, false);
            }
        },
        [CREATE_PROFESSIONAL_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        professionalCreate: {
            execute: executeProfessionalCreate,
            isLoading: isLoading(CREATE_PROFESSIONAL_KEY) || false,
            successMessages: successMessages?.[CREATE_PROFESSIONAL_KEY],
            errorMessages: errorMessages?.[CREATE_PROFESSIONAL_KEY],
        },
    };
};
