export default function user(state = false, action: { type: string; payload: any; }) {
    if(action.type === "CHANGE") {
        return action.payload
    }
    return state
}