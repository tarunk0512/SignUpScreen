import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute} from "@react-navigation/native";




const HomePageScreen = () => {
    const navigation = useNavigation();
const handleLogout = () => {
    navigation.navigate("Login", { loggedOut: true});
}
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World....</Text>
            <Text style={styles.text}>Welcome to the Home Page....</Text>
            <View style = {styles.signInButtonContainer}>
                  <TouchableOpacity onPress={handleLogout}> 
                    <View style={styles.signInWrapper}>
                    <AntDesign name="arrowleft" size={20} color="black" style={styles.arrowContainer} /> 
                         <Text style={styles.signIn}>Log Out</Text> 
                         </View> 
                         </TouchableOpacity>
                         </View>
        </View>
    );
};

export default HomePageScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    signInButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        //backgroundColor: "purple"
    },
    text: {
        fontSize: 24,
        color: 'black',
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
        borderRadius: 50, 
    },
});
