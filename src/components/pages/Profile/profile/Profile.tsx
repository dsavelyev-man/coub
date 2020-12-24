import React, {useEffect, useReducer, useState} from "react";
import { connect } from "react-redux";
import {reducersState} from "../../../../store/store";
import "./profile.css";
import Axios from "axios";
import coub from "../../../../coub";
import {animated, useSpring} from "react-spring";

interface Props extends reducersState{
}

const initialState = {
    param: window.location.href.slice((coub.myUrl + "users/").length + 1)
};

function paramReducer(state: any, action: { type: string; payload: any; }) {
    switch (action.type) {
        case 'change':
            console.log(action)
            return action.payload;
        default:
            throw Error
    }
}

function Profile(props: Props) {
    const [channel, setChannel]: any = useState({get: false, user: {}});
    const [param, setParam]:any = useReducer(paramReducer, initialState);
    const [changeParam, setChangeParam] = useState(false);

    const [{ transform }, setShowAnimation] = useSpring(() => ({
        transform: "translateX(150%)",
        onRest: () => {
            if(changeParam) {
                setParam({ type: "change", payload: { param: window.location.href.slice((coub.myUrl + "users/").length + 1)}})
                setChangeParam(false);
                setChannel({get: false, user: {}});
            }
        }
    }));

    useEffect(() => {
        console.log(param)
        if(!channel.get) {
            getUser().then(r => {
                setChannel({get: true, user: r.data});
                setShowAnimation({ transform: "translateX(0%)", })
            })
        } else {
            if(param.param !== window.location.href.slice((coub.myUrl + "users/").length + 1)) {
                console.log(changeParam)
                setChangeParam( true);
                setShowAnimation({ transform: "translateX(150%)" });
            }
        }
        if(false) {
            setParam('aa')
        }
    });

    async function getUser() {
        return await Axios.get(`${coub.url}/api/v2/channels/${param.param}`)
    }

    let avatarUrl = "";
    let videoUrl = "";
    let nickname = "";

    if(channel.get) {
        avatarUrl = channel.user.avatar_versions.template.replace("%{version}", "profile_pic");
        if(channel.user.background_coub) {
            videoUrl = channel.user.background_coub.file_versions.html5.video.high.url;
        }
        nickname = channel.user.title
    }

    console.log(channel)
    return <div className="profile">
        {
            channel.get ? (
                <animated.div style={{transform}} className="profile-content">
                    <div className="profile-content-header">
                        <div className="profile-content-header-avatar">
                            <img className="profile-content-header-image" draggable={false} src={avatarUrl} alt={avatarUrl}/>
                        </div>
                        <div className="profile-content-header-heading-wrapper">
                            <h3 className="profile-content-header-heading">
                                {
                                    nickname
                                }
                            </h3>
                        </div>
                        <div className="profile-content-header-video">
                            <video  width="100%" height="400px" autoPlay muted loop>
                                <source src={videoUrl}/>
                            </video>
                        </div>
                    </div>
                    <div>
                    asdsa
                    </div>
                </animated.div>
            ) : ""
        }
    </div>
}

export default connect(
    (state: reducersState) => {
        return {
            user: state.user
        }
    },
)(Profile)