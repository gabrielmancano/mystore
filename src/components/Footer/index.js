import { ScrollView, View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Shoes from '../Shoes'

export default function Footer() {
  return (
    <View>
        <Text style={styles.text} >VOCÊ TAMBÉM PODE GOSTAR</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Shoes 
                img={require('../../assets/1.png')}
                name='Nike Shox 8'
                price='R$ 479,99'
            />

            <Shoes
                img={require('../../assets/5.png')}
                name='Adidas Flyknit'
                price='R$ 719,99'
            />
            
            <Shoes
                img={require('../../assets/6.png')}
                name='Adidas Newshow'
                price='R$ 239,99'
            />

            <Shoes
                img={require('../../assets/3.png')}
                name='Adidas Star'
                price='R$ 649,99'
            />
            
            <Shoes
                img={require('../../assets/4.png')}
                name='Adidas Campus'
                price='R$ 799,99'
            />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        paddingHorizontal: '2%',
        paddingVertical: '2%',
    }
})