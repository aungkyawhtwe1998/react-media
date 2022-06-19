export const addUser = (payload) => {
    return {
        type: "addUser",
        payload: payload
    }
}

export const removeUser = (payload)=>{
    return {
        type: "removeUser",
        payload: payload
    }
}
export const setPage = (payload)=>{
    return {
        type: "setPage",
        payload: payload
    }
}

const actions = {
    addUser, removeUser, setPage
}

export default actions