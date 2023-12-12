import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';
import GradientText from '../../components/GradientText';
import { useNavigation } from '@react-navigation/native';

const SliderScreen = () => {

    const navigation = useNavigation();

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
            <Swiper
                paginationStyle={{ bottom: 20 }}
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
                            <View style={styles.slideSubHeading}><GradientText text={subtitle} colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']} /></View>
                        </View>
                    </View>
                ))}
            </Swiper>

            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('WalletSetupScreen')} >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#080A0C",
        paddingLeft: 24,
        paddingRight: 24
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
    },
    slideImg: {
        margin: 0,
        justifyContent: 'center',
        height: '77%',
        alignItems: 'center',
        padding: 0,
    },
    slideAbout: {
        marginTop: 22,
    },
    slideHeader: {
        fontFamily: "400",
        fontSize: 40,
        textAlign: 'center',
        color: "#FFFFFF",
    },
    slideSubHeading: {
        paddingTop: 10
    },
    Button: {
        backgroundColor: "#202832",
        height: 48,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    }
});

export default SliderScreen