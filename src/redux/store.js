import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

/**
 * Initiliazed Logger Tools
 */
const logger = createLogger({
  // eslint-disable-next-line no-undef
  predicate: () => process.env.NODE_ENV === "development",
});
middlewares.push(logger);

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
