// Reducer for Users
import {
	REGISTER_USER,
} from "../actions/userActions"

import { REHYDRATE } from 'redux-persist/lib/constants'

const initialState = {
	user: {},
  friends: [],
  rehydrated: false,
  fbTokenExpires: ''
}

export default user = (state = initialState, action) => {
	switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.user
      if (incoming)
        return Object.assign({}, state, {
          user: {...incoming.user},
          fbTokenExpires: incoming.fbTokenExpires,
          friends: [...action.payload.user.friends],
          rehydrated: true
        })
      else
        return Object.assign({}, state, {
          rehydrated: true,
        })
    case REGISTER_USER: {
      return Object.assign({}, state, {
        user : action.payload.user,
        fbTokenExpires: action.payload.expires
      })
    }

    default:
      return state
  }
}
