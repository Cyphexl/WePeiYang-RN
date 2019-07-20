export const gpaTypeReducer = (state = "weighted", action) => {
  switch (action.type) {
    case "SET_SCORE_TYPE":
      state = action.payload
  }
  return state
}

export const authReducer = (state = { token: null, logged: false }, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      state = {
        ...state,
        token: action.payload
      }
      break
    case "LOGIN_SUCCESS":
      state = {
        ...state,
        logged: true
      }
      break
  }
  return state
}