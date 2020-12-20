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
            Axios.post("http://localhost:3000/auth", { code: localStorage.getItem("coub-no-token") })
        }
    });
    return (
        <div>
            sadsad
        </div>
    )
}