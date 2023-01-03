import { all } from "redux-saga/effects";


import {
  getAllBrandsSaga,
  getAllModelsSaga,
  getSeriesDataSaga,
  getBrandModelDataSaga,
  getSeriesModelDataSaga,
  getModelVariantDataSaga,
  storeSelectedModelVariantDataSaga,
  getQuestionsDataSaga,
  getProblemsDataSaga,
  storeOrderPayloadDataSaga,
  getVerifiedTokenSaga,
  resetTokenDataSaga,
  storeSelectedModelExtraDataSaga,
  placeOrderSaga,
  showOrderSaga,
  getChatDataSaga,
  storeUserIdSaga
} from "./greenMobile/saga"


export default function* rootSaga() {
  yield all([
    getAllBrandsSaga(),
    getAllModelsSaga(),
    getBrandModelDataSaga(),
    getSeriesDataSaga(),
    getSeriesModelDataSaga(),
    getModelVariantDataSaga(),
    storeSelectedModelVariantDataSaga(),
    getQuestionsDataSaga(),
    getProblemsDataSaga(),
    storeOrderPayloadDataSaga(),
    getVerifiedTokenSaga(),
    resetTokenDataSaga(),
    storeSelectedModelExtraDataSaga(),
    placeOrderSaga(),
    showOrderSaga(),
    getChatDataSaga(),
    storeUserIdSaga()
  ]);
}
