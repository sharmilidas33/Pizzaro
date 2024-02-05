import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'; 
import Icon from 'react-native-vector-icons/Entypo';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
       <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
            <Icon name='location-pin' size={26} color='black'/>
            <Text style={styles.location}>Kolkata, India</Text>

            <View style={{alignItems: "flex-end"}}>
                <View style={styles.cartCount}>
                    <Text style={styles.cartNumber}>8</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='shopping-bag' size={24} color='black'/>
                </TouchableOpacity>
            </View>
        </View>
       </View>
       <ScrollView>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home
