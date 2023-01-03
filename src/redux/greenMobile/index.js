import { INIT, SUCCESS, LOADING, ERROR } from "../../utils/constants";
import {
  GET_ALL_BRANDS_DATA,
  GET_ALL_BRANDS_DATA_SUCCESS,
  GET_ALL_BRANDS_DATA_ERROR,
  GET_ALL_MODELS_DATA,
  GET_ALL_MODELS_DATA_SUCCESS,
  GET_ALL_MODELS_DATA_ERROR,
  GET_BRAND_MODELS_DATA,
  GET_BRAND_MODELS_DATA_SUCCESS,
  GET_BRAND_MODELS_DATA_ERROR,
  GET_SERIES_DATA,
  GET_SERIES_DATA_SUCCESS,
  GET_SERIES_DATA_ERROR,
  GET_SERIES_MODELS_DATA,
  GET_SERIES_MODELS_DATA_SUCCESS,
  GET_SERIES_MODELS_DATA_ERROR,
  GET_MODELS_VARIANT_DATA,
  GET_MODELS_VARIANT_DATA_SUCCESS,
  GET_MODELS_VARIANT_DATA_ERROR,
  STORE_VARIANT_DATA,
  STORE_VARIANT_DATA_SUCCESS,
  STORE_VARIANT_DATA_ERROR,  
  GET_QUESTIONS_DATA,
  GET_QUESTIONS_DATA_SUCCESS,
  GET_QUESTIONS_DATA_ERROR,  
  GET_PROBLEMS_DATA,
  GET_PROBLEMS_DATA_SUCCESS,
  GET_PROBLEMS_DATA_ERROR,
  STORE_ORDER_PAYLOAD_DATA,
  STORE_ORDER_PAYLOAD_DATA_SUCCESS,
  STORE_ORDER_PAYLOAD_DATA_ERROR,  
  GET_VERIFY_TOKEN,
  GET_VERIFY_TOKEN_SUCCESS,
  GET_VERIFY_TOKEN_ERROR,
  RESET_TOKEN_DATA,
  RESET_TOKEN_DATA_SUCCESS,
  RESET_TOKEN_DATA_ERROR,  
  STORE_EXTRA_MODEL_DATA,
  STORE_EXTRA_MODEL_DATA_SUCCESS,
  STORE_EXTRA_MODEL_DATA_ERROR,  
  PLACE_ORDER,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_ERROR,
  SHOW_ORDER,
  SHOW_ORDER_SUCCESS,
  SHOW_ORDER_ERROR,
  GET_CHAT_DATA,
  GET_CHAT_DATA_SUCCESS,
  GET_CHAT_DATA_ERROR,
  STORE_USET_ID,
  STORE_USET_ID_SUCCESS,
  STORE_USET_ID_ERROR, 
} from "./constant";

const initialState = {
  phase: INIT,
   allBrandData: [],
   allModelData: [],
   seriesData:[],
   brandModelData:[],
   modelVariantData: null,
   selectedVariantData:null,
   quetionsData:[],
   problemsData:[],
   orderPayload: null,
   token: null,
   selectedModelExtraData:{
     selectedModelImage: null,
     selectedModelName: null
   },
   orderPlaced:null,
   showOrders: null,
   userId:null
};

// /**
//  * Green Mobile Reducer
//  * @param {Object} state
//  * @param {Object} action
//  */

