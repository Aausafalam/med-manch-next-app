import { hiringApiService } from "@/services/api/hiring";
import { useLoading } from "@/services/context/loading";
import { useNotification } from "@/services/context/notification";
import apiConstants from "@/services/utils/constants";
import { useCallback, useState } from "react";

/**
 * Custom hook to handle Hiring signup functionality with loading and notification states
 * @returns {Object} Object containing Hiring signup execution function and related states
 */

export const useHiringCreateJob = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const CREATE_JOB_KEY = apiConstants.loadingStateKeys.CREATE_JOB;

    /**
     * Handles the Hiring  process with loading states and error handling
     * @param {Object} payload - The hiring data
     * @param {Object} params - Additional parameters for the signup request
     * @param {function} onSuccess - Callback to execute on successful signup
     * @param {function} onError - Callback to execute on signup failure
     */

    const executeHiringCreateJob = useCallback(
        async ({ payload, onSuccess, onError, options }, params) => {
            setLoading(CREATE_JOB_KEY, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.createJob(payload, params, controller.signal);

                showSuccessNotification({
                    key: CREATE_JOB_KEY,
                    value: data,
                    hideNotification: false,
                });

                onSuccess?.();
                return data;
            } catch (error) {
                showErrorNotification({
                    key: CREATE_JOB_KEY,
                    value: error || "Failed to complete hiring job creation",
                });

                onError?.();
                console.error("CreateJob error:", error);
                throw error;
            } finally {
                setLoading(CREATE_JOB_KEY, false);
            }
        },
        [CREATE_JOB_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );
    return {
        hiringCreateJob: {
            execute: executeHiringCreateJob,
            isLoading: isLoading(CREATE_JOB_KEY) || false,
            successMessages: successMessages?.[CREATE_JOB_KEY],
            errorMessages: errorMessages?.[CREATE_JOB_KEY],
        },
    };
};

export const useHiringVerifyEmail = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();

    const { isLoading, setLoading } = useLoading();

    const Verify_Email_KEY = apiConstants.loadingStateKeys.VERIFY_EMAIL;

    /**
     * Handles the Hiring verify email process with loading states and error handling
     * @param {Object} payload - The verify email data
     * @param {Object} params - Additional parameters for the verify email request
     * @param {function} onSuccess - Callback to execute on successful verify email
     * @param {function} onError - Callback to execute on verify email failure
     */

    const executeHiringVerifyEmail = useCallback(
        async ({ payload, onSuccess, onError, options }, params) => {
            setLoading(Verify_Email_KEY, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.verifyEmail(payload, params, controller.signal);
                if (data?.data?.token) {
                    localStorage.setItem("hiring_token", data.data.token);
                }
                showSuccessNotification({
                    key: Verify_Email_KEY,
                    value: data,
                    hideNotification: true,
                });
                if (onSuccess) onSuccess();
            } catch (error) {
                showErrorNotification({
                    key: Verify_Email_KEY,
                    value: error || "Failed to complete verify email",
                });
                if (onError) onError();
                console.error("verify email error:", error);
            } finally {
                setLoading(Verify_Email_KEY, false);
            }
        },
        [Verify_Email_KEY, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringVerifyEmail: {
            execute: executeHiringVerifyEmail,
            isLoading: isLoading(Verify_Email_KEY) || false,
            successMessages: successMessages?.[Verify_Email_KEY],
            errorMessages: errorMessages?.[Verify_Email_KEY],
        },
    };
};

