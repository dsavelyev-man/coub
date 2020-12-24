import React, {RefObject, useEffect, useRef} from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {reducersState} from "../../store/store";
import {usePopper} from "react-popper";
import {NavLink} from "react-router-dom";

interface Props extends reducersState {
    parent: RefObject<HTMLDivElement>
    dropdownParentRef: RefObject<HTMLDivElement>
    show: boolean
}

function Dropdown(props: Props) {
    const classes = "navbar-dropdown" +
        (props.show ? " navbar-dropdown-show" : " navbar-dropdown-hide");
    const dropdownRef = useRef();
    const {styles, attributes, forceUpdate} = usePopper(props.parent.current, dropdownRef.current, {
        placement: "bottom-start",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 10]
                }
            }
        ]
    });

    useEffect(() => {
        setTimeout(forceUpdate, 200)
    });

    const dropdown = (
        <div style={styles.popper} {...attributes.popper} ref={dropdownRef}>
            <div className={classes} ref={props.dropdownParentRef}>
                <NavLink
                    to={`/users/${props.user.user.current_channel.permalink}`}
                    className="navbar-dropdown-fn-wrapper"
                >
                    <div className="navbar-dropdown-fn">
                        <label className="navbar-dropdown-fn-label">Профиль</label>
                    </div>
                </NavLink>
                <NavLink to={`/users/${props.user.user.current_channel.permalink}/edit`} className="navbar-dropdown-fn-wrapper">
                    <div className="navbar-dropdown-fn">
                        <label className="navbar-dropdown-fn-label">Настройки</label>
                    </div>
                </NavLink>
            </div>
        </div>
    );

    return ReactDOM.createPortal(dropdown, document.body)
}

export default connect(
    (state: reducersState) => {
        return {
            user: state.user
        }
    },
)(Dropdown)