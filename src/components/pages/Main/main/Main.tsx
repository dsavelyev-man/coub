import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Navigation from "../../../Navigation/Navigation";
import {Motion, spring} from "react-motion";

export default function Main() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="main">
                <Navigation/>
                <div className="content">
                    <Motion defaultStyle={{x: 0}} style={{x:spring(10, {stiffness: 210, damping: 100})}}
                    >
                        {
                            value => (
                                <div className="test" style={{ transform: `translateX(${value.x * 10}px)`}}>
                                    {
                                        value.x
                                    }
                                </div>
                            )
                        }
                    </Motion>
                </div>
            </div>
        </React.Fragment>
    )
}
