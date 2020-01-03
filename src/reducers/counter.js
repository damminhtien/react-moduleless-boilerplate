import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/actionType'

const defaultState = {
  count: 0,
}

const Counter = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default Counter
