import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Shoes from '../../components/Shoes';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />
        
        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>•</Text>
          <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name='filter-list'
              size={24}
              color='#000'
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} /> 

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes 
            img={require('../../assets/1.png')}
            name='Nike Shox 8'
            price='R$ 479,99'
          />

          <Shoes
            img={require('../../assets/2.png')}
            name='Nike Downshifter 10'
            price='R$ 649,99'
            onClick={() => navigation.navigate('Detail')}
          />

        </View>
          
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2
  }
});