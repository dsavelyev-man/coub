const clientId = "c01f8f3bfc66f2186de88154da78a2c47d4fcc942267c9521abed39e99c8140d";
const redirectAuth = "http://ya.ru:4200/auth";
const secretId = "547ccb4d313d5bd6579f9c3e396f651c6181c44e56c53ab16cee77cf43422cd1";

export default {
    authorizing: `http://coub.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectAuth}`,
    token: `http://coub.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&redirect_uri=http://ya.ru:4200/auth&client_secret=${secretId}&code=`,
    clientId,
    secretId,
    redirectAuth
}