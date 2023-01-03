import { takeLatest, call, put } from "redux-saga/effects";
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
import {
getAllBrandsAPI,
getAllModelsAPI,
getSeriesDataAPI,
getBrandModelDataAPI,
getSeriesModelDataAPI,
getModelVariantDataAPI,
getQuestionsDataAPI,
getProblemsDataAPI,
getVerifiedTokenAPI,
placeOrderAPI,
showOrderAPI,
getChatDataAPI
} from "./api";


/**
 * GET GET_ALL_BRANDS_DATA
 */
function* getAllBrands(action) {
  try {
    const { payload } = action;
    let response = yield call(getAllBrandsAPI, payload);
   // debugger;
    yield put({ type: GET_ALL_BRANDS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_ALL_BRANDS_DATA_ERROR, error });
  }
}
/**
 * GET GET_ALL_BRANDS_DATA
 */
export function* getAllBrandsSaga() {
  yield takeLatest(GET_ALL_BRANDS_DATA, getAllBrands);
}


/**
 * GET GET_ALL_MODELS_DATA
 */
 function* getAllModels(action) {
  try {
    const { payload } = action;
    let response = yield call(getAllModelsAPI, payload);
   // debugger;
    yield put({ type: GET_ALL_MODELS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_ALL_MODELS_DATA_ERROR, error });
  }
}
/**
 * GET GET_ALL_MODELS_DATA
 */
export function* getAllModelsSaga() {
  yield takeLatest(GET_ALL_MODELS_DATA, getAllModels);
}

/**
 * GET GET_SERIES_DATA
 */
 function* getSeriesData(action) {
  try {
    const { payload } = action;
    let response = yield call(getSeriesDataAPI, payload);
   // debugger;
    yield put({ type: GET_SERIES_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_SERIES_DATA_ERROR, error });
  }
}
/**
 * GET GET_SERIES_DATA
 */
export function* getSeriesDataSaga() {
  yield takeLatest(GET_SERIES_DATA, getSeriesData);
}

/**
 * GET GET_BRAND_MODELS_DATA
 */
 function* getBrandModelData(action) {
  try {
    const { payload } = action;
    let response = yield call(getBrandModelDataAPI, payload);
   // debugger;
    yield put({ type: GET_BRAND_MODELS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_BRAND_MODELS_DATA_ERROR, error });
  }
}
/**
 * GET GET_BRAND_MODELS_DATA
 */
export function* getBrandModelDataSaga() {
  yield takeLatest(GET_BRAND_MODELS_DATA, getBrandModelData);
}

/**
 * GET GET_SERIES_MODELS_DATA
 */
 function* getSeriesModelData(action) {
  try {
    const { payload } = action;
    let response = yield call(getSeriesModelDataAPI, payload);
   // debugger;
    yield put({ type: GET_SERIES_MODELS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_SERIES_MODELS_DATA_ERROR, error });
  }
}
/**
 * GET GET_SERIES_MODELS_DATA
 */
export function* getSeriesModelDataSaga() {
  yield takeLatest(GET_SERIES_MODELS_DATA, getSeriesModelData);
}

/**
 * GET GET_MODELS_VARIANT_DATA
 */
 function* getModelVariantData(action) {
  try {
    const { payload } = action;
    let response = yield call(getModelVariantDataAPI, payload);
   // debugger;
    yield put({ type: GET_MODELS_VARIANT_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_MODELS_VARIANT_DATA_ERROR, error });
  }
}
/**
 * GET GET_MODELS_VARIANT_DATA
 */
export function* getModelVariantDataSaga() {
  yield takeLatest(GET_MODELS_VARIANT_DATA, getModelVariantData);
}

/**
 * GET STORE_VARIANT_DATA
 */
 function* storeSelectedModelVariantData(action) {
  try {
    const data = action.payload;
    yield put({ type: STORE_VARIANT_DATA_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: STORE_VARIANT_DATA_ERROR, error });
  }
}
/**
 * GET STORE_VARIANT_DATA
 */
export function* storeSelectedModelVariantDataSaga() {
  yield takeLatest(STORE_VARIANT_DATA, storeSelectedModelVariantData);
}

/**
 * GET STORE_ORDER_PAYLOAD_DATA
 */
 function* storeOrderPayloadData(action) {
  try {
    const data = action.payload;
    yield put({ type: STORE_ORDER_PAYLOAD_DATA_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: STORE_ORDER_PAYLOAD_DATA_ERROR, error });
  }
}
/**
 * GET STORE_ORDER_PAYLOAD_DATA
 */
