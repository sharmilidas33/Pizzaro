import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { COLORS } from '../../constants';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef(null);
    
    const slides = [
        "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        "https://img.freepik.com/free-photo/tasty-homemade-traditional-pizza-italian-recipe_24972-2141.jpg",
        "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
    ];

    const handleScroll = (event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;

        const index = Math.floor(contentOffset / slideSize);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                scrollViewRef.current.scrollTo({
                    animated: true,
                    x: (currentIndex + 1) * Dimensions.get('window').width,
                    y: 0,
                });
            } else {
                scrollViewRef.current.scrollTo({
                    animated: true,
                    x: 0,
                    y: 0,
                });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.carouselContainer}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
            >
                {slides.map((slide, index) => (
                    <Image
                        key={index}
                        source={{ uri: slide }}
                        style={[
                            styles.image,
                            index === 1 && styles.secondSlide, // Apply style only to the second slide
                        ]}
                    />
                ))}
            </ScrollView>
            <View style={styles.pagination}>
                {slides.map((_, index) => (
                    <Text
                        key={index}
                        style={[
                            styles.paginationDot,
                            index === currentIndex && styles.paginationDotActive,
                        ]}
                    >
                        ⬤
                    </Text>
                ))}
            </View>
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        width: Dimensions.get('window').width - 20,
        height: 200,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width - 20,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
        marginRight: 1.4,
    },
    secondSlide: {
        // marginRight: 1.4, 
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        borderRadius: 15,
    },
    paginationDot: {
        margin: 3,
        color: COLORS.secondary,
    },
    paginationDotActive: {
        color: COLORS.primary,
    },
});
