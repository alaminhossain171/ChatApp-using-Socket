import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import navigationStrings from '../../constains/navigationStrings'

const TermsCondition = ({navigation}) => {
  return (
<View style={{flex:1}}>
<Button title='change' onPress={()=>navigation.navigate(navigationStrings.PHONE_NUMBER)} />
</View>
  )
}

export default TermsCondition

const styles = StyleSheet.create({})