import React from "react";
import "../../common/styles/navbar.css";
import Search from "./Search";
import {useSpring, animated} from "react-spring";

export default function Navbar() {
    const showAnimation = useSpring({
        from: {
            transform: "translateY(-100%)"
        },
        to: {
            transform: "translateY(0)"
        }
    });

    return (
        <animated.div style={showAnimation} className="navbar">
            <h2 className="navbar-name">
                DsCoub
            </h2>
            <div className="navbar-search-container">
                <Search />
            </div>
            <div className="navbar-avatar" />
        </animated.div>
    )
}
