import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/main/Main";
import Login from "./pages/Auth/Login";
import Auth from "./pages/Auth/Auth";
import {getToken} from "../helprers";
import {connect} from "react-redux";
import {reducersState} from "../store/store";
import { getUserAction } from "../store/reducers/user/actions";

interface Props extends reducersState {

}

function Router(props: Props) {
    let auth = getToken();
    return (
        <BrowserRouter>
            <Switch>
                {
                    auth ? (
                        <React.Fragment>
                            <Route path="/" component={Main}/>
                        </React.Fragment>
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

export default connect(
    (state: reducersState) => {
        return {
            user: state.user
        }
    },
    {
        getUserAction
    }
)(Router)