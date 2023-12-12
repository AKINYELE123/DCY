import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const CheckBoxComponent = ({text}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>{text}</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
        color: 'white',
        fontSize: 14,
        fontWeight: "400"
      },
    });
    


export default CheckBoxComponent