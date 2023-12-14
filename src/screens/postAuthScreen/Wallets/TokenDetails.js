import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../../../components/GradientText';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { FlashList } from "@shopify/flash-list";
import Modal from "react-native-modal";
import Dialog from '../../../components/Dialog';



const DATA = [
    {
        id: 1,
        action: "Recieved BNB",
        price: "$9.58799",
        status: "Confirmed",
        amount: "0.04 BNB",
        type: "recieve"
    },
    {
        id: 2,
        action: "Sent BNB",
        price: "$547.5365",
        status: "Cancelled",
        amount: "2.354 BNB",
        type: "sent"
    },
    {
        id: 3,
        action: "Recieved BNB",
        price: "$9.58799",
        status: "Confirmed",
        amount: "1.876 BNB",
        type: "recieve"
    },
    {
        id: 1,
        action: "Recieved BNB",
        price: "$9.58799",
        status: "Confirmed",
        amount: "0.04 BNB",
        type: "recieve"
    },
];

const TokenDetails = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    const PressModal = (item) => {
        setCurrentItem(item);
        setModalVisible(!isModalVisible);
    };


    return (
        <>
            <View style={styles.container}>
                <View style={styles.sectionHead}>
                    <Text style={styles.title}>BNB</Text>
                </View>

                <View style={styles.section}>
                    <GradientText text="19.2373 BNB" colors={['#70A2FF', '#54F0D1']} />
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.text}>$4360.8334</Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    {/* SENT */}
                    <TouchableOpacity style={styles.button}>
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

                </View>

                <FlashList
                    data={DATA}
                    estimatedItemSize={200}
                    renderItem={({ item }) => {
                        const statusColor = item.status.toLowerCase() === 'cancelled' ? '#FF0000' : '#50C24C';
                        const iconType = item.type.toLowerCase() === 'sent' ? 'paper-plane-outline' : 'wallet-plus-outline';

                        return (
                            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => {
                                PressModal(item)
                            }}>
                                <Text style={{ color: '#9BACBF', fontSize: 12, fontWeight: "500" }}>May 3 at 10:04am</Text>
                                <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 10 }}>
                                    {/* Apply the dynamically determined icon based on type */}
                                    {item.type.toLowerCase() === 'sent' ? (
                                        <Ionicons name={"paper-plane-outline"} size={25} color={"white"} />
                                    ) : (
                                        <MaterialCommunityIcons name={"wallet-plus-outline"} size={25} color={"white"} />
                                    )}
                                    <View style={{ marginLeft: 10, flexDirection: "row", flex: 1 }}>
                                        <View style={{ flex: 1, marginRight: 10 }}>
                                            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>{item.action}</Text>
                                            <Text style={{ color: statusColor, fontSize: 14, fontWeight: "500" }}>{item.status}</Text>
                                        </View>
                                        <View style={{ marginLeft: 'auto' }}>
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>{item.amount}</Text>
                                                <Text style={{ color: "#8398AF", fontSize: 14, fontWeight: "400" }}>{item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />

            </View>
            <Dialog
                toggleModal={isModalVisible}
                setToggleModal={setModalVisible}
                style={styles.bottomModalContainer}
                children={
                    <>
                    <View style={{ backgroundColor: "#181E25", paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ color: "white", textAlign: "center", fontSize: 18 , marginTop: 10}}>{currentItem?.action ? currentItem?.action : "Deals is a No"}</Text>
                    

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
                    <View>
                        <Text style={{ color: "#8398AF", fontSize: 14, fontWeight: "400" }}>Status</Text>
                        <Text style={{color: "#FFF", fontSize: 12, fontWeight: "500"}}>{currentItem?.status ? currentItem?.status : "Deals is a No"}</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8398AF", fontSize: 14, fontWeight: "400", marginLeft: 'auto'  }}>Date</Text>
                        <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>May 3 at 10:04am</Text>
                    </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
                    <View>
                        <Text style={{ color: "#8398AF", fontSize: 14, fontWeight: "400" }}>From</Text>
                        <Text style={{color: '#FFF', fontSize: 12, fontWeight: "500"}}>0x3Dc6...DfCE</Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8398AF", fontSize: 14, fontWeight: "400", marginLeft: 'auto'  }}>To</Text>
                        <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>0x3Dc6...DfCE</Text>
                    </View>
                    </View>

                    <View style={{width: "100%", backgroundColor: "#28323E", height: "30%",marginTop: 30, borderRadius: 20, padding: 20}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>Amount</Text>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>{currentItem?.amount ? currentItem?.amount : "Deals is a No"}</Text>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "10"}}>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>Network Fee</Text>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>0.002 BNB</Text>
                        </View>
                        <View style={{width: "100%", borderBottomWidth: 0.3, borderBottomColor: "#A8B6C7", marginTop: 15, marginBottom: 10}}/>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>Total Amount</Text>
                            <Text style={{ color: '#FFF', fontSize: 12, fontWeight: "500" }}>6.78 BNB</Text>
                        </View>
                    </View>

                    
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
        fontSize: 16,
        color: 'white',
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "500"
    },
    text: {
        fontSize: 14,
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
        justifyContent: "space-evenly",
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
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    bottomModalContainer: {
        justifyContent: 'flex-end',
        marginLeft: 0,
        marginRight: 0,
    },
});

export default TokenDetails;
