import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/index'

const Cart = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Cart</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text: {
      color: COLORS.black, 
    },
  });

export default Cart
