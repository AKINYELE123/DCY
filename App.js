import React from 'react';
import { Text } from 'react-native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SliderScreen from './src/screens/preAuthScreen/SliderScreen';

const App = () => {
  return (
    <>
        <StatusBar
        backgroundColor="#080A0C"
        barStyle="dark-content"
      />
      <SliderScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080A0C",
  }
});

export default App;
