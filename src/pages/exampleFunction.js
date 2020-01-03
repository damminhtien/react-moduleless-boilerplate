import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

import counterActions from '../actions/counter'
import employeeExampleActions from '../actions/employeeExample'

const ExampleFunction = (props) => {
  const { counterReducer, increaseCount, decreaseCount, getListEmployee } = props
  const { count } = counterReducer
  const { t, i18n } = useTranslation()

  useEffect(() => {
    getListEmployee()
  }, [getListEmployee])

  function changeLanguage(event) {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <div className="Example-screen">
      <h3 className="Example-title">Example page</h3>
      <p className="Example-desc">This is an example description</p>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => increaseCount()}>+</button>&nbsp;
        <button onClick={() => decreaseCount()}>-</button>
      </div>
      <br />
      <div style={{ border: 'solid 1px #ccc' }}>
        <p>
          {t('example.hello')} - {t('example.thankyou', { name: 'VHT' })}
        </p>
        <div onChange={changeLanguage}>
          <label>
            <input type="radio" value="en" name="language" defaultChecked /> Eng
          </label>
          <label>
            <input type="radio" value="vi" name="language" /> Vie
          </label>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counterReducer: state.counterReducer,
})

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => dispatch(counterActions.increaseCount()),
  decreaseCount: () => dispatch(counterActions.decreaseCount()),
  getListEmployee: () => dispatch(employeeExampleActions.getListEmployee()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleFunction)
