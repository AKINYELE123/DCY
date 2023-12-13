import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../../components/GradientButton';
import Input from '../../components/input';
import { useForm } from 'react-hook-form';
import CheckBoxComponent from '../../components/CheckBoxComponent';

const CreatePassword = () => {
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isDirty, isValid },
      } = useForm();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <AntDesign name={"left"} size={25} color={"white"} />
            </TouchableOpacity>

          <View style={styles.FullView}>
          <View style={{marginBottom: 60}}>
                <Text style={styles.HeadText}>Create Password</Text>
                <Text style={styles.SubHeadingText}>This password will unlock your Metamask wallet only on this service</Text>
            </View>

            <View style={{marginBottom: 30}}>
            <Input
                isPassword
                label="Password"
                control={control}
                name="password"
                isPasswordField
                error={errors?.password?.message}
              />
              <Input
                isPassword
                label="Confirm Password"
                control={control}
                name="confirmPassword"
                error={errors?.confirmPassword?.message}
              />
            </View>


            <View>
                <CheckBoxComponent
                text="I understand that DeGe cannot recover this password for me"
                />
            </View>
          </View>

            <View style={styles.buttonContainer}>
                <GradientButton
                    text="Create a New Wallet"
                    colors={['#8AD4EC', '#EF96FF', '#FF56A9', '#FFAA6C']}
                    onPress={() => navigation.navigate('HomeScreen')}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080A0C',
        paddingLeft: 24,
        paddingRight: 24,
        justifyContent: 'space-between',
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        marginBottom: 20
      },
      input: {
        borderWidth: 1,
        borderColor: '#D0D5DD',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginTop: 8,
        color: "red",
        fontFamily: "300",
      },
      HeadText: {
        color: "#70A2FF",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
        bottom: 10
      },
      SubHeadingText: {
        color: "#8FA2B7",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        bottom: 10
      }
});

export default CreatePassword