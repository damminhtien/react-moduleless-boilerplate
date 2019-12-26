import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import counterActions from '../actions/counter'
import employeeExampleActions from '../actions/employeeExample'

class ExampleClass extends Component {
  componentDidMount() {
    const { getListEmployee } = this.props
    getListEmployee()
  }

  changeLanguage = (event) => {
    const { i18n } = this.props

    i18n.changeLanguage(event.target.value)
  }

  render() {
    const { counterReducer, increaseCount, decreaseCount, t } = this.props
    const { count } = counterReducer

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
          <div onChange={this.changeLanguage}>
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
)(withTranslation()(ExampleClass))
