import apiConstants from "@/services/utils/constants";
import hiringApiClient from "./config";

const hiringApiEndpoints = apiConstants.hiring;

/*====================================================
 * Class handling all Hiring-related API operations
 *====================================================*/

class HiringApiService {
    constructor(apiClient = hiringApiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Creates new hiring registration
     * @param {Object} payload - Registration data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring data
     */

    async createJob(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.CREATE_JOB, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * Verifies hiring email
     * @param {Object} payload - Email verification data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Verification result
     */

    async verifyEmail(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.VERIFY_EMAIL, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * Current onboarded user
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} user information
     */

    async currentOnboardedUser(params, signal) {
        const response = await this.apiClient.get(hiringApiEndpoints.CURRENT_ONBOARDED_USER, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * set up hiring basic information
     * @param {Object} payload - basic information data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring Data
     */

    async setupHiringBasicInfo(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.SETUP_BASE_INFO, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * set up hiring payment
     * @param {Object} payload - payment data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring Data
     */

    async setupHiringPayment(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.SETUP_PAYMENT, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * set up hiring details
     * @param {Object} payload - hiring details data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring Data
     */

    async setupHiringDetails(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.SETUP_DETAILS, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * set up hiring theme
     * @param {Object} payload - hiring theme data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring Data
     */

    async setupHiringTheme(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.SETUP_TEMPLATE, payload, {
            params,
            signal,
        });
        return response.data;
    }

    /**
     * set up Hiring password
     * @param {Object} payload - hiring password
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Hiring Data
     */

    async setupHiringPassword(payload, params, signal) {
        const response = await this.apiClient.post(hiringApiEndpoints.SETUP_PASSWORD, payload, {
            params,
            signal,
        });
        return response.data;
    }
}

export const hiringApiService = new HiringApiService();

export default HiringApiService;
