import {
  applyMiddleware,
  compose,
  createStore,
  DeepPartial,
  Dispatch,
  Middleware,
} from "redux";
import type { RootState } from "./reducer";
import createRootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore(
  preloadedState?: DeepPartial<RootState>,
) {
  const loggerMiddleware: Middleware = () => (next: Dispatch) => (action) => {
    console.log("Dispatch", action);
    return next(action);
  };
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  return createStore(
    createRootReducer(),
    // @ts-expect-error: WIP
    compose(...[middlewareEnhancer]),
    preloadedState,
  );
}
