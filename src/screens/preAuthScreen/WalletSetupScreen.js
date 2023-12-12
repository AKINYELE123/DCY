import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import GradientButton from '../../components/GradientButton';
import { useNavigation } from '@react-navigation/native';

const WalletSetupScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/Wallet.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Wallet Setup</Text>
        </View>
        <View style={styles.buttonContainer}>
          <GradientButton
            text="Create a New Wallet"
            colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
            onPress={() => navigation.navigate('CreatePassword')} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080A0C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default WalletSetupScreen;