export function* storeOrderPayloadDataSaga() {
  yield takeLatest(STORE_ORDER_PAYLOAD_DATA, storeOrderPayloadData);
}

/**
 * GET STORE_EXTRA_MODEL_DATA
 */
 function* storeSelectedModelExtraData(action) {
  try {
    const data = action.payload;
    yield put({ type: STORE_EXTRA_MODEL_DATA_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: STORE_EXTRA_MODEL_DATA_ERROR, error });
  }
}
/**
 * GET STORE_EXTRA_MODEL_DATA
 */
export function* storeSelectedModelExtraDataSaga() {
  yield takeLatest(STORE_EXTRA_MODEL_DATA, storeSelectedModelExtraData);
}

/**
 * GET RESET_TOKEN_DATA
 */
 function* resetTokenData(action) {
  try {
    const data = action.payload;
    yield put({ type: RESET_TOKEN_DATA_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: RESET_TOKEN_DATA_ERROR, error });
  }
}
/**
 * GET RESET_TOKEN_DATA
 */
export function* resetTokenDataSaga() {
  yield takeLatest(RESET_TOKEN_DATA, resetTokenData);
}
/**
 * GET GET_QUESTIONS_DATA
 */
 function* getQuestionsData(action) {
  try {
    const { payload } = action;
    let response = yield call(getQuestionsDataAPI, payload);
   // debugger;
    yield put({ type: GET_QUESTIONS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_QUESTIONS_DATA_ERROR, error });
  }
}
/**
 * GET GET_QUESTIONS_DATA
 */
export function* getQuestionsDataSaga() {
  yield takeLatest(GET_QUESTIONS_DATA, getQuestionsData);
}

/**
 * GET GET_PROBLEMS_DATA
 */
 function* getProblemsData(action) {
  try {
    const { payload } = action;
    let response = yield call(getProblemsDataAPI, payload);
   // debugger;
    yield put({ type: GET_PROBLEMS_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_PROBLEMS_DATA_ERROR, error });
  }
}
/**
 * GET GET_PROBLEMS_DATA
 */
export function* getProblemsDataSaga() {
  yield takeLatest(GET_PROBLEMS_DATA, getProblemsData);
}

/**
 * GET GET_VERIFY_TOKEN
 */
 function* getVerifiedToken(action) {
  try {
    const { payload } = action;
    let response = yield call(getVerifiedTokenAPI, payload);
   // debugger;
    yield put({ type: GET_VERIFY_TOKEN_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_VERIFY_TOKEN_ERROR, error });
  }
}
/**
 * GET GET_VERIFY_TOKEN
 */
export function* getVerifiedTokenSaga() {
  yield takeLatest(GET_VERIFY_TOKEN, getVerifiedToken);
}

/**
 * GET PLACE_ORDER
 */
 function* placeOrder(action) {
  try {
    const { payload } = action;
    let response = yield call(placeOrderAPI, payload);
   // debugger;
    yield put({ type: PLACE_ORDER_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: PLACE_ORDER_ERROR, error });
  }
}
/**
 * GET PLACE_ORDER
 */
export function* placeOrderSaga() {
  yield takeLatest(PLACE_ORDER, placeOrder);
}
/**
 * GET SHOW_ORDER
 */
 function* showOrder(action) {
  try {
    const { payload } = action;
    let response = yield call(showOrderAPI, payload);
   // debugger;
    yield put({ type: SHOW_ORDER_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: SHOW_ORDER_ERROR, error });
  }
}
/**
 * GET SHOW_ORDER
 */
export function* showOrderSaga() {
  yield takeLatest(SHOW_ORDER, showOrder);
}

/**
 * GET GET_CHAT_DATA
 */
 function* getChatData(action) {
  try {
    const { payload } = action;
    let response = yield call(getChatDataAPI, payload);
   // debugger;
    yield put({ type: GET_CHAT_DATA_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_CHAT_DATA_ERROR, error });
  }
}
/**
 * GET GET_CHAT_DATA
 */
export function* getChatDataSaga() {
  yield takeLatest(GET_CHAT_DATA, getChatData);
}

/**
 * GET STORE_USET_ID
 */
 function* storeUserId(action) {
  try {
    const data = action.payload;
    yield put({ type: STORE_USET_ID_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: STORE_USET_ID_ERROR, error });
  }
}
/**
 * GET STORE_USET_ID
 */
export function* storeUserIdSaga() {
  yield takeLatest(STORE_USET_ID, storeUserId);
}
