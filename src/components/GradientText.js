import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({ text, colors }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <LinearGradient
          colors={colors} // Array of gradient colors
          start={{ x: 0, y: 0 }} // Gradient start point (optional)
          end={{ x: 1, y: 0 }} // Gradient end point (optional)
          style={{
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
            {text}
          </Text>
        </LinearGradient>
      </View>
    );
  };

export default GradientText;