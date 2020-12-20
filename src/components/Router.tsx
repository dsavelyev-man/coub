import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/main/Main";
import Login from "./pages/Auth/Login";
import Auth from "./pages/Auth/Auth";

export default function Router() {
    const auth = false;

    return (
        <BrowserRouter>
            <Switch>
                {
                    auth ? (
                        <Route path="/" component={Main}/>
                    ) : (
                        <React.Fragment>
                            <Route path="/auth" component={Auth}/>
                            <Route exact path="/" component={Login}/>
                        </React.Fragment>
                    )
                }
            </Switch>
        </BrowserRouter>
    )
}
