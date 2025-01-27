import apiConstants from "@/services/utils/constants";
import professionalApiClient from "./config";

const professionalApiEndpoints = apiConstants.professional;

/*====================================================
 * Class handling all Professional-related API operations
 *====================================================*/

class ProfessionalApiService {
    constructor(apiClient = professionalApiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Creates new professional registration
     * @param {Object} payload - Registration data
     * @param {Object} [params] - Query parameters
     * @param {AbortSignal} [signal] - Request cancellation
     * @returns {Promise<Object>} Professional data
     */

    async createProfessional(payload, params, signal) {
        const response = await this.apiClient.post(professionalApiEndpoints.CREATE_PROFESSIONAL, payload, {
            params,
            signal,
        });
        return response.data;
    }
}

export const professionalApiService = new ProfessionalApiService();

export default ProfessionalApiService;
