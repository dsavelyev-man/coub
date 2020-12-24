import React from "react";
import "../common/styles/app.css"
import { Provider } from "react-redux";
import {store} from "../store/store";
import Loader from "./Loader";

export default function App() {
    return <Provider store={store}>
        <Loader/>
    </Provider>
}
