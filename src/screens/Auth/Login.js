import {CheckBox,ScrollView, ActivityIndicator,ToastAndroid, Share, Text, View, Modal, Pressable, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox, DrawerLayoutAndroid } from 'react-native';

import React, { useEffect, useState } from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import Toggle from "react-native-toggle-element";

import { useSelector, useDispatch } from 'react-redux';
import {
    setCompanyLogo,setLoanAppUrl,setuserType
 } from'../Mcfr/redux/actions';
 
 import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from '@react-native-async-storage/async-storage'; 

const OnboardingScreen = ({ navigation, route }) => {
    const { companyLogo,loanAppUrl,userType
    } = useSelector(state => state.userReducer);
    const [isSelected, setSelection] = useState(false);

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInfo, setLoginInfo] = useState('');
    const [agentInfo, setAgentInfo] = useState('');
    const [uType, setUType] = useState('');
    const [isSpeaner, setIsSpeaner] = useState(false);


    const handleAnnualInsToggle = (text) =>{
         setSelection(text)
            }
    const _gotToSignup = () => {
        navigation.navigate('SelectAgent')
    }


    const _loginAction = () => {
        if (email === '' || password === '' || email === null || password === null ) {
            
            Alert.alert(
                'Warning',
                'Please Fill All required fields',
                [

                  {text: 'OK', onPress: () => console.log('Ok Pressed')},
                ],
                { cancelable: false }
              )

            return false;
        }
        else {

          
            login();

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
                CompanyID: '91',
                email: email,
                password: password,
                deviceType: 'Android',
                deviceToken: 'Android',
                userType: userType,

            })
        };
        setIsSpeaner(true)
        fetch('https://api.newhomesinorlando.net/customerLogin', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // setAgnetData(agnetData)
 
       
                    var response = data.result
                    if (response === 1) {
                        
                        ToastAndroid.show('Login Successfull', ToastAndroid.SHORT)

                        var userType = route.params.displayIndex
                       
                        var login_id = 0
                     
                        if(userType==='Customer'){
                             login_id = data.data[0].UserID 
                        }else if(userType==='Realtor'){
                             login_id = data.data[0].RealtorID

                        }else{
                             login_id = data.data[0].AgentID
                        }
                         
                         saveAgentInfo(data.profile_data[0])
                        saveloginInfo(data.data)
                        saveUserType(userType)
                        saveUserID(login_id)
                        saveUserLoanAppUrl(data.profile_data[0].OtherField12)
                        setIsSpeaner(false)
            if(isSelected===true){
            saveEmail(email)
            savePassword(password)
            }  else{
                saveEmail('')
            savePassword('')
            }

                        dispatch(setLoanAppUrl(data.profile_data[0].OtherField12))
                       
                        navigation.navigate('TabScreen');
                    } else {
                        setIsSpeaner(false)
                        alert(data.message)
                    }
                


            })
            .catch(error => {

                this.setState({ errorMessage: error.toString() });
            });
    };

    const saveEmail = async (value) => {
        try {
          await AsyncStorage.setItem('rEmail',  value)
        } catch (e) {
          // saving error
        }
      }
      const savePassword = async (value) => {
        try {
          await AsyncStorage.setItem('rPassword', value)
        } catch (e) {
          // saving error
        }
      }
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
      const saveUserLoanAppUrl = async (value) => {
        try {
          await AsyncStorage.setItem('@loanAppUrl', value)
        } catch (e) {
          // saving error
        }
      }
    
     
    //  end above saveCalc function
    useEffect(() => { 
        getRememberMe();
          }, []); 
    const getRememberMe = async () => {
        try {
            const newEmail = await AsyncStorage.getItem('rEmail')
            var one = JSON.stringify(newEmail);
            const newPassword = await AsyncStorage.getItem('rPassword')
            var two = JSON.stringify(newPassword);

   setEmail(newEmail)
   setPassword(newPassword)
        } catch (e) {
            console.log('not')
            // error reading value
        }
    }
      
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
  <KeyboardAwareScrollView style={{marginTop:'20%'}}>
 <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center',alignItems:'center'  }}>


<Image
 style={{height:100,width:200,marginTop:'15%'}}
 resizeMode='contain'
                  source={{uri:companyLogo}}
                  />
            <Text style={styles.textTitle}>
                {route.params.displayIndex} Login</Text>
            <View style={{ width: "90%",alignSelf:'center' }}>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder='Email'
                    style={styles.inputText}
                    keyboardType="email-address"
                />
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholder='Password'
                    style={styles.inputText}
                    secureTextEntry={true} 
                    
                />
            </View>
            <View style={styles.reRow}>
                <View style={{flexDirection:'row'}}>
        <View style={{position:'relative',bottom:10}}>
                <Toggle
  value={isSelected}
  style={{marginLeft:10}}
  onPress={(newState) => handleAnnualInsToggle(newState)}
 
   leftTitle='No'
  rightTitle="Yes"
  trackBar={{
    activeBackgroundColor: "#e3e5e2",
    inActiveBackgroundColor: "#e3e5e2",
    borderActiveColor: "white",
    borderInActiveColor: "white",
    borderWidth: 10,
    width: 85,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 50,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/></View>
<Text style={{ fontSize: responsiveFontSize(1.9), color: 'gray' }}>
                Remember
                    </Text>
                </View>
                <TouchableOpacity               
                  onPress={() => navigation.navigate('ForgotPassword')}
>
                    <Text style={{ fontSize: responsiveFontSize(1.9), color: 'gray' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => _loginAction()}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            {route.params.displayIndex === 'Customer' ? (
                <View style={{ marginTop: 10,alignSelf:'center' }}>
                    <Text style={styles.orText}>Or</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}
                        onPress={() => _gotToSignup()}
                    >
                        <Text style={{ color: '#000000', fontSize: responsiveFontSize(2.8) }}>Not Registerd </Text>
                        <Text style={{ color: '#62a0f7', fontSize: responsiveFontSize(2.8) }}>Sign up here </Text>
                    </TouchableOpacity>
                </View>

            ) : (<Text> </Text>)}

</ScrollView>
</KeyboardAwareScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor:'white',
     flex:1,

   justifyContent:'center',
   alignItems:'center',
    },
    inputText:{
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        paddingLeft:10,
        fontSize:responsiveFontSize(2),
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
        width: "90%",
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