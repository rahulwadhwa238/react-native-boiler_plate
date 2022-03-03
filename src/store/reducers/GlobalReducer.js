import { types } from '../ActionTypes'

const INITIAL_STATE = {
    loader: false,
}

const GlobalReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.TOGGLE_LOADING: {
            return { ...state, loader: payload }
        }
        default: return state
    }
}

export default GlobalReducer

