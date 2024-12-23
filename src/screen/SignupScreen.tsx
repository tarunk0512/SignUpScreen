import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

const SignupScreen: React.FC = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number

    const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
    };

    const validatePhoneNumber = (phone: string): boolean => {
    return phoneRegex.test(phone);
    };
    const handleEmailChange = (text: string) => { 
        setEmail(text); 
        if (!validateEmail(text)) { 
            setEmailError("Please enter a valid email address."); 
        } else { 
            setEmailError(""); 
        } };


    const handleRegister = () => {
        let valid = true;
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            valid = false;
        } else {
            setEmailError("");
        }
        if (!validatePhoneNumber(phone)) {
            setPhoneError("Please enter a valid 10-digit phone number.");
            valid = false;
        } else {
            setPhoneError("");
        }
        if (valid) {
            navigation.navigate("Login");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.topImageContainer}>
                    <Image
                        source={require("../assets/topVector.png")}
                        style={styles.topImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.helloContainer}>
                    <Text style={styles.helloText}>Create Account</Text>
                </View>
                <View>
                    <Text style={styles.signInText}>Sign in to your account</Text>
                </View>
                <View style={[styles.inputContainer]}>
                    <FontAwesome
                        name="user"
                        size={30}
                        color="#9A9A9A"
                        style={styles.inputIcon}
                    />
                    <TextInput style={styles.textInput} placeholder="Name" />
                </View>
                <View style={[styles.inputContainer, emailError ? styles.inputError : null]}>
                    <Entypo
                        name="email"
                        size={30}
                        color="#9A9A9A"
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                <View style={[styles.inputContainer, phoneError ? styles.inputError : null]}>
                    <FontAwesome
                        name="phone"
                        size={30}
                        color="#9A9A9A"
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                <View style={styles.inputContainer}>
                    <Fontiso
                        name="locked"
                        size={30}
                        color="#9A9A9A"
                        style={styles.inputIcon}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
                <View style={styles.signInButtonContainer}>
                    <TouchableOpacity onPress={handleRegister}>
                        <View style={styles.signInWrapper}>
                            <Text style={styles.signIn}>Sign In</Text>
                            <AntDesign
                                name="arrowright"
                                size={24}
                                color="black"
                                style={styles.arrowContainer}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.footerText}>
                        Already have an account? Login
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SignupScreen;


const styles = StyleSheet.create({
    scrollContainer: { 
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -70,
        width: "100%",
        height: 150,
    },
    helloContainer: {
        marginTop: 100,
    },
    helloText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "700",
        color: "#262626",
    },
    signInText: {
        textAlign: "center",
        fontSize: 18,
        color:"#262626",
        marginBottom: 30,
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 25,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 20,
        alignItems: "center",
        height: 50,
        zIndex: 1,
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5,
    },
    textInput: {
        flex: 1,
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 1,
    },
    errorText: {
        color: 'red',
        marginTop: -15,
        marginBottom: 10,
    },
    forgotPasswordText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "90%",
        fontSize: 15,
    },
    signInButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
    },
    signIn: {
        color: "#262626",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor : "#D8BFD8",
    },
    arrowContainer : {
    },
    signInWrapper: { 
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#D8BFD8", 
        height: 50,
        paddingHorizontal: 15, 
        borderRadius: 40, 
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        fontSize: 15,
        marginTop: 40,
    },
    leftVectorContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    leftVectorImage: {
        height: 350,
        width: 250,
    },
    leftVectorImageInner: { 
    },
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    }
});

