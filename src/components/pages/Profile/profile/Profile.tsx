import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {reducersState} from "../../../../store/store";
import "./profile.css";
import Axios from "axios";
import coub from "../../../../coub";
import {animated, useSpring} from "react-spring";
import { useParams } from "react-router-dom";

interface Props extends reducersState{
}

function Profile(props: Props) {
    const [channel, setChannel]: any = useState({get: false, user: {}});
    const params: {permalink: string} = useParams();
    const [{ transform }, setShowAnimation] = useSpring(() => ({
        transform: "translateX(150%)",
    }));
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        if(!channel.get) {
            getUser().then(r => {
                setChannel({get: true, user: r.data});
                setShowAnimation({ transform: "translateX(0%)", })
            })
        } else {
            if(params.permalink !== window.location.href.slice((coub.myUrl + "users/").length + 1)) {
    
                setShowAnimation({ transform: "translateX(150%)" });
            }
        }
    });

    async function getUser() {
        return await Axios.get(`${coub.url}/api/v2/channels/${params.permalink}`)
    }

    let avatarUrl = "";
    let nickname = "";

    if(channel.get) {
        avatarUrl = channel.user.avatar_versions.template.replace("%{version}", "profile_pic");
        if(channel.user.background_coub, !videoUrl) {
            setVideoUrl(channel.user.background_coub.file_versions.html5.video.high.url);
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