import ClientOAuth2 from "client-oauth2";

export default new ClientOAuth2({
    clientId: "c01f8f3bfc66f2186de88154da78a2c47d4fcc942267c9521abed39e99c8140d",
    clientSecret: "547ccb4d313d5bd6579f9c3e396f651c6181c44e56c53ab16cee77cf43422cd1",
    accessTokenUri: "http://coub.com/oauth/token",
    authorizationUri: "http://coub.com/oauth/authorize",
    redirectUri: "http://ya.ru:4200/auth",

})