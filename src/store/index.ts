import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  Action,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkAction } from "redux-thunk";
import { weatherReducer } from "./weatherReducer";

export interface IRootReducer {
  weatherReducer: typeof weatherReducer;
}

const rootReducer = combineReducers({
  weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
