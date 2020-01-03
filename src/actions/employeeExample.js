import { API_GET_LIST_EMPLOYEE } from '../configs/api'
import AuthRequest from '../utils/common/request'

const employeeExampleActions = {}

employeeExampleActions.getListEmployee = () => () => {
  AuthRequest.get(
    API_GET_LIST_EMPLOYEE,
    {},
    (res) => {
      const { data = [] } = res
      console.log('LIST EMPLOYEE====', data)
      return data
    },
    (error) => {
      console.log('ERORR====', error)
    }
  )
}

export default employeeExampleActions
