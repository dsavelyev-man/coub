import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import Router from "./Router";
import {reducersState} from "../store/store";
import Axios from "axios";
import coub from "../coub";
import {getToken} from "../helprers";
import {getUserAction} from "../store/reducers/user/actions";

interface Props extends reducersState {

}

function Loader(props: Props) {
    const auth = props.user.auth;

    const dispatch = useDispatch();

    console.log(props);
    useEffect(() => {
        if(!props.user.testAuth && getToken()) {
            getUser()
        } else if(!props.user.auth) {
            dispatch(getUserAction({}, true, false))
        }
    }, [props.user]);

    async function getUser() {
        await Axios.get(coub.url + "/api/v2/users/me", {
            params: {
                access_token: getToken()
            }
        }).then((r) => {
            dispatch(getUserAction(r.data, true, true))
        });
    }

    return auth ? <Router/> : <></>
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
)(Loader)