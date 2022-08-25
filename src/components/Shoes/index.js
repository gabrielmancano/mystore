import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Shoes(props) {

    function filterDescription(description) {
        if(description.length < 22) {
            return description; 
        }

        return `${description.substring(0, 18)}...`
    }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image
            source={props.img}
            style={styles.image}
        />
        <Text style={styles.shoesText}>
            {filterDescription(String(props.name))}
        </Text>

        <Text style={[styles.shoesText, { color: '#CECECF'}]}>
            {props.price}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '1.5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16
    }
});