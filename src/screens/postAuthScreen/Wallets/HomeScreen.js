import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from '../../../components/GradientText';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { FlashList } from "@shopify/flash-list";



const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
    {
        title: "Second Item",
    },
];

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
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
                    renderItem={({ item }) => <Text style={{color: "red"}}>{item.title}</Text>}
                    estimatedItemSize={200}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080A0C',
        paddingLeft: 30,
        paddingRight: 30
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
        fontSize: 10,
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
        justifyContent: "space-between"
    }
});

export default HomeScreen;
