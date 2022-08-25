import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ShoeSizeButton(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>
        <Text style={styles.text}>
            {props.number}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#D7D7D7',
        borderWidth: 3,
        borderRadius: 4,
        height: 50,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    text: {
        fontFamily: 'Anton_400Regular',
        color: 'darkgray'
    }
})