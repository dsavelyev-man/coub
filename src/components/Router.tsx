import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/main/Main";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}
