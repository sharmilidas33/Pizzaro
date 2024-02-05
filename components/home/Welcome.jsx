import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './welcome.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.welcometxt}>{" "}Explore The Most</Text>
                <Text style={styles.welcometxt2}>{" "}Delicious Pizzas!</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Icon name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder='Search for the best pizzas..'
                    />
                </View>
            </View>
        </>
    )
}

export default Welcome