import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';
import Fontisto from 'react-native-vector-icons/Fontisto'
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";



const ForgetPasswordScreen= () => {
    const navigation = useNavigation();
    
        const handleChangePassword = () => {
            navigation.navigate("OtpVerification");
        }
   
    return (
        <View style = {styles.container}>
            <View style = {styles.topImageContainer}>
            <Image source = {require("../assets/PurpleResetScreenVector.jpg")} 
            style = {styles.topImage} 
            resizeMode="contain"
            />
        </View>
        <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Reset Your Password</Text>
      </View>

      <Text style = {styles.registeredEmailText}> Enter your registered email id : </Text>
      <View style={styles.inputContainer}>
        <Fontisto 
        name={"email"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput style= {styles.textInput} placeholder = " Registered Email"/>
      </View>

      <View style = {styles.signInButtonContainer}>
            <TouchableOpacity onPress={handleChangePassword}> 
              <View style={styles.signInWrapper}>
                   <Text style={styles.signIn}>Send OTP to Registered Email</Text> 
                   <AntDesign name="arrowright" size={24} color="black" style={styles.arrowContainer} /> 
                   </View> 
                   </TouchableOpacity>
                   </View>
      
   
    </View>
    );
};


export default ForgetPasswordScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center', // Centers the content horizontally 
        justifyContent: 'center', // Centers the content horizontally justifyContent: 'center',
    },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -100,
        width: "100%",
        height: 150,
    },
    helloContainer: {
        marginTop: 100,
        marginBottom: 90,
        // borderWidth: 1, // Adjust this if needed
    },
    helloText: {
    
      textAlign: "center",
      fontSize: 30,
      fontWeight: "700",
      color: "#262626",
    },
    
    registeredEmailText: {
      marginBottom: 20,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      color: "#262626",
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        borderRadius: 25,
        marginHorizontal: 40,
        elevation: 10,
        marginVertical: 10,
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
    
    signInButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        //backgroundColor: "purple"
    },
    signIn: {
        color: "#262626",
        fontSize: 15,
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
        borderRadius: 50, 
    },
    footerText: {
        color: "#262626",
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 15,
        marginTop: 120,
       // backgroundColor: "green",
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
    linearGradient: {
        height: 34,
        width: 56,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    }
});