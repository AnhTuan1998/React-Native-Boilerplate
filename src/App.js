import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import ApplicationNavigator from './Navigators/Application'
import { SafeAreaView } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Theme'

const { Layout } = useTheme()

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={Layout.fill} forceInset={{ top: 'never' }}>
      <NavigationContainer>
        <ApplicationNavigator />
      </NavigationContainer>
    </SafeAreaView>
  </Provider>
)

export default App
