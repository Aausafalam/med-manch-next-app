import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const professionalApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.professional.BASE_Route}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

professionalApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("professional_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        console.log("Professional module request:", config);
        return config;
    },
    (error) => Promise.reject(error)
);

professionalApiClient.interceptors.response.use(
    (response) => {
        console.log("Professional module response:", response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default professionalApiClient;
