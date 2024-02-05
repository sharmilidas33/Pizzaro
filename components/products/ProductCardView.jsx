import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './productCardView.style';

const ProductCardView = () => {
    return (
      <TouchableOpacity onPress={()=>{}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri: "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-600x858.jpg"}}
                style= {styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Italian Pizza</Text>
                <Text style={styles.price}>RS 500/-</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
}

export default ProductCardView;
