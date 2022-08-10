import React from 'react'
import {Provider} from 'react-redux'
import Main from './src'
import store from './src/redux/store'
import {ToastProvider} from 'react-native-toast-notifications'
import {SafeAreaProvider} from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ToastProvider
          animationType="zoom-in"
          placement="bottom"
          duration={3000}>
          <Main />
        </ToastProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
