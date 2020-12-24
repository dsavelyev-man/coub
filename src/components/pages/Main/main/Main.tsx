import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Navigation from "../../../Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import Profile from "../../Profile/profile/Profile";

export default function Main() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="main">
                <Navigation/>
                <div className="content">
                    <Switch>
                        <Route path="/users/:permalink" component={Profile}/>
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    )
}
