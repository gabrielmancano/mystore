import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default function BuyButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.text}>COMPRAR</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '90%',
        backgroundColor: '#17181A',
        borderRadius: 5,
        marginVertical: '5%',
        marginHorizontal: '2%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 17,
        color: '#FFF'
    }
})