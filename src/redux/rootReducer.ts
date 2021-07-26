import { combineReducers } from "redux";
import AppReducer, { AppState } from "./AddItem/reducer";

export interface AppReducerState {
  app: AppState;
}

const rootReducer = combineReducers<AppReducerState>({
  app: AppReducer,
});

export default rootReducer;
