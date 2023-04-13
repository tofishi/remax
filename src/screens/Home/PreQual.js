import React,{ useState, useEffect, useCallback, useRef } from 'react';

import {ScrollView,ActivityIndicator,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert, YellowBox} from 'react-native';
 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
  import Header from "./components/Header"
  import Slider from "./components/Slider"
  import Toggle from "react-native-toggle-element";
  import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

 const OnboardingScreen = ({navigation}) => {

  const [isSpeaner, setIsSpeaner] = useState(false);


    const [modalVisible, setModalVisible] = useState(false);
    const [annualTaxSign, setAnnualTaxSign] = useState(false);
    const [modalVisibleStatus, setModalVisibleStatus] = useState(false);

    const [purchasePrice, setPurchasePrice] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [dowPaymentPercent, setDowPaymentPercent] = useState('');
    const [dowPayment, setDowPayment] = useState('');
    const [creditScore, setCreditScore] = useState('Select Score');
    const [status, setStatus] = useState('Select Status');
    const [zipCode, setZipcode] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [spanish, setSpanish] = useState(false);
    const [agentId, setAgentId] = useState('');

    // const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');


    const _gotToLogin =()=>{
        navigation.navigate('SelectAgent')
      }
      const _gotToHome =()=>{
        navigation.navigate('TabScreen')
      }

      const haldleScore = (text) =>{
         setModalVisible(false)
         setCreditScore(text)

       }
       const handleAnnualTaxToggle = (text) =>{
        setAnnualTaxSign(false)
      }
       const ok = (text) =>{
        setModalVisible(true)
      }
      const nok = (text) =>{
        setModalVisibleStatus(true)
        setStatus(text)

      }
      const haldleScoreNO = (text) =>{
        setModalVisibleStatus(false)
        setStatus(text)
      }
      function currencyFormat(num) {
      
        return  num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
      const haldleDPP = (text) =>{
 
        setDowPaymentPercent(text)

         let calc = purchasePrice*text/100
        let loanAmmountValue = purchasePrice-calc;
         setLoanAmount(currencyFormat(loanAmmountValue))
        // dispatch(setDownPaymentPre(currencyFormat(calc))) //preview
 setDowPayment(currencyFormat(calc))
 

      }


      const mailLink = 'mailto:info@loanbox.biz?subject=Pre Qual&body=Pre Qual \n Purhcase Price: '+purchasePrice+'\n Down Payment:'+ dowPayment +'\n Loan Amount: '+loanAmount+'\n Credit Score: '+creditScore+'\n Spanish:'+spanish+'\n Status: '+status+'\n Name: '+name + '\n Phone '+phone+ '\n Email '+email+ '\n Zip Code '+zipCode;


      const _actionPreQual =()=>{
   
                if(purchasePrice ==='' || dowPayment ==='' || loanAmount ==='' || name ==='' || phone ==='' || email ==='' ){
            
            Alert.alert(
              'Warning',
              'Please Fill All Required Fields',
              [
        
                {text: 'OK', onPress: () => console.log('Ok Pressed')},
              ],
              { cancelable: false }
            )
            return false;
            }
            else{
              
              preQual()
            }
        
        
      }

      useEffect(() => {
        getCalculation()
      })
      const getCalculation = async () => {
        try {
             

            const resultOne = await AsyncStorage.getItem('@agent_info')
            const resultTwo = await AsyncStorage.getItem('@user_id')
            var ok = JSON.parse(resultOne)
            console.log(ok.AgentID)
            setAgentId(ok.AgentID)
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
      const preQual = () => {
      
        // 
  
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
 
        
  
  const requestOptions = {
          method: 'POST',
          headers: { 
            
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
          },
          body: JSON.stringify({
         //   CompanyID: '62',
          agentId: agentId,
          userId: userId,
          purchasePrice: purchasePrice,
          downPayment: dowPayment,
          loanAmount: loanAmount,
          creditScore: creditScore,
          spanish: spanish,
          status: status,
          zipcode:zipCode,
          name:name,
          email:email,
          phone:phone,
            // sentBy: userId,
            // userType: userType,
           })
       };
       setIsSpeaner(true)

       fetch('https://api.newhomesinorlando.net/submitPreQualifiedForm', requestOptions)
          .then(async response => {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson && await response.json();
              
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
                    'Scccess',
                    data.message,
                    [
              
                      {text: 'OK', onPress: () => console.log('Ok Pressed')},
                    ],
                    { cancelable: false }
                  )
                   setIsSpeaner(false)
                   reset()
                   
                 }else{
                  setIsSpeaner(false)
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
              
       

          })
          .catch(error => {
            setIsSpeaner(false)

        
              this.setState({ errorMessage: error.toString() });
          });
      }
      const handleAnnualInsToggle = (text) =>{
  setSpanish(text)
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

      const reset = () => {
        
    
         setPurchasePrice('');
         setLoanAmount('');
         setDowPaymentPercent('');
         setDowPayment('');
         setCreditScore('Select Score');
         setStatus('Select Status');
         setZipcode('');
         setName('');
         setPhone('');
         setEmail('');
         setSpanish(false);
         setAgentId('');
    
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
            <KeyboardAwareScrollView style={{width:'100%',marginTop:20,paddingBottom:150}}>
        <View >
         <ScrollView style={{width:'99%',height:'100%',alignSelf:'center'}}>

            <View>
                <Text style={{fontSize:22,alignSelf:'center',color:'#62a0f7',fontWeight:'bold'}}> Pre Qualification</Text>
            </View>
            <View style={{padding:10}}>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Purchase Price
          </Text>
           <TextInput
        placeholder='0'
        style={styles.inputBox}
        value={purchasePrice}
        onChangeText={(text) => setPurchasePrice(text)}
        keyboardType="numeric"
        />
            </View>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          
          <Text style={styles.titleTetx} >
            Down Payment
          </Text>
           <TextInput
        placeholder='0'
        style={styles.inputBoxMiddle}
        value={dowPaymentPercent}
        onChangeText={(text) => haldleDPP(text)}
        keyboardType="numeric"
        />
         <TextInput
        placeholder='0'
        style={styles.inputBox}
        value={dowPayment}
        onChangeText={(text) => setDowPayment(text)}
        keyboardType="numeric"
        />
            </View>

            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Loan Amount
          </Text>
           <TextInput
        placeholder='0'
        style={styles.inputBox}
        value={loanAmount}
        onChangeText={(text) => setLoanAmount(text)}
        />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Credit Score
          </Text>
          <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => ok(4)} 
      >
        <Text style={[styles.textStyle,styles.titleTetxAlign]}> {creditScore} </Text>
      </TouchableOpacity>  
            </View>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Spanish
          </Text>
          
          <Toggle
  value={spanish}
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
    width: 150,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 80,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/>
            </View>

            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={[styles.titleTetx,styles.titleTetxAlign]} >
            Status
          </Text>
          <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => nok(4)} 
      >
        <Text style={[styles.textStyle,styles.titleTetxAlign]}> {status} </Text>
      </TouchableOpacity> 
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Name
          </Text>
           <TextInput
        placeholder='Enter Name'
        style={styles.inputLeft}
        value={name}
        onChangeText={(text) => getName(text)}
        keyboardType="default"
        />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Phone 
          </Text>
           <TextInput
        placeholder='Enter Phone'
        style={styles.inputLeft}
        value={phone}
        onChangeText={(text) => getPhone(text)}
        keyboardType="phone-pad"
        maxLength={14}
        />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Email
          </Text>
           <TextInput
        placeholder='Enter Email'
        style={styles.inputLeft}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        />
            </View>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.titleTetx} >
            Zip code
          </Text>
           <TextInput
        placeholder='Enter Zip Code'
        style={styles.inputLeft}
        value={zipCode}
        onChangeText={(text) => getZipcode(text)}
        keyboardType="numeric"
        />
            </View>
           
            </View>

            

       
       </ScrollView>
        </View>
        </KeyboardAwareScrollView>
        <View style={{backgroundColor:'#62a0f7',position:'absolute',bottom:0,width:'100%'}}>
        <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        
    <TouchableOpacity style={{backgroundColor:'#62a0f7' ,alignSelf:'center',padding:10,borderRadius:12,marginTop:5}}
         onPress={() => reset()}
    >
        <Image
                    resizeMode='contain'
                  style={{height:25,width:25,alignSelf:'center'}}
                  source={require('../../assets/images/icons/clear-x-jdk50.png')}
                  />
    <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Clear</Text>
    </TouchableOpacity> 

    <TouchableOpacity style={{backgroundColor:'#62a0f7' ,alignSelf:'center',padding:10,borderRadius:12,marginTop:5}}
     onPress={() => Linking.openURL(mailLink)  }
    >
         <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../assets/images/icons/email-icon-jdk50.png')}
                  />
    <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Email</Text>
    </TouchableOpacity> 
 
    <TouchableOpacity style={{backgroundColor:'#62a0f7', alignSelf:'center',padding:10,borderRadius:12,marginTop:5}}
        onPress={() => _actionPreQual()}
    >
         <Image
                    resizeMode='contain'
                    style={{height:25,width:25,alignSelf:'center'}}
                  source={require('../../assets/images/icons/save-icon-clear50.png')}
                  />
    <Text style={{alignSelf:'center',fontSize:responsiveFontSize(2.5),color:'white'}}>Save</Text>
    </TouchableOpacity> 
            </View>
            </View>


            
{/* modal display */}
<Modal
       animationType="slide"
       transparent={true}
        // backdropColor="black"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{backgroundColor:'#62a0f7',top:0,position:'absolute',width:'100%',alignItems:'center',height:40,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text> &nbsp; </Text>
                <Text style={{color:'white',fontSize:22}}>Select Score</Text>
                <TouchableOpacity
            style={{right:responsiveWidth(1),marginRight:responsiveWidth(2)}}
            onPress={() => setModalVisible(false)}
          >
                                                                     <Image
                    resizeMode='contain'
                  style={{height:22,width:22}}
                  source={require('../../assets/images/icons/clear-x-jdk50.png')}
                  />
 
          </TouchableOpacity>
            </View>    
            <View style={{width:'80%',top:40}}>
            <Pressable   onPress={() => haldleScore('760+')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>760+</Text>
            </Pressable>

            <Pressable   onPress={() => haldleScore('740-759')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>740-759</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('720-739')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>720-739</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('700-719')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>700-719</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('680-699')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>680-699</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('660-679')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                <Text style={styles.modalTitle}>Okay</Text>
                <Text style={styles.modalTitle}>660-679</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('640-659')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>640-659</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore('620-639')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>620-639</Text>
            </Pressable>
             
            </View>
            
            
          </View>
        </View>
      </Modal>
      {/* modal display end */}

{/* modal display */}
<Modal
       animationType="slide"
       transparent={true}
        // backdropColor="black"
        visible={modalVisibleStatus}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{backgroundColor:'#62a0f7',top:0,position:'absolute',width:'100%',alignItems:'center',height:40,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text> &nbsp; </Text>
                <Text style={{color:'white',fontSize:22}}>Select</Text>
                <TouchableOpacity
            style={{right:responsiveWidth(1),marginRight:responsiveWidth(2)}}
            onPress={() => setModalVisibleStatus(false)}
          >
                                                                     <Image
                    resizeMode='contain'
                  style={{height:22,width:22}}
                  source={require('../../assets/images/icons/clear-x-jdk50.png')}
                  />
 
          </TouchableOpacity>
            </View>      
            <View style={{width:'80%',top:40}}>
            <Pressable   onPress={() => haldleScoreNO('Not Ready')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>Not Ready</Text>
            </Pressable>

            <Pressable   onPress={() => haldleScoreNO('Ready')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>Ready</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScoreNO('Pre-Qualified')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>Pre-Qualified</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScoreNO('Not Qualified')} style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:5}}>
                 <Text style={styles.modalTitle}>Not Qualified</Text>
            </Pressable>
             
             
            </View>
            
            
          </View>
        </View>
      </Modal>
      {/* modal display end */}

      {/*  */}
      
{/* modal display */}
         </View>



   
     
)
}
const styles= StyleSheet.create({
    screenContainer:{
        backgroundColor:'#fff',
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
      }, 
      button: {
        borderRadius: 6,
        padding: 3,
        width:'35%',
        elevation: 2,
        borderWidth:1,
        marginTop:10
      },
      buttonOpen: {
        backgroundColor: "white",
        borderColor:'gray'
      },
      inputBox:{

     
        // width:"90%",
 
       color:'black', 
       borderWidth:1,
       borderColor:'gray',
       height: 30,
       borderRadius: 5,
       padding:5,
       paddingLeft:10,
       fontSize:responsiveFontSize(2),
       marginTop:'3%',
       color:'black',

        // height: 28,
        textAlign:'right',
         
        // padding:0,
        paddingRight:6,
        color:'black',

        width:'35%',
        borderWidth:1,
        borderColor:'gray',
        color:'black',
        // borderRadius:10,
        // padding:2,
        // paddingLeft:12,
        fontSize:responsiveFontSize(2),
        marginTop:'3%'
      },
      inputBoxMiddle:{
        height: 30,
        borderRadius: 5,
        textAlign:'right',
         marginLeft:35,
        padding:0,
        paddingRight:6,
        color:'black',

        width:'20%',
        borderWidth:1,
        borderColor:'gray',
        color:'black',
        // borderRadius:10,
        padding:2,
        paddingLeft:12,
        fontSize:responsiveFontSize(2),
        marginTop:'3%'
      },
      inputLeft:{
        height: 30,
       borderRadius: 5,
        // textAlign:'right',
         
        padding:0,
        paddingRight:6,
        color:'black',

        width:'35%',
        borderWidth:1,
        borderColor:'gray',
        color:'black',

        padding:2,
        paddingLeft:12,
        fontSize:responsiveFontSize(2),
        marginTop:'3%'
      },
      titleTetx:{
        color:'black',
        fontSize:responsiveFontSize(2.2)
      },
      titleTetxAlign:{
        textAlign:'center',
        color:'black'
      },
      centeredView:{
        width:'80%',
        left:'12%'
      },
      modalView: {
        marginTop: '60%',
        margin: 50,
        backgroundColor: "white",
        borderRadius: 10,
        paddingBottom: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalTitle:{
        color:'black'
      },
      tinyIcon:{
        height:30,
        width:30,
        alignSelf:'center'
        // borderRadius:10
      },
}) 
export default OnboardingScreen;