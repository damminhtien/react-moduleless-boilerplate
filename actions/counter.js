import { INCREASE_COUNT, DECREASE_COUNT } from './actionType'

const counterActions = {}

counterActions.increaseCount = () => (dispatch) => {
  dispatch({ type: INCREASE_COUNT })
}

counterActions.decreaseCount = () => (dispatch) => {
  dispatch({ type: DECREASE_COUNT })
}

export default counterActions
