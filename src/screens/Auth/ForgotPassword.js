import {ScrollView, ActivityIndicator,ToastAndroid, Share, Text, View, Modal, Pressable, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox, DrawerLayoutAndroid } from 'react-native';

import React, { useEffect, useState } from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useSelector, useDispatch } from 'react-redux';
import {
    setCompanyLogo,setLoanAppUrl,userType
 } from'../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const OnboardingScreen = ({ navigation, route }) => {
    const { companyLogo,loanAppUrl,userType
    } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState('');
    const [agentInfo, setAgentInfo] = useState('');
    const [uType, setUType] = useState('');
    const [isSpeaner, setIsSpeaner] = useState(false);

    const _gotToSignup = () => {
        navigation.navigate('SelectAgent')
    }


    const _loginAction = () => {
        if (email === '') {
            alert('Please Email Address');
            return false;
        }
        else {

          
            login()

        }
    }



    const login = () => {

       
       
        const requestOptions = {
            
            method: 'POST',
            headers: {

                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
            },
            body: JSON.stringify({
                CompanyID: '62',
                email: email,
                userType: userType,

            })
        };
        setIsSpeaner(true)
        fetch('https://api.newhomesinorlando.net/forgot_password', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // setAgnetData(agnetData)
 
 
                    var response = data.result
                    if (response === 1) {
                   
                        alert(data.Message)

                        setEmail('')
                        setIsSpeaner(false)
                     
                     
                    } else {
                        setIsSpeaner(false)
                        alert(data.Message)
                        setEmail('')
                    }
                


            })
            .catch(error => {

                this.setState({ errorMessage: error.toString() });
            });
    };


    const saveloginInfo = async (value) => {
        try {
          await AsyncStorage.setItem('@login_info', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }
      const saveAgentInfo = async (value) => {
        try {
          await AsyncStorage.setItem('@agent_info', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }


      
      const saveUserType = async (value) => {
        try {
          await AsyncStorage.setItem('@user_type', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }
      const saveUserID = async (value) => {
        try {
          await AsyncStorage.setItem('@user_id', value)
        } catch (e) {
          // saving error
        }
      }
    
     
    //  end above saveCalc function
  
      
    const getCalculation = async () => {
        try {
            const contactsS = await AsyncStorage.getItem('login_info')
            let news = JSON.parse(contactsS)
            console.log(news)

        } catch (e) {
            console.log('not')
            // error reading value
        }
    }


    return (
        <View style={styles.screenContainer}>

{isSpeaner && 
           <View style={{position:'absolute',alignSelf:'center',zIndex: 2,height:'100%',width:'100%',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
          <ActivityIndicator size="large" color="#fff" style={{top:'50%'}}   />
          </View>
 }

<Image
 style={{height:100,width:200,marginTop:'50%'}}
 resizeMode='contain'
                  source={{uri:companyLogo}}
                  />
            <Text style={styles.textTitle}>
                Forgot Password</Text>
                <ScrollView style={{width:'100%',  height:'100%',}}>
            <View style={{ width: "80%",alignSelf:'center' }}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='Email'
                    style={styles.inputText}
                    keyboardType="email-address"
                />
                
            </View>
            <View style={styles.reRow}>
                {/* <TouchableOpacity>
                    <Text style={{ fontSize: responsiveFontSize(1.9), color: 'gray' }}>
                        Remember me
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                 >
                    <Text style={{ fontSize: responsiveFontSize(1.9), color: '#62a0f7' }}>
                        FORGOT PASSWORD ?
                    </Text>
                </TouchableOpacity> */}
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => _loginAction()}
            >
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
            

</ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor:'white',
     flex:1,
    alignContent:'center',
   alignItems:'center',
   justifyContent:'center'
    },
    inputText:{
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        paddingLeft:10,
        fontSize: responsiveFontSize(2),
        color:'black',
        marginTop: '5%'
    },
    btnText:{
        alignSelf: 'center', 
        fontSize: responsiveFontSize(2.5),
         color: 'white'
    },
    textTitle:{
        color: '#62a0f7',
         fontSize: responsiveFontSize(3),
          marginTop: 20,
         alignSelf: 'center'
    },
    reRow:{
        width: "80%",
         flexDirection: 'row',
          justifyContent: 'space-between',
         paddingTop: 15,
         alignSelf:'center'
    },
    loginBtn:{
        backgroundColor: '#62a0f7',
         width: '80%',
          alignSelf: 'center',
           padding: 10,
            borderRadius: 12,
         marginTop: 15
    },
    orText:{
        fontSize: responsiveFontSize(3),
         color: 'black', 
        alignSelf: 'center'
    }
})
export default OnboardingScreen;