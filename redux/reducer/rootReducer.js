import { combineReducers } from "redux"
import user from "./userReducer"
import trips from "./tripsReducer"
import map from "./mapReducer"
import modal from "./modalReducer"

import {
	USER_LOGOUT
} from '../actions/rootActions'

const appReducer = combineReducers({
	user,
	trips,
	map,
	modal,
})

const rootReducer = (state, action) => {
	if (action.type === 'USER_LOGOUT') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
