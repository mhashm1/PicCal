import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="sign-in"
                options={{
                    headerShown: false

                }}
            />
            <Stack.Screen
                name="sign-up"
                options={{
                    headerShown: false

                }}
            />

        </Stack>
        <StatusBar/>
    </>
  )
}

export default AuthLayout
