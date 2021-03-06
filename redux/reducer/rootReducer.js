import { combineReducers } from "redux"
import user from "./userReducer"

import {
	USER_LOGOUT
} from '../actions/rootActions'

const appReducer = combineReducers({
	user,
})

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
