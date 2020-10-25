import React from 'react'
import AppNavigator from './navigation/AppNavigator';
import './config/dayjs'
import { Provider } from 'react-redux'
import store, {persistor} from './store/index';
import { PersistGate } from 'redux-persist/es/integration/react'


const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <AppNavigator />
       </PersistGate>
    </Provider>
  )
}

export default App
