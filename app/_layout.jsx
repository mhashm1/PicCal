import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Slot, Stack } from 'expo-router';
import "./globals.css" 
import { ScrollView } from 'react-native-web';

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"
        options={{ headerShown:
            false }}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})