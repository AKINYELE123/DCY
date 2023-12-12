import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';
import GradientText from '../../components/GradientText';

const SliderScreen = () => {

    const slides = [
        {
            id: 1,
            title: 'Property',
            subtitle: 'Diversity',
            image: require('../../assets/images/Candle.png'),
        },
        {
            id: 2,
            title: 'Safe',
            subtitle: 'Security',
            image: require('../../assets/images/Check.png'),
        },
        {
            id: 3,
            title: 'Convienient',
            subtitle: 'Transaction',
            image: require('../../assets/images/Plane.png'),
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Swiper
                    paginationStyle={{ bottom: 0 }}
                    autoplay
                    dotColor="#384657"
                    activeDotColor="#3D8DFF"
                >
                    {slides?.map(({ id, image, subtitle, title }) => (
                        <View style={styles.slide} key={id}>
                            <View style={styles.slideImg}>
                                <Image source={image} style={{ width: '70%', height: '70%' }} />

                            </View>

                            <View style={[styles.slideAbout, { marginBottom: 15 }]}>
                                <Text style={styles.slideHeader}>{title}</Text>
                                <GradientText text="Hello Gradient Text" colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']} />
                            </View>
                        </View>
                    ))}
                </Swiper>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080A0C",
    },
    slideHeader: {
        fontSize: 56,
        fontWeight: "300",
        color: "white"
    },
    slideSubHeading: {
        fontSize: 56,
        fontWeight: "300",
        color: "white"
    }
});

export default SliderScreen