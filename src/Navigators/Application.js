import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, Profile } from '@/Screens'
const Stack = createStackNavigator()

const doNotShowHeaderOption = {
  headerShown: false,
}

const StackScreen = [
  {
    name: 'Login',
    component: Login,
    ...doNotShowHeaderOption,
  },
  {
    name: 'Profile',
    component: Profile,
  },
]

const ApplicationNavigator = () => {
  return (
    <Stack.Navigator>
      {StackScreen.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{ headerShown: item.headerShown }}
          />
        )
      })}
    </Stack.Navigator>
  )
}

export default ApplicationNavigator
