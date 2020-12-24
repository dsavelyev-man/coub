import React, {useRef, useState} from "react";
import "./navbar.css";
import Search from "./Search";
import {useSpring, animated} from "react-spring";
import { connect } from "react-redux";
import {reducersState} from "../../store/store";
import Dropdown from "./Dropdown";

interface Props extends reducersState {

}

function Navbar(props: Props) {
    const showAnimation = useSpring({
        from: {
            transform: "translateY(-100%)"
        },
        to: {
            transform: "translateY(0)"
        },
        delay: 400
    });
    const [dropdown, setDropdown] = useState(false);
    const avatarRef = useRef();
    const dropdownParentRef = useRef();

    let avatarUrl = "";

    if(props.user.user) {
        const avatarTemplate = props.user.user.current_channel.avatar_versions.template;
        avatarUrl = avatarTemplate.replace("%{version}", "profile_pic")
    }

    const avatar = (
        avatarUrl ? <img className="navbar-avatar-img" src={avatarUrl} draggable={false} alt={avatarUrl}/> : ""
    );

    function closeDropdown(e: any) {
        if(!e.path.includes(avatarRef.current)) {
            if(!e.path.includes(dropdownParentRef.current)) {
                setDropdown(false);
                window.removeEventListener("click", closeDropdown)
            }
        }
    }

    return (
        <animated.div style={showAnimation} className="navbar">
            <h2 className="navbar-name">
                DsCoub
            </h2>
            <div className="navbar-search-container">
                <Search />
            </div>
            <div
                ref={avatarRef}
                className="navbar-avatar"
                onClick={() => {
                    setDropdown(!dropdown);
                    window.addEventListener("click", closeDropdown)
                }}
            >
                {
                    avatar
                }
            </div>
            <Dropdown parent={avatarRef} dropdownParentRef={dropdownParentRef} show={dropdown}/>
        </animated.div>
    )
}

export default connect(
    (state: reducersState) => {
        return {
            user: state.user
        }
    },
)(Navbar)