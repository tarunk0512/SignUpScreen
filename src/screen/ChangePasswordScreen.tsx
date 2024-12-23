import { StyleSheet, Text, View, Image, TextInput, ImageBackground,
     TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from "react-native-linear-gradient";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";



const ChangePasswordScreen = () => {
    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("Login", { resetSuccess: true});
    }
    return (     
     <View style = {styles.container}>
            <View style = {styles.topImageContainer}>
            <Image source = {require("../assets/providePasswordVector.png")} 
            style = {styles.topImage} 
            resizeMode="contain"
            />
        </View>
        <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Reset Your Password</Text>
      </View>
      <Text style = {styles.registeredEmailText}> Enter the OTP you received on the mail : </Text>
      <View style={styles.inputContainer}>
        <Fontiso 
        name={"locked"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput 
        style= {styles.textInput} 
        placeholder = "New Password"
        secureTextEntry
        />
      </View>
      
      
      <View style={styles.inputContainer}>
        <Fontiso 
        name={"locked"} 
        size={30} 
        color={"#9A9A9A"} 
        style= {styles.inputIcon} />
        <TextInput 
        style= {styles.textInput} 
        placeholder = "Re-enter Password"
        secureTextEntry
        />
      </View>
      <View style = {styles.signInButtonContainer}>
            <TouchableOpacity onPress={handleRegister}> 
              <View style={styles.signInWrapper}>
                   <Text style={styles.signIn}>Change Password</Text> 
                   <AntDesign name="arrowright" size={24} color="black" style={styles.arrowContainer} /> 
                   </View> 
                   </TouchableOpacity>
                   </View>
    
    {/* <View style = {styles.leftVectorContainer}>
        <ImageBackground 
        source = {require("../assets/leftVector.png")} 
        style = {styles.leftVectorImage}
        imageStyle={styles.leftVectorImageInner}>
        </ImageBackground>
    </View> */}
    </View>
   
    );
};


export default ChangePasswordScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center', // Centers the content horizontally 
        justifyContent: 'center', // Centers the content horizontally justifyContent: 'center',

    },
    registeredEmailText: {
        marginTop: 30,
        marginBottom: 5,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
        color: "#262626",
      },
    topImageContainer: { 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    topImage: {
        flex: 1,
        position: 'absolute',
        top: -65,
        width: "100%",
        height: 150,
    },
    helloContainer: {
        marginTop: 140,
        // borderWidth: 1, // Adjust this if needed
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
        zIndex: 1, // Ensure this is above the background image
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
    },
    signInButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
    },
    signIn: {
        color: "#262626",
        fontSize: 18,
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
        marginTop: 10,
        //backgroundColor: "green",
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