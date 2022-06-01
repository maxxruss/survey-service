export const authDataLoaded = (data: {}) => {
    return {
        type: "FETCH_AUTH_SUCCESS",
        payload: data,
    };
};

export const authDataError = (error: string) => {
    return {
        type: "FETCH_AUTH_FAILURE",
        payload: error,
    };
};

export const authLogOut = () => {
    return {
        type: "AUTH_LOGOUT",
    };
};

export const langSet = (data: string) => {
    return {
        type: "LANG_SET",
        payload: data,
    };
};
