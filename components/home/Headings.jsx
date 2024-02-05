import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './headings.style';
import Icon from 'react-native-vector-icons/Entypo';
import { COLORS } from '../../constants';

const Headings  = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Best Sellers</Text>
            <TouchableOpacity>
                <Icon name="grid" size={26} color={COLORS.black}/>
            </TouchableOpacity>
        </View>
      </View>
    )
}
 
export default Headings;
