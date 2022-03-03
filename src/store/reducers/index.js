import { combineReducers } from 'redux'
import GlobalReducer from './GlobalReducer'
import { types } from '../ActionTypes'


const appReducer = combineReducers({
    Global: GlobalReducer,
})

//to reset redux
const RootReducer = (state, action) => {
    if (action.type === types.CLEAR_STORE) {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export default RootReducer