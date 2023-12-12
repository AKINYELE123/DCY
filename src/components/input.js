import { CallingCodePicker } from '@digieggs/rn-country-code-picker';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EyePasswordHide from '../assets/icons/EyePasswordHide';
import EyePasswordShow from '../assets/icons/EyePasswordShow';

const Input = ({
  control,
  name,
  error,
  isPasswordField,
  rightComponent = <></>,
  onPress = () => {},
  editable = true,
  returnKeyType = 'done',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [show, setShow] = useState(false);
  const { field, fieldState } = useController({
    control,
    defaultValue: '',
    name,
  });
  const validateField = () => {
    if (field.value && error) {
      return "pink";
    } else if ((field.value && !error) || isFocused) {
      return "#181E25";
    } else {
      return '#e2e9f0';
    }
  };

  return (
    <TouchableOpacity style={{ paddingTop: 15, ...props }} onPress={onPress}>
      <FloatingLabelInput
        value={field.value}
        onChangeText={field.onChange}
        togglePassword={show}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputStyles={styles.input}
        containerStyles={{
          ...styles.inputContainerStyle,
          paddingLeft: 10,
          paddingRight: 10,
          borderColor: validateField(),
          borderWidth: isFocused || field.value || fieldState.error ? 2 : 1,
        }}
        customLabelStyles={{
          colorFocused: validateField(),
          fontSizeFocused: 11,
        }}
        labelStyles={{
          fontSize: 14,
          color: "white",
        }}
        rightComponent={rightComponent}
        customShowPasswordComponent={<EyePasswordShow />}
        customHidePasswordComponent={<EyePasswordHide />}
        showPasswordContainerStyles={{ paddingRight: 5 }}
        editable={editable}
        returnKeyType={returnKeyType}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}

      {isPasswordField && !error && !field.value ? (
        <View>
          <Text style={styles.info}>Password must be eight characters</Text>
          <Text style={styles.info}>
            Password must contain alphanumeric characters (@ _ # & *)
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: 16,
    height: 60,
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: "red"
  },
  input: {
    fontSize: 14,
    color: "#6A84A0",
    lineHeight: 24,
    paddingTop: 20,
  },
  info: {
    fontSize: 10,
    lineHeight: 16,
    color: "white",
    paddingTop: 3,
  },
  errorText: {
    fontStyle: 'italic',
    fontSize: 12,
    color: "red",
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default Input;
