import apiConstants from "@/services/utils/constants";
import apiClient from "../config";

const hiringApiClient = apiClient.create({
    baseURL: `${apiClient.defaults.baseURL}${apiConstants.hiring.BASE_Route}`,
    headers: {
        ...apiClient.defaults.headers,
    },
});

hiringApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("hiring_token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        console.log("Hiring module request:", config);
        return config;
    },
    (error) => Promise.reject(error)
);

hiringApiClient.interceptors.response.use(
    (response) => {
        console.log("Hiring module response:", response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default hiringApiClient;
