const apiConstants = {
    BACKEND_API_BASE_URL: "http://localhost:8080/api/v1",
    hiring: {
        BASE_Route: "/hiring",
        CREATE_JOB: "/",
    },
    filUpload: {
        BASE_Route: "/fileupload",
    },
    professional: {
        BASE_Route: "/professional",
        CREATE_PROFESSIONAL: "/",
    },
    template: {
        BASE_Route: "/template",
        GET_LIST: "/",
        ADD_TEMPLATE: "/",
    },
    course: {
        BASE_Route: "/course",
        USERS_LIST: `/get-courses-list`,
        ADD_USER: `/add-courses`,
        UPDATE_USER: `/update-courses`,
        DELETE_USER: `/delete-courses`,
    },
    loadingStateKeys: {
        CREATE_JOB: "createJob",
        CREATE_PROFESSIONAL: "createProfessional",
        VERIFY_EMAIL: "verifyEmail",
        SETUP_BASE_INFO: "setupBaseInfo",
        SETUP_PAYMENT: "setupPayment",
        SETUP_DETAILS: "setupDetails",
        SETUP_TEMPLATE: "setupTemplate",
        SETUP_PASSWORD: "setupPassword",
        FILE_UPLOAD_KEY: "fileUpload",
        CURRENT_ONBOARDED_USER: "currentOnboardedUser",
        GET_TEMPLATE_LIST: "getTemplateList",
    },
};
export default apiConstants;
