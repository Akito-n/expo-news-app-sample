import React from 'react'
import AppNavigator from './navigation/AppNavigator';
import './config/dayjs'
import { Provider } from 'react-redux'
import store from './store/index';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
