import React, {useEffect, useState} from 'react';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FullNavigation from './FullNavigation';

const AppNavigator = () => {
  const {Navigator, Screen} = createStackNavigator();



  return (
    <NavigationContainer>
      <Navigator>
          <Screen
            name="Screen"
            component={FullNavigation}
            options={{
              header: () => null,
            }}
          />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
