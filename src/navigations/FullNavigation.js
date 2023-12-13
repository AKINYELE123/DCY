import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SliderScreen from '../screens/preAuthScreen/SliderScreen';
import WalletSetupScreen from '../screens/preAuthScreen/WalletSetupScreen';
import CreatePassword from '../screens/preAuthScreen/CreatePassword';
import HomeScreen from '../screens/postAuthScreen/Wallets/HomeScreen';

const FullNavigation = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="SliderScreen">
            <Screen name="SliderScreen" component={SliderScreen} />
            <Screen name="WalletSetupScreen" component={WalletSetupScreen} />
            <Screen name="CreatePassword" component={CreatePassword} />
            <Screen name="HomeScreen" component={HomeScreen} />
        </Navigator>
    );
};
export default FullNavigation
