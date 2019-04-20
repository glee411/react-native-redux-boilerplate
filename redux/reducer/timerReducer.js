// Reducer for Timer

import {
	START_TIMER,
  TICK,
} from "../actions/timerActions"

const initialState = {
  active: false,
	seconds: 10,
}

export default user = (state = initialState, action) => {
	switch (action.type) {
    case START_TIMER: {
      return Object.assign({}, state, {
        active: true
        seconds : action.payload.seconds,
      })
    }

    case TICK: {
      seconds = state.seconds - 1
      if (seconds === 0) {
        return Object.assign({}, state, {
          active: false,
          seconds
        })
      }
      return Object.assign({}, state, {
        seconds
      })
    }

    default:
      return state
  }
}
