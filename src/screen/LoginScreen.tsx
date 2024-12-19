import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';



const LoginScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.topImageContainer}>
            <Image source = {require("../assets/topVector.png")} 
            style = {styles.topImage} 
            resizeMode="contain"
            />
        </View>
        <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hello</Text>
      </View>
      <View>
        <Text style={styles.signInText}>Sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome 
        name={"user"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput style= {styles.textInput} placeholder = "Username"/>
      </View>
      <View style={styles.inputContainer}>
        <Fontiso 
        name={"locked"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput 
        style= {styles.textInput} 
        placeholder = "Password"
        secureTextEntry
        />
      </View>
      <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
    </View>
    );
};


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -5,
        width: "100%",
        height: 130,
    },
    helloContainer: {
        marginTop: 140,
        // borderWidth: 1, // Adjust this if needed
    },
    helloText: {
      textAlign: "center",
      fontSize: 70,
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
    },
    inputIcon: {
        marginLeft: 15,
        marginRight: 5,
    },
    textInput: {
        flex: 1,
    },
    forgotPasswordText: {
        color: "#BEBEBE",
        textAlign: "right",
        width: "90%",
        fontSize: 15,
    }
});