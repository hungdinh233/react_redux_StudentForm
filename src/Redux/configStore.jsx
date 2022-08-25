import { createStore, combineReducers } from "redux";
import { ttSinhVienReducer } from "./Reducers/ttSinhVienReducer";

const rootReducer = combineReducers({
  ttSinhVienReducer: ttSinhVienReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
