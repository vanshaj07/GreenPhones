import axios from "axios";
import { METHOD, API_URL } from "../../utils/constants";

/**
 * GET All BRANDS API Call
 */
export const getAllBrandsAPI = () =>
  axios({
    method: METHOD.GET,
    url: `${API_URL}/brands`, 
    headers: { "Content-Type": "application/json" },
  });

  /**
 * GET All BRANDS API Call
 */
export const getAllModelsAPI = () =>
axios({
  method: METHOD.GET,
  url: `${API_URL}/models`, 
  headers: { "Content-Type": "application/json" },
});

/**
 * GET All BRANDS API Call
 */
 export const getSeriesDataAPI = (payload) =>
 axios({
   method: METHOD.GET,
   url: `${API_URL}/brands/series/${payload}`, 
   headers: { "Content-Type": "application/json" },
 });

 /**
 * GET BRANDS MODELS API Call
 */
  export const getBrandModelDataAPI = (payload) =>
  axios({
    method: METHOD.GET,
    url: `${API_URL}/brands/model/${payload}`, 
    headers: { "Content-Type": "application/json" },
  });

   /**
 * GET SERIES MODELS API Call
 */
    export const getSeriesModelDataAPI = (payload) =>
    axios({
      method: METHOD.GET,
      url: `${API_URL}/models/series/${payload}`, 
      headers: { "Content-Type": "application/json" },
    });

       /**
 * GET MODEL VARIANT API Call
 */
        export const getModelVariantDataAPI = (payload) =>
        axios({
          method: METHOD.GET,
          url: `${API_URL}/devices/details/${payload}`, 
          headers: { "Content-Type": "application/json" },
        });

       /**
 * GET_QUESTIONS_DATA API Call
 */
        export const getQuestionsDataAPI = (payload) =>
        axios({
          method: METHOD.GET,
          url: `${API_URL}/questions/${payload}`, 
          headers: { "Content-Type": "application/json" },
        });

             /**
 * GET_PROBLEMS_DATA API Call
 */
              export const getProblemsDataAPI = (payload) =>
              axios({
                method: METHOD.GET,
                url: `${API_URL}/phone-problems/${payload}`, 
                headers: { "Content-Type": "application/json" },
              });
              
   /**
 * GET_PROBLEMS_DATA API Call
 */
    export const getVerifiedTokenAPI = (payload) =>
    axios({
      method: METHOD.POST,
      url: `${API_URL}/otp-login`, 
      headers: { "Content-Type": "application/json" },
      data:payload
    });
    
       /**
 * place Order API Call
 */
        export const placeOrderAPI = (payload) =>
        axios({
          method: METHOD.POST,
          url: `${API_URL}/orders`, 
          headers: { "Content-Type": "application/json",
          "Authorization": payload.token },
          data:payload.data
        });

        
            /**
 * show Order API Call
 */
             export const showOrderAPI = (payload) =>
             axios({
               method: METHOD.GET,
               url: `${API_URL}/user-orders`, 
               headers: { "Content-Type": "application/json",
               "Authorization": payload.token }
             });

             
                   /**
 * GET CHAT API Call
 */
        export const getChatDataAPI = (payload) =>
        axios({
          method: METHOD.GET,
          url: `${API_URL}/chats/${payload.id}`, 
          headers: { "Content-Type": "application/json",
               "Authorization": payload.token }
        });