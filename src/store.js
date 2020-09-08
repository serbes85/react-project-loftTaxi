import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./modules";
import { reducer } from "./modules";

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore;
