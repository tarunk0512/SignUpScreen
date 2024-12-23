import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
import ForgetPasswordScreen from './src/screen/ForgetPasswordScreen';
import ChangePasswordScreen from './src/screen/ChangePasswordScreen';
import HomePageScreen from './src/screen/HomePageScreen';
import OtpVerificationScreen from './src/screen/OtpVerificationScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions ={{
        headerShown: false,
        }}
        >
        <Stack.Screen name = "Login" component={LoginScreen} />
        <Stack.Screen name = "Signup" component={SignupScreen} />
        <Stack.Screen name = "ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name = "ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name = "HomeScreen" component={HomePageScreen} />
        <Stack.Screen name = "OtpVerification" component={OtpVerificationScreen} />
              </Stack.Navigator>
    </NavigationContainer>
    

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;