
export function getUserAction(action: object, testAuth: boolean, auth: boolean) {
    return {
        type: "PUT_USER",
        payload: {
            auth,
            testAuth,
            user: action
        }
    }
};