/**
 * @Author tavuit
 * @Created on 6/6/21
 * @Last Modified by tavuit
 * @Last Modified time
 */

import { Button, View } from 'react-native'
import * as React from 'react'

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

export default Login
