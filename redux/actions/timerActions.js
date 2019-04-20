// Actions for Timer

export const START_TIMER = "START_TIMER"
export const TICK = "TICK"

export const startTimer = seconds => ({
  type: START_TIMER,
  payload: { seconds }
})

export const tick = () => ({ type: TICK })
