
export function getUserAction(action: object) {
    return {
        type: "PUT_USER",
        payload: {
            auth: true,
            user: action
        }
    }
};