// Actions for Users

export const REGISTER_USER = "REGISTER_USER"

export const registerUser = (user, expires) => ({
  type: REGISTER_USER,
  payload: { user, expires }
})

