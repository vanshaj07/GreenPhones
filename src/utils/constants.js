/**
 * Initiliazed Initial Constant which can be used as phase and mainitaining the state.
 */
const INIT = "INIT";
const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_API_URL;
const BASEURL = process.env.REACT_APP_ROUTER_BASE;
const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;
const HOST_URL = process.env.REACT_APP_HOST_URL;
const METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
};

const ROOT = "root";

/**
 * Export the initial varibale for Store and Reducers
 * API_URL
 * INIT
 * LOADING
 * SUCCESS
 * ERROR
 * KEY
 */

export {
  INIT,
  LOADING,
  SUCCESS,
  ERROR,
  METHOD,
  ROOT,
  API_URL,
  BASEURL,
  IMAGE_URL,
  HOST_URL
};
