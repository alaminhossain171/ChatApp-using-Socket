import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Simple from './Simple'
import Routes from './src/navigation/Routes'
import MessageStar from './src/screens/MsgBox/MessageStar'

const App = () => {
  return (
    <>
    <MessageStar />
      {/* <Simple /> */}
      {/* <Routes /> */}
    </>
  )
}

export default App

const styles = StyleSheet.create({})