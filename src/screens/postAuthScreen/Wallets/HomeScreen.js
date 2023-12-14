import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../../../components/GradientText';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Entypo from "react-native-vector-icons/Entypo";
import { FlashList } from "@shopify/flash-list";
import Dialog from '../../../components/Dialog';
import GradientButton from '../../../components/GradientButton';



const DATA = [
    {
        id: 1,
        title: "Bitcoin",
        price: "$40,000",
        rate: "2%",
        amount: "200.2334 BTC",
        image: require('../../../assets/images/btc.png'),
        links: "TokenDetails"
    },
    {
        id: 1,
        title: "Lite Coin",
        price: "$4",
        rate: "70%",
        amount: "200.2334 LTC",
        image: require('../../../assets/images/lit.png'),
        links: "TokenDetails"
    },
    {
        id: 1,
        title: "Etherum",
        price: "$82",
        rate: "2%",
        amount: "200.2334 ETH",
        image: require('../../../assets/images/eth.png'),
        link: "TokenDetails"
    },
];

const HomeScreen = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const PressModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.sectionHead}>
                    <Text style={styles.title}>Etherium Main</Text>
                </View>

                <View style={styles.section}>
                    <GradientText text="9.2363 ETH" colors={['#70A2FF', '#54F0D1']} />
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.text}>$16,858</Text>
                        <Text style={[styles.text, { color: '#34A239', fontSize: 10, paddingLeft: 5 }]}>+0.7%</Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    {/* SENT */}
                    <TouchableOpacity style={styles.button} onPress={PressModal}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Ionicons name={"paper-plane-outline"} size={25} color={"white"} />
                            <Text style={styles.buttonText}>Sent</Text>
                        </View>
                    </TouchableOpacity>
                    {/* RECIEVE */}
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <MaterialCommunityIcons name={"wallet-plus-outline"} size={25} color={"white"} />
                            <Text style={styles.buttonText}>Recieve</Text>
                        </View>
                    </TouchableOpacity>
                    {/* BUY */}
                    <TouchableOpacity style={styles.button}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", alignContent: "center" }}>
                            <FontAwesome6 name={"dollar-sign"} size={25} color={"white"} />
                            <Text style={styles.buttonText}>Buy</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <FlashList
                    data={DATA}
                    estimatedItemSize={200}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}
                                onPress={() => navigation.navigate("TokenDetails")}
                            >
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10 }} />
                                    <View>
                                        <Text style={{ fontSize: 16, color: "white", fontWeight: "400", marginBottom: 5 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 14, color: "#384657" }}>{item.price}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 16, color: "white", fontWeight: "400" }}>{item.amount}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />


                <View style={styles.buttonContainer}>
                    <Entypo name={"plus"} size={25} color={"#233E93"} />
                    <Text style={{ color: "#233E93", fontSize: 18, fontWeight: "600" }}>Add Tokens</Text>
                </View>

            </View>

            <Dialog
                toggleModal={isModalVisible}
                setToggleModal={setModalVisible}
                style={styles.bottomModalContainer}
                children={
                    <>
                        <View style={{ backgroundColor: "#181E25", paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 18, marginTop: 10 }}>Recieve</Text>
                        </View>
                        <Text style={{ fontSize: 14, color: "#384657", textAlign: "center"}}>Scan address to recieve Payment</Text>
                        <View style={styles.buttonContainer}>
                            <GradientButton
                                text="Request Payment"
                                colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
                                // onPress={() => navigation.navigate('HomeScreen')}
                            />
                        </View>
                    </>
                }
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080A0C',
        paddingLeft: 30,
        paddingRight: 30,

    },
    section: {
        marginBottom: 20,
    },
    sectionHead: {
        marginBottom: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10
    },
    title: {
        fontSize: 13,
        color: 'white',
        textAlign: "center",
        marginBottom: 30,

    },
    text: {
        fontSize: 12,
        color: 'white',
    },
    button: {
        backgroundColor: '#181E25',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100,
        marginBottom: 12,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 5
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    buttonContainer: {
        // justifyContent: 'flex-end',
        marginBottom: 20,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomModalContainer: {
        justifyContent: 'flex-end',
        marginLeft: 0,
        marginRight: 0,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        marginBottom: 20
    },
});

export default HomeScreen;
