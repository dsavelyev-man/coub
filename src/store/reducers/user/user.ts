
const defaultState = {
    auth: false
};

export default function user(state = defaultState, action: { type: string; payload: any; }) {
    if(action.type === "PUT_USER") {
        return action.payload
    }
    return state
}