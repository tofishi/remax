import {ScrollView,ActivityIndicator,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

 
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"
  import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

 const OnboardingScreen = ({navigation}) => {
  const [isSpeaner, setIsSpeaner] = useState(false);

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');

    const getCity = (text) =>{
      var letters = /^[A-Za-z\f]+$/;
      if(text.match(letters) || text=='')
      {
      setCity(text)
      return true;
     }
   else
     {
    //  alert("only Alphbates");
     return false;
     }
    }
    const getName = (text) =>{
      var letters = /^[A-Za-z\s]+$/;
      if(text.match(letters) || text=='')
      {
      setName(text)
      return true;
     }
   else
     {
    //  alert("only Alphbates");
     return false;
     }
    }

    const getState = (text) =>{
      var letters = /^[A-Za-z\s]+$/;
   if(text.match(letters) || text=='')
     {
      setState(text.toUpperCase() )
      return true;
     }
   else
     {
    //  alert("only Alphbates");
     return false;
     }
    }

    
    const getZipcode = (text) =>{
      var letters = /^[A-Za-z]+$/;



      if(text.length>5){
      
                
        Alert.alert(
          'Warning',
          'Zipcode  should be 5 Digit',
          [
    
            {text: 'OK', onPress: () => console.log('Ok Pressed')},
          ],
          { cancelable: false }
        )
          return false;
    
        }
           else {
           
    setZipcode(text)
         }
  //  if(text.match(letters))
  //    {
  //     setCity(text)
  //     return true;
  //    }
  //  else
  //    {
  //   //  alert("only Alphbates");
  //    return false;
  //    }
      }


    const _gotToHome =()=>{
      navigation.navigate('TabScreen')
    }
    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _actionHomeValatuion =()=>{
       
        if(address ==='' || city ==='' || email ==='' || state ==='' || zipCode ==='' || name ==='' || phone ===''){
          // ToastAndroid.show('Please Fill All Required Fields', ToastAndroid.SHORT)  
       
             
    Alert.alert(
      'Alert',
      'Please Fill All Required Fields',
      [

        {text: 'OK', onPress: () => console.log('Ok Pressed')},
      ],
      { cancelable: false }
    )
            return false;
            }
            else{
              homeValuation()
            }
        
        
      }

      useEffect(() => {
        getCalculation()
      }, [])
      const getCalculation = async () => {
        try {
                const resultOne = await AsyncStorage.getItem('@user_type')
                const resultTwo = await AsyncStorage.getItem('@user_id')
              console.log(resultOne)
                var user_id = 0
                if(resultOne==='"Customer"'){
                  user_id = 2
                }else if(resultOne==='"Realtor"'){
                  user_id = 1
 
                }else{
                  user_id = 3
 

                }
                setUserType(user_id)
 
                setUserId(resultTwo)
 
         } catch(e) {
  
          // error reading value
        }
      }
      
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      const validatePhone = (phone) => {
        return phone.match(
          /^\d{10}$/
        );
      };
      
    const homeValuation = () => {
  
if(email===''){

  
}else{
  if (validateEmail(email)) {
 console.log('valid email')
  } else {
    
 
    Alert.alert(
      'Warning',
      'Invalid Email\nPlease fill valid Email address',
      [

        {text: 'OK', onPress: () => console.log('Ok Pressed')},
      ],
      { cancelable: false }
    )

    return false;
  }
}

 
  
    if(zipCode.length!=5){
      
                
    Alert.alert(
      'Warning',
      'Zipcode  should be 5 Digit',
      [

        {text: 'OK', onPress: () => console.log('Ok Pressed')},
      ],
      { cancelable: false }
    )
      return false;

    }
       else {
       

     }
 console.log(userType)
 console.log('|||')
 console.log(userId)
        
  
 
        const requestOptions = {
         method: 'POST',
         headers: { 
           
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
         },
         body: JSON.stringify({
        //   CompanyID: '62',
          address: address,
          city: city,
          state: state,
          zip:zipCode,
           name:name,
           email:email,
           phone:phone,
           sentBy: userId,
           userType: userType,
          })
      };
      setIsSpeaner(true)
      fetch('https://api.newhomesinorlando.net/homeValuation', requestOptions)
         .then(async response => {
             const isJson = response.headers.get('content-type')?.includes('application/json');
             const data = isJson && await response.json();
             console.log(data)
             // setAgnetData(agnetData)
 
             // check for error response
             if (!response.ok) {
                 // get error message from body or default to response status
                 const error = (data && data.message) || response.status;
                 return Promise.reject(error);
             }else{
                var response = data.result
                if(response===1){
                  Alert.alert(
                    'Thank you',
                    data.message,
                    [
              
                      {text: 'OK', onPress: () => console.log('Ok Pressed')},
                    ],
                    { cancelable: false }
                  )
                  reset()
                  
                }else{
                  
                  Alert.alert(
                    'Warning',
                    data.message,
                    [
              
                      {text: 'OK', onPress: () => console.log('Ok Pressed')},
                    ],
                    { cancelable: false }
                  )
                }
             }
             setIsSpeaner(false)
          
         })
         .catch(error => {
          setIsSpeaner(false)
       
             this.setState({ errorMessage: error.toString() });
         });
      };

      const reset = () => {

            setAddress('');
            setCity('');
            setState('');
            setZipcode('');
            setName('');
            setPhone('');
            setEmail('');
      }
      const getPhone = (text) =>{
    
        var cleaned = ('' + text).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
       var lenth =  text.toString().length
       let letter = text.charAt(0);
       if(letter=='('){
    
    }else{
      if(lenth>10){
        return false
      }
    }
    
        if (match) {
          var num = '(' + match[1] + ') ' + match[2] + '-' + match[3];
          setPhone(num)
        }else{
          if(letter=='('){
    
          }else{
            if(lenth>10){
              return false
            }
          }
          setPhone(text)
    
        }
    
    ;
    
    
      }
    
  return   (
    <View style={styles.screenContainer}>
             {isSpeaner && 
           <View style={{position:'absolute',alignSelf:'center',zIndex: 2,height:'100%',width:'100%',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
          <ActivityIndicator size="large" color="#fff" style={{top:'50%'}}   />
          </View>
 }
         <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
            <KeyboardAwareScrollView style={{width:'100%',marginTop:20,paddingBottom:100}}> 
        <View >
         <ScrollView style={{width:'90%',height:'100%',alignSelf:'center'}}>

            <View>
                <Text style={{fontSize:22,alignSelf:'center',color:'#62a0f7',fontWeight:'bold'}}> Home  Valuation </Text>
            </View>
            <View style={{padding:10,justifyContent:'center'}}>

            <View style={styles.inpurRow}>
            <TextInput
        placeholder='Address *'
        style={styles.inputBox}
        value={address}
        onChangeText={(text) => setAddress(text)}
        keyboardType="default"
        />
            </View>

            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='City *'
        style={styles.inputBox}
        value={city}
        onChangeText={(text) => getCity(text)}
        keyboardType="default"
        />
            </View>

            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='State *'
        style={styles.inputBox}
        value={state}
        onChangeText={(text) => getState(text)}
        autoCapitalize = {"characters"}
        keyboardType="default"
        />
            </View>
            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='Zip*'
        style={styles.inputBox}
        value={zipCode}
        maxLength={5}

        onChangeText={(text) => getZipcode(text)}
        keyboardType="numeric"
        />
            </View>
            
          
            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='Name *'
        style={styles.inputBox}
        value={name}
        onChangeText={(text) => getName(text)}
        keyboardType="default"
        />
            </View>

            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='Phone *'
        style={styles.inputBox}
        value={phone}
        onChangeText={(text) => getPhone(text)}
        maxLength={14}

        keyboardType="phone-pad"
        />
            </View>

            
            <View style={styles.inpurRow}>
            <TextInput
        placeholder='Email *'
        style={styles.inputBox}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        />
            </View>
                 
            <View style={styles.inpurRow}>
            <TouchableOpacity style={styles.btnRow}
                     onPress={() => _actionHomeValatuion()}
        >
            <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Submit</Text>
        </TouchableOpacity> 
            </View>
            </View>

        
        </ScrollView>
        </View>
        </KeyboardAwareScrollView>
         </View>
   
     
)
}
const styles= StyleSheet.create({
    screenContainer:{
      backgroundColor:'#f8f8f8',
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
      }, 
      inputBox:{

        height: 35,
         width:"90%",
  backgroundColor:'white',
        color:'black', 
        borderWidth:1,
        borderColor:'gray',
        borderRadius: 5,
        padding:5,
        paddingLeft:10,
        fontSize:responsiveFontSize(2),
        marginTop:'3%',
        color:'black'
      },
      inpurRow:{
        justifyContent:'center',
        alignItems:'center'
      },
      btnRow:{
        backgroundColor:'#62a0f7',
        width:'80%',
        alignSelf:'center',
        padding:10,
        borderRadius:12,
        marginTop:15
      }
}) 
export default OnboardingScreen;