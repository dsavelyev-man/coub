import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./reducers/user/user";

const reducers = combineReducers({
    user
});



export type reducersState = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunk));