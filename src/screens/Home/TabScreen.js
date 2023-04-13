 
import * as React from 'react';
import {View,Text,Image} from 'react-native'
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import SettingScreen from './SettingScreen'
import LoanPrograms from './LoanPrograms'

import { useNavigation } from '@react-navigation/native';


 const Tab = createBottomTabNavigator();

 function Home() {
    return (
        <HomeScreen />
    );
  }

  function LoanProgram() {
    return (
        <SettingScreen />
    );
  }
  function Calculator() {
    return (
      <LoanPrograms />
    );
  }
 

function App() {
 const navigation = useNavigation();

    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: 'blue',
            fontWeight:'bold',
            headerShown: false
          }}
          
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Image
                resizeMode='contain'
                style={{height:30,width:30}}
                source={require('../../assets/icons/home_bottom.png')}
                />              ),
            }}
          />
             <Tab.Screen
            name="LoanProgram"

            component={LoanProgram}
            listeners={() => ({
              tabPress: (e) => {
                  e.preventDefault();
                  navigation.navigate('Mcfr');
              }
           })}
            options={{
              tabBarLabel: 'Calculator',
              tabBarIcon: ({ color, size }) => (
                <Image
                resizeMode='contain'
                style={{height:30,width:30}}
                source={require('../../assets/icons/calculator.png')}
                />              ),
            }}
          />
             <Tab.Screen
            name="Calculator"
            component={Calculator}
            options={{
              tabBarLabel: 'Loan Programs',
              tabBarIcon: ({ color, size }) => (
                <Image
                resizeMode='contain'
                style={{height:30,width:30}}
                source={require('../../assets/icons/loan_program_bottom.png')}
                />              ),
            }}
          />
          <Tab.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Setting',
              tabBarIcon: ({ color, size }) => (
                <Image
                resizeMode='contain'
                style={{height:30,width:30}}
                source={require('../../assets/icons/more.png')}
                />              ),
            }}
          />
      
        </Tab.Navigator>
      );
}
export default App;