import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Dot(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 25,
        marginHorizontal: '2.5%',
        elevation: 5
    }
})