export const useHiringOnboardedUser = () => {
    const [user, setUser] = useState({});
    const { showErrorNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();
    const LOADING_KEY = apiConstants.loadingStateKeys.CURRENT_ONBOARDED_USER;

    const fetchUser = useCallback(
        async ({ onSuccess, onError, options }, params) => {
            setLoading(LOADING_KEY, true);
            const controller = new AbortController();

            try {
                const { data } = await hiringApiService.currentOnboardedUser(params, controller.signal);
                setUser(data);
                onSuccess?.(data);
            } catch (error) {
                showErrorNotification({
                    key: LOADING_KEY,
                    value: error || "Failed to fetch onboarded user",
                    hideNotification: true,
                });
                onError?.(error);
                console.error("Failed to fetch onboarded user:", error);
            } finally {
                setLoading(LOADING_KEY, false);
            }
        },
        [LOADING_KEY, showErrorNotification, setLoading]
    );

    return {
        onboardedUser: {
            data: user,
            fetch: fetchUser,
            isLoading: isLoading(LOADING_KEY) || false,
            successMessages: successMessages?.[LOADING_KEY],
            errorMessages: errorMessages?.[LOADING_KEY],
        },
    };
};

export const useHiringSetupBasicInfo = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_BASIC_INFO = apiConstants.loadingStateKeys.SETUP_BASE_INFO;

    /**
     * Handles the Hiring basic details process with loading states and error handling
     * @param {Object} payload - The hiring basic info data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupHiringBasicInfo = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_BASIC_INFO, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.setupHiringBasicInfo(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_BASIC_INFO,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);

                const errors = {
                    success: false,
                    message: "An hiring with the name 'kareem duke test.....' already exists. Please choose a different name.",
                    statusCode: 409,
                };

                const joiErrors = {
                    success: false,
                    message: "Validation Failed",
                    statusCode: 400,
                    errors: [
                        {
                            message: "Owner name must be at least 2 characters long.",
                            path: ["ownerName"],
                        },
                        {
                            message: "Owner phone number must be exactly 10 digits.",
                            path: ["ownerPhone"],
                        },
                    ],
                };

                showErrorNotification({
                    key: SETUP_INSTITUTE_BASIC_INFO,
                    value: error || "Failed to complete setup hiring Basic Info ",
                });
                onError?.();
                console.error("Setup Hiring Basic Info error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_BASIC_INFO, false);
            }
        },
        [SETUP_INSTITUTE_BASIC_INFO, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringSetupBasicInfo: {
            execute: setupHiringBasicInfo,
            isLoading: isLoading(SETUP_INSTITUTE_BASIC_INFO) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_BASIC_INFO],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_BASIC_INFO],
        },
    };
};

export const useHiringSetupPayment = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_PAYMENT = apiConstants.loadingStateKeys.SETUP_PAYMENT;

    /**
     * Handles the Hiring payment process with loading states and error handling
     * @param {Object} payload - The hiring payment data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupHiringPayment = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_PAYMENT, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.setupHiringPayment(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_PAYMENT,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_INSTITUTE_PAYMENT,
                    value: error || "Failed to complete setup hiring payment ",
                });
                onError?.();
                console.error("Setup Hiring payment error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_PAYMENT, false);
            }
        },
        [SETUP_INSTITUTE_PAYMENT, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringSetupPayment: {
            execute: setupHiringPayment,
            isLoading: isLoading(SETUP_INSTITUTE_PAYMENT) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_PAYMENT],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_PAYMENT],
        },
    };
};

export const useHiringSetupDetails = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_INSTITUTE_DETAILS = apiConstants.loadingStateKeys.SETUP_DETAILS;

    /**
     * Handles the Hiring Details process with loading states and error handling
     * @param {Object} payload - The hiring Details data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupHiringDetails = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_INSTITUTE_DETAILS, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.setupHiringDetails(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_INSTITUTE_DETAILS,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.();
                return data;
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_INSTITUTE_DETAILS,
                    value: error || "Failed to complete setup hiring Details ",
                });
                onError?.();
                console.error("Setup Hiring Details error:", error);
                throw error;
            } finally {
                setLoading(SETUP_INSTITUTE_DETAILS, false);
            }
        },
        [SETUP_INSTITUTE_DETAILS, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringSetupDetails: {
            execute: setupHiringDetails,
            isLoading: isLoading(SETUP_INSTITUTE_DETAILS) || false,
            successMessages: successMessages?.[SETUP_INSTITUTE_DETAILS],
            errorMessages: errorMessages?.[SETUP_INSTITUTE_DETAILS],
        },
    };
};

export const useHiringSetupTheme = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_TEMPLATE = apiConstants.loadingStateKeys.SETUP_TEMPLATE;

    /**
     * Handles the Hiring Theme process with loading states and error handling
     * @param {Object} payload - The hiring Theme data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupHiringTheme = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_TEMPLATE, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.setupHiringTheme(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_TEMPLATE,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.(data);
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_TEMPLATE,
                    value: error || "Failed to complete setup hiring Theme ",
                });
                onError?.(error);
                console.error("Setup Hiring Theme error:", error);
                throw error;
            } finally {
                setLoading(SETUP_TEMPLATE, false);
            }
        },
        [SETUP_TEMPLATE, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringSetupTheme: {
            execute: setupHiringTheme,
            isLoading: isLoading(SETUP_TEMPLATE) || false,
            successMessages: successMessages?.[SETUP_TEMPLATE],
            errorMessages: errorMessages?.[SETUP_TEMPLATE],
        },
    };
};

export const useHiringSetupPassword = () => {
    const { showErrorNotification, showSuccessNotification, successMessages, errorMessages } = useNotification();
    const { isLoading, setLoading } = useLoading();

    const SETUP_PASSWORD = apiConstants.loadingStateKeys.SETUP_PASSWORD;

    /**
     * Handles the Hiring Theme process with loading states and error handling
     * @param {Object} payload - The hiring Theme data
     * @param {Object} queryParams - Additional parameters for the setup request
     * @param {function} onSuccess - Callback to execute on successful setup
     * @param {function} onError - Callback to execute on setup failure
     */

    const setupHiringPassword = useCallback(
        async ({ payload, onSuccess, onError, options }, queryParams) => {
            setLoading(SETUP_PASSWORD, true);
            const controller = new AbortController();

            try {
                const data = await hiringApiService.setupHiringPassword(payload, queryParams, controller.signal);
                showSuccessNotification({
                    key: SETUP_PASSWORD,
                    value: data,
                    hideNotification: options?.hideNotification || false,
                });
                onSuccess?.(data);
            } catch (error) {
                console.log(error);
                showErrorNotification({
                    key: SETUP_PASSWORD,
                    value: error || "Failed to complete setup hiring Password ",
                });
                onError?.(error);
                console.error("Setup Hiring Password error:", error);
                throw error;
            } finally {
                setLoading(SETUP_PASSWORD, false);
            }
        },
        [SETUP_PASSWORD, showErrorNotification, showSuccessNotification, setLoading]
    );

    return {
        hiringSetupPassword: {
            execute: setupHiringPassword,
            isLoading: isLoading(SETUP_PASSWORD) || false,
            successMessages: successMessages?.[SETUP_PASSWORD],
            errorMessages: errorMessages?.[SETUP_PASSWORD],
        },
    };
};
