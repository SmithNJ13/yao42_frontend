const initialState = {
    BGColour: "white",
}

function BGReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_BG_COLOUR":
            return {...state, BGColour: action.payload}
        default:
            return state
    }
}

export default BGReducer
