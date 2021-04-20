import types from "./action"

const globalState = {
    manga: null,
    isLoading: false,
    isError: false
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case types.MANGA_REQUEST:
            return { ...state, isLoading: true, isError: false }
        case types.MANGA_SUCCESS:
            return { ...state, manga: action.manga, isLoading: false, isError: false }
        case types.MANGA_FAILURE:
            return { ...state, isLoading: false, isError: true, manga: null }
        default:
            return state;
    }
}

export default rootReducer;