import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const OTPVerificationScreen: React.FC = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Automatically focus the next input if a digit is entered
        if (text && index < inputs.current.length - 1) {
            inputs.current[index + 1]?.focus();
        }
        if (!text && index > 0) { 
            inputs.current[index - 1]?.focus(); 
        }
    };
    const handleChangePassword = () => {
        navigation.navigate("ChangePassword");
    }

    const handleVerify = () => {
        const otpValue = otp.join('');
        if (otpValue.length === 4) {
            // Implement OTP verification logic here
            Alert.alert('Success', 'OTP verified successfully!');
            navigation.navigate("ChangePassword");
        } else {
            Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
        }
    };

    return (

        <View style={styles.container}>
            <View style = {styles.topImageContainer}>
             <Image source = {require("../assets/otpVector.png")} 
              style = {styles.topImage} 
              resizeMode="contain" 
             /> 
            </View>
            <Text style={styles.title}>Enter OTP</Text>
            <View style={styles.otpContainer}>
                {otp.map((_, index) => (
                    <TextInput
                        key={index}
                        ref={(input) => inputs.current[index] = input}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={otp[index]}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Verify OTP</Text>
            </TouchableOpacity>
        </View>
    );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 100,
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -100,
        width: "100%",
        height: 150,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        // backgroundColor: "#D8BFD8",
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    otpInput: { 
        width: 50, 
        height: 50, 
        borderWidth: 1, 
        borderColor: '#FFB6C1', // Green border color for highlight 
        borderRadius: 20, 
        textAlign: 'center', 
        fontSize: 24, 
        color: 'black', 
        marginHorizontal: 5, 
        backgroundColor: '#FFF0F5', // Light green background color 
        shadowColor: '#FFE4E1', // Shadow color 
        shadowOffset: { width: 0, height: 2 }, // Shadow offset 
        shadowOpacity: 0.25, // Shadow opacity 
        shadowRadius: 3.84, // Shadow radius 
        elevation: 5, // Elevation for Android shadow effect 
        },
    verifyButton: {
        backgroundColor: '#D8BFD8',
        padding: 15,
        borderRadius: 10,
    },
    verifyButtonText: {
        color: 'black',
        fontSize: 18,
    },
});
