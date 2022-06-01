type ActionType = {
    type: string;
    payload: {
        id: string;
        name: string;
        email: string;
    };
};

type StateType = {} | undefined;

const reducer = (state: StateType, action: ActionType) => {
    if (state === undefined) {
        return {
            id: "",
            name: "",
            email: "",
            lang: "rus",
        };
    }
    switch (action.type) {
        case "FETCH_AUTH_SUCCESS":
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
            };
        case "FETCH_AUTH_FAILURE":
            return {
                ...state,
                id: "",
                name: "",
                email: "",
            };
        case "AUTH_LOGOUT":
            return {
                ...state,
                id: "",
                name: "",
                email: "",
            };
        case "LANG_SET":
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
