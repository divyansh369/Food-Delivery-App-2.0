export const setUsersDetails = (user) => {
    return{
        type:"SET_USER",
        user:user,
    }
}

export const getUserDetails = () => {
    return {
        type:"GET_USER",
    }
}