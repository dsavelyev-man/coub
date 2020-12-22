import React, {useEffect} from "react";
import Axios from "axios"
import coub from "../../../coub";

export default function Auth() {
    const noToken = window.location.href.split("code=");
    console.log(noToken)
    useEffect(() => {
        if(noToken.length === 2 && !localStorage.getItem("coub-no-token")) {
            localStorage.setItem("coub-no-token", noToken[1]);
            window.location.reload()
        } else {
            alert(coub.token + localStorage.getItem("coub-no-token"));
            // (coub.token + localStorage.getItem("coub-no-token"))

            // Axios.post("http://coub.com/oauth/token", {
            //     "grant_type": "authorization_code",
            //     "client_id": "c01f8f3bfc66f2186de88154da78a2c47d4fcc942267c9521abed39e99c8140d",
            //     "client_secret": "547ccb4d313d5bd6579f9c3e396f651c6181c44e56c53ab16cee77cf43422cd1",
            //     "code": localStorage.getItem("coub-no-token"),
            //     "redirect_uri": "http://ya:4200/auth"
            // }, {
            //     headers: {
            //         "Content-Type": "application/json"
            //     }
            // })

            Axios.post(`http://coub.com/oauth/token?grant_type=authorization_code&client_id=c01f8f3bfc66f2186de88154da78a2c47d4fcc942267c9521abed39e99c8140d&redirect_uri=http://ya.ru:4200/auth/token&client_secret=547ccb4d313d5bd6579f9c3e396f651c6181c44e56c53ab16cee77cf43422cd1&code=${localStorage.getItem("coub-no-token")}`)
        }
    });
    return (
        <div>
            sadsad
        </div>
    )
}