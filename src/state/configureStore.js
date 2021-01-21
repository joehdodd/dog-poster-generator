import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import root from "./reducers/root";

export default () => {
  const middleWares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(root, composedEnhancers(...enhancers));

  return store;
};