export function greenMobileStore(state = initialState, action) {
   switch (action.type) {
    case GET_ALL_BRANDS_DATA:
    case GET_ALL_MODELS_DATA:
    case GET_BRAND_MODELS_DATA:
    case GET_SERIES_DATA:
    case GET_SERIES_MODELS_DATA:
    case GET_MODELS_VARIANT_DATA:
    case STORE_VARIANT_DATA:
    case GET_QUESTIONS_DATA:
    case GET_PROBLEMS_DATA:
    case GET_VERIFY_TOKEN:
    case STORE_ORDER_PAYLOAD_DATA:
    case STORE_EXTRA_MODEL_DATA:
    case STORE_USET_ID:
    case RESET_TOKEN_DATA:
    case PLACE_ORDER:
    case SHOW_ORDER:
    case GET_CHAT_DATA:
      return {
                ...state,
                phase: LOADING,
              };

     case GET_ALL_BRANDS_DATA_SUCCESS:
             return {
        ...state,
        allBrandData: action.response.data,
        phase: SUCCESS,
      };
      case GET_ALL_MODELS_DATA_SUCCESS:
        return {
          ...state,
          allModelData: action.response.data,
          phase: SUCCESS,
        };
      case GET_BRAND_MODELS_DATA_SUCCESS:
          return {
     ...state,
     brandModelData: action.response.data,
     phase: SUCCESS,
   };
   case GET_CHAT_DATA_SUCCESS:
    return {
      ...state,
      chatData: action.response.data.message,
      phase: SUCCESS,
    };
   case GET_SERIES_MODELS_DATA_SUCCESS:
          return {
     ...state,
     brandModelData: action.response.data,
     phase: SUCCESS,
   };
   case GET_MODELS_VARIANT_DATA_SUCCESS:
    return {
      ...state,
      modelVariantData: action.response.data?action.response.data.message :action.response.data,
      phase: SUCCESS,
    };
    case GET_QUESTIONS_DATA_SUCCESS:
      return {
        ...state,
        quetionsData: action.response.data.message,
        phase: SUCCESS,
      };
      case GET_PROBLEMS_DATA_SUCCESS:
        return {
          ...state,
          problemsData: action.response.data.message,
          phase: SUCCESS,
        };
    case GET_VERIFY_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.response.data.message,
        phase: SUCCESS,
      };
    case PLACE_ORDER_SUCCESS:
        return {
          ...state,
          orderPlaced: action.response.data,
          phase: SUCCESS,
        };
    case SHOW_ORDER_SUCCESS:
          return {
            ...state,
            showOrders: action.response.data.message,
            phase: SUCCESS,
          };
    case STORE_VARIANT_DATA_SUCCESS:
    return {
      ...state,
      selectedVariantData: action.data,
      phase: SUCCESS,
    };
    case STORE_ORDER_PAYLOAD_DATA_SUCCESS:
      return {
        ...state,
        orderPayload: action.data,
        phase: SUCCESS,
      };
    case STORE_EXTRA_MODEL_DATA_SUCCESS:
        return {
          ...state,
          selectedModelExtraData: action.data,
          phase: SUCCESS,
        };
    case STORE_USET_ID_SUCCESS:
        return {
            ...state,
            userId: action.data,
            phase: SUCCESS,
          };
    case RESET_TOKEN_DATA_SUCCESS:
      return {
        ...state,
        token: null,
        userId: null,
        phase: SUCCESS,
      };
     case GET_SERIES_DATA_SUCCESS:
       return {
          ...state,
          seriesData: action.response.data,
          phase: SUCCESS,
      };
    case GET_ALL_BRANDS_DATA_ERROR:
    case GET_ALL_MODELS_DATA_ERROR:
    case GET_SERIES_DATA_ERROR:
    case GET_BRAND_MODELS_DATA_ERROR:
    case GET_SERIES_MODELS_DATA_ERROR:
    case GET_MODELS_VARIANT_DATA_ERROR:
    case STORE_VARIANT_DATA_ERROR:
    case GET_QUESTIONS_DATA_ERROR:
    case GET_PROBLEMS_DATA_ERROR:
    case STORE_ORDER_PAYLOAD_DATA_ERROR:
    case STORE_EXTRA_MODEL_DATA_ERROR:
    case STORE_USET_ID_ERROR:
    case RESET_TOKEN_DATA_ERROR:
    case GET_VERIFY_TOKEN_ERROR:
    case PLACE_ORDER_ERROR:
    case SHOW_ORDER_ERROR:
    case GET_CHAT_DATA_ERROR:
      return {
        ...state,
        phase: ERROR,
        error: action.error,
      };
    default:
      return state;
  }
}

/**
 * Store Get All Brands Data
 * @param {String} email
 */
export const getAllBrands = (payload) => ({
  type: GET_ALL_BRANDS_DATA,
  payload,
});

/**
 * Store Get All Models Data
 * @param {String} email
 */
 export const getAllModels = (payload) => ({
  type: GET_ALL_MODELS_DATA,
  payload,
});

/**
 * Store Get SERIES Data
 * @param {String} email
 */
 export const getSeriesData = (payload) => ({
  type: GET_SERIES_DATA,
  payload,
});

/**
 * Store Get BRAND Models Data
 * @param {String} email
 */
 export const getBrandModelData = (payload) => ({
  type: GET_BRAND_MODELS_DATA,
  payload,
});

/**
 * Store Get Series Models Data
 * @param {String} email
 */
 export const getSeriesModelData = (payload) => ({
  type: GET_SERIES_MODELS_DATA,
  payload,
});


/**
 * Store Get Model Variant Data
 * @param {String} email
 */
 export const getModelVariantData = (payload) => ({
  type: GET_MODELS_VARIANT_DATA,
  payload,
});

/**
 * Store STORE_VARIANT_DATA
 * @param {String} email
 */
 export const storeSelectedModelVariantData = (payload) => ({
  type: STORE_VARIANT_DATA,
  payload,
});

/**
 * Store STORE_ORDER_PAYLOAD_DATA
 * @param {String} email
 */
 export const storeOrderPayloadData = (payload) => ({
  type: STORE_ORDER_PAYLOAD_DATA,
  payload,
});

/**
 * Store STORE_EXTRA_MODEL_DATA
 * @param {String} email
 */
 export const storeSelectedModelExtraData = (payload) => ({
  type: STORE_EXTRA_MODEL_DATA,
  payload,
});

/**
 * Store STORE_USET_ID
 * @param {String} email
 */
 export const storeUserId = (payload) => ({
  type: STORE_USET_ID,
  payload,
});
/**
 * Store RESET_TOKEN_DATA
 * @param {String} email
 */
 export const resetTokenData = (payload) => ({
  type: RESET_TOKEN_DATA,
  payload,
});
/**
 * Store GET_QUESTIONS_DATA
 * @param {String} email
 */
 export const getQuestionsData = (payload) => ({
  type: GET_QUESTIONS_DATA,
  payload,
});

/**
 * Store GET_PROBLEMS_DATA
 * @param {String} email
 */
 export const getProblemsData = (payload) => ({
  type: GET_PROBLEMS_DATA,
  payload,
});

/**
 * Store GET_VERIFY_TOKEN
 * @param {String} email
 */
 export const getVerifiedToken = (payload) => ({
  type: GET_VERIFY_TOKEN,
  payload,
});

/**
 * Store PLACE_ORDER
 * @param {String} email
 */
 export const placeOrder = (payload) => ({
  type: PLACE_ORDER,
  payload,
});

/**
 * Store SHOW_ORDER
 * @param {String} email
 */
 export const showOrder = (payload) => ({
  type: SHOW_ORDER,
  payload,
});

/**
 * Store Get BRAND Models Data
 * @param {String} email
 */
 export const getChatData = (payload) => ({
  type: GET_CHAT_DATA,
  payload,
});