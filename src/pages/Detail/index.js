import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import BuyButton from '../../components/BuyButton'
import Dot from '../../components/Dot'
import Footer from '../../components/Footer'
import ShoeSizeButton from '../../components/ShoeSizeButton'

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downdhifter 10'
  })

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
        <View>
          <Text style={[styles.title, {fontSize: 24}]}>R$ 479,99</Text>
        </View>

        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 30}]}>Nike Downshifter 10</Text>
        </View>  

        <View style={styles.dotContainer}>
          <Dot color='black' />
          <Dot color='orange' />
          <Dot color='blue' />
          <Dot color='yellow' />
        </View>

        <View style={{  flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ShoeSizeButton number='40' />
            <ShoeSizeButton bgColor='#17181a' number='42' />
            <ShoeSizeButton number='43' />
            <ShoeSizeButton number='44' />
          </ScrollView>

        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>

          <Text>
              O modelo apresenta cabedal em malha de tramas abertas que auxiliam na flexibilidade e na ventilação interna, que  afasta o mau odor. A palmilha macia fornece conforto durante as passadas, enquanto o solado emborrachado garante aderência e tração.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>
        
        <BuyButton />

        <View style={styles.line} /> 

        <Footer />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
  },
  image: {
    width: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25
  },
  line: {
    borderBottomColor: '#17181A',
    borderBottomWidth: 2,
  }
})