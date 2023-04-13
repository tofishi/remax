import React from 'react';
import {
  StyleSheet
} from 'react-native'; 
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginType from './src/screens/Auth/LoginType';
import Login from './src/screens/Auth/Login';
import SelectAgent from './src/screens/Auth/SelectAgent';
import Signup from './src/screens/Auth/Signup';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import HomeScreen from './src/screens/Home/HomeScreen';
import TabScreen from './src/screens/Home/TabScreen';
import ProfileScreen from './src/screens/Home/ProfileScreen';
import SettingScreen from './src/screens/Home/SettingScreen';
import ShareScreen from './src/screens/Home/ShareScreen';

import DocsRequired from './src/screens/Home/DocsRequired';
import HomeValuation from './src/screens/Home/HomeValuation';
import HousingNews from './src/screens/Home/HousingNews';
import LoanPrograms from './src/screens/Home/LoanPrograms';
import PreQual from './src/screens/Home/PreQual';
import RateSearch from './src/screens/Home/RateSearch';
import InfoScreen from './src/screens/Home/InfoScreen';

import Mcfr from './src/screens/Mcfr/screens/HomeScreen';
import HistoryScreen from './src/screens/Mcfr/screens/HistoryScreen';
 
import { Provider } from 'react-redux';
//import { Store } from './src/redux/store';
import { Store } from './src/screens/Mcfr/redux/store';
  
const Stack = createNativeStackNavigator();

const App = () => {

  return(
     <NavigationContainer>
      {/* <Provider store={Store}> */}
      <Provider store={Store}>
    <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
    >
       
  
 
       
        <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}

        />
       
         
        <Stack.Screen
          name="LoginType"
          component={LoginType}
         
        />
           <Stack.Screen
          name="Login"
          component={Login}
         
        />
          <Stack.Screen
          name="SelectAgent"
          component={SelectAgent}
         
        />
            <Stack.Screen
          name="Signup"
          component={Signup}
         
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
         
        />
         
         <Stack.Screen
          name="TabScreen"
          component={TabScreen}
         
        />
               <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
         
        />
                <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
         
        />

<Stack.Screen
          name="ShareScreen"
          component={ShareScreen}
         
        />

<Stack.Screen
          name="HomeValuation"
          component={HomeValuation}
         
        />
<Stack.Screen
          name="DocsRequired"
          component={DocsRequired}
         
        />
        <Stack.Screen
          name="LoanPrograms"
          component={LoanPrograms}
         
        />
<Stack.Screen
          name="PreQual"
          component={PreQual}
         
        />
        <Stack.Screen
          name="RateSearch"
          component={RateSearch}
         
        />
        
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
         
        />
         <Stack.Screen
          name="HousingNews"
          component={HousingNews}
         
        />
        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
         
        />
           <Stack.Screen
          name="Mcfr"
          component={Mcfr}
         
        />
             <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
         
        />
        
    </Stack.Navigator>
    </Provider>
    {/* </Provider> */}
  </NavigationContainer>
 
  );
  };
 

const styles = StyleSheet.create({
 
});

export default App;