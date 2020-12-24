import React, {useEffect} from "react";
import Axios from "axios"
import coub from "../../../coub";

export default function Auth() {
    const url = new URL(window.location.href);
    const noToken = url.searchParams.get("code");
    console.log(noToken);

    useEffect(() => {
        postNoToken()
    });
    async function postNoToken() {
        await Axios.post("http://coub.com/oauth/token", {}, {
            params: {
                client_id: coub.clientId,
                grant_type : "authorization_code",
                code: noToken,
                scopes: "follow recoub",
                client_secret: coub.secretId,
                redirect_uri: "http://ya.ru:4200/auth"
            }
        }).then((r) => {
            if(r.data.access_token) {
                localStorage.setItem("coub-token", r.data.access_token);
                localStorage.setItem("coub-token-time", r.data.created_at);
            }
        });
    }
    return (
        <div>
            sadsad
        </div>
    )
}