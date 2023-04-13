import React,{ useState, useEffect } from 'react';
import {Share,Text,Linking, View, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,ScrollView} from 'react-native';
import Header from "./components/Header"

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const {height,width} = Dimensions.get("screen");
 

 
const InfoScreen = ({navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=qcm.home1stlending',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
     const _gotTohome =()=>{
        navigation.navigate('HomeScreen')
      }
 return (
    <View >
      <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
    <View style={styles.pageContainer}>
    <ScrollView style={[styles.scrollView,styles.mrBottom]} showsVerticalScrollIndicator={false}>
        <View style={styles.firstRow}>
        <View style={styles.firstCol}>
        <Image
        resizeMode='contain'
                  style={[styles.tinyIcon,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/icons/review-icon-blue50.png')}
                  />
           <Text style={styles.testStyle}>Review</Text>
          </View>
          <View style={styles.firstCol} >
            <TouchableOpacity  onPress={(text)=>onShare(text)} >
            <Image
            resizeMode='contain'
                  style={[styles.tinyIcon,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/icons/Share50.png')}
                  />
           <Text style={styles.testStyle}>Share</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.firstCol}>
          <Image
          resizeMode='contain'
                  style={[styles.tinyIcon,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/icons/Email-icon-50x50.png')}
                  />
           <Text style={styles.testStyle}>Feedback</Text>
          </View>
        </View>

    {/* secon row for version */}
    <View style={styles.firstRow}>
     <View style={styles.firstCol}>
        <Text  style={{fontWeight:"bold",color:"black",fontSize:responsiveFontSize(2.1)}}  > Version 1.0.3</Text> 
      <Text style={styles.testStyle}>  Minor UI/UX updates</Text>

      </View>
    
      <View style={styles.firstCol}>
      <Text style={styles.testStyle}>04-06-2023</Text>
      </View>
    </View>
    
    {/* thir row  */}
    <View style={styles.groupBtnBg}>
     
     <TouchableOpacity style={[styles.button,styles.padLeft]}  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/terms-of-use/')}   >
                    <Text style={[styles.buttonFonts]} >Terms of Use</Text>
                </TouchableOpacity>  
      
       
     
      <TouchableOpacity style={[styles.button,styles.paddingRignt]}     onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/privacy-policy/')}>
                    <Text style={[styles.buttonFonts]} >Privacy Policy</Text>
                </TouchableOpacity>  
     
    </View>
    {/*  */}
   
 {/* thir row  */}
 <View style={styles.firstRowIOS}> 
     {/*  */}
     <View style={styles.appDisplayRow}>
                  <View >
                    <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveFontSize(2.1)}}>More Apps by us in iOS</Text>
                    </View>
                    </View>
            <View style={styles.appDisplayRow}>
                
         
                  <View style={styles.firstColApp} >
                  <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/us/app/ez-calculator-by-ez-calcs/id1137340502')} >
                  <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/calculatorapp_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Calculator {'\n'} </Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.firstColApp}>
                  <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/us/app/loan-calc-lite/id1146113594')} >
                  <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/loancal_lite_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Loan Calc {"\n"}- Lite</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.firstColApp}>
                  <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/us/app/loan-calc-pro/id1402137178')} >
                  <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/loancal_pro_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Loan Calc {"\n"}- Pro</Text>
                  </TouchableOpacity>
                  </View>
            </View>
    {/*  */}
     {/*  */}
          <View style={styles.appDisplayRow}>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.loancalculatorforrealtors.com/web-calculator/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/loancal_web_icon.png')}
                />
                <Text style={styles.AppTitle}>Loan Calc {"\n"}- Website </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/simplemortgagecalculator-agent-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/agentapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Real Estate {"\n"} Agent App </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/simplemortgagecalculator-agent-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/loanofficerapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Loan Officer {"\n"} App</Text>
                </TouchableOpacity>
                </View>
          </View>
          
    {/*  */}
    
      {/*  */}
      <View style={styles.appDisplayRow}>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/mortgageratecalculator-company-app/')} >
                <Image
                style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                source={require('../../assets/images/logo/mortgagecompanyapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Lender App {'\n'} </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/mortgageratecalculator-company-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/rebapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Real Estate {"\n"} Broker App </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/in/app/short-term-loan-calc/id1486343141')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/shorttermapp.png')}
                />
                <Text  style={styles.AppTitle}>Short Term {"\n"} Loan App</Text>
                </TouchableOpacity>
                </View>
          </View>
    {/*  */}

         {/*  */}
         <View style={styles.appDisplayRow}>
         <View style={styles.firstColApp}>
         <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/us/app/rehab-loan/id1486343186')} >
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/rehabloanapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>Rehab {"\n"} Loan App</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('http://loanbox.biz/')} >
                <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/loanboxapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>LoanBox {'\n'} </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/us/app/pill-time-for-family/id1573931536')} >
                <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/pilltimeapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>Pill Time {'\n'} </Text>
                </TouchableOpacity>
                </View>
              
          </View>
    {/*  */}
    </View>

    {/*  */}

    
 {/* thir row  */}
  
 <View style={[styles.firstRowIOS , styles.marginToprow,styles.mrBottom]}> 
     {/*  */}
     <View style={styles.appDisplayRow}>
                  <View >
                    <Text style={{fontWeight:'bold',color:'black',fontSize:responsiveFontSize(2.1)}}>More Apps by us in Android</Text>
                    </View>
                    </View>
            <View style={styles.appDisplayRow}>
                
         
                  <View style={styles.firstColApp} >
                  <TouchableOpacity  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ezcalcapp')} >
                  <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/calculatorapp_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Calculator {'\n'} </Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.firstColApp}>
                  <TouchableOpacity  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ezmortgagecalc')} >
                  <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/loancal_lite_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Loan Calc {"\n"}- Lite</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={styles.firstColApp}>
                  <TouchableOpacity  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.mortgagecalc.pro')} >
                  <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/loancal_pro_icon.png')}
                  />
                  <Text  style={styles.AppTitle}>Loan Calc {"\n"}- Pro</Text>
                  </TouchableOpacity>
                  </View>
            </View>
    {/*  */}
     {/*  */}
          <View style={styles.appDisplayRow}>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.loancalculatorforrealtors.com/web-calculator/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/loancal_web_icon.png')}
                />
                <Text style={styles.AppTitle}>Loan Calc {"\n"}- Website </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/simplemortgagecalculator-agent-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/agentapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Real Estate {"\n"} Agent App </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/simplemortgagecalculator-agent-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/loanofficerapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Loan Officer {"\n"} App</Text>
                </TouchableOpacity>
                </View>
          </View>
          
    {/*  */}
    
      {/*  */}
      <View style={styles.appDisplayRow}>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/mortgageratecalculator-company-app/')} >
                <Image
                style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                source={require('../../assets/images/logo/mortgagecompanyapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Lender App {'\n'} </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://www.mortgagecalculatorforrealtors.com/mortgageratecalculator-company-app/')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/rebapp_icon.png')}
                />
                <Text  style={styles.AppTitle}>Real Estate {"\n"} Broker App </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://apps.apple.com/in/app/short-term-loan-calc/id1486343141')} >
                <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo/shorttermapp.png')}
                />
                <Text  style={styles.AppTitle}>Short Term {"\n"} Loan App</Text>
                </TouchableOpacity>
                </View>
          </View>
    {/*  */}

         {/*  */}
         <View style={styles.appDisplayRow}>
         <View style={styles.firstColApp}>
         <TouchableOpacity  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.mortgagecalc.pro')} >
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/images/logo/rehabloanapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>Rehab {"\n"} Loan App</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('http://loanbox.biz/')} >
                <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/loanboxapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>LoanBox {'\n'} </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.firstColApp}>
                <TouchableOpacity  onPress={() => Linking.openURL('https://pilltimeforfamily.com/')} >
                <Image
                  style={[styles.tinyLogo,styles.AppTitlemrBottom]}
                  source={require('../../assets/images/logo/pilltimeapp_icon.png')}
                  />
                <Text  style={styles.AppTitle}>Pill Time {'\n'}</Text>
                </TouchableOpacity>
                </View>
              
          </View>
    {/*  */}
    {/*  */}
    </View>

    {/*  */}

    {/*  */}


    </ScrollView>
   
   
    </View>
    
       
    </View>
  
  )
}
const styles= StyleSheet.create({
    pageContainer:{
      justifyContent:'center',
      backgroundColor:'#D7DDE9',
      height:responsiveHeight(87),
      alignItems:"center",
      paddingBottom: responsiveHeight(1),
     
      
    },
    firstRow:{
        backgroundColor:'white',
        width:width-40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        borderRadius:10,
        marginTop:10

    },
    firstCol:{
   
    },
    firstColPP:{
   right:16
    },
    firstColApp:{
      // backgroundColor:'red',
      width:90,alignItems:'center',textAlign:'center'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#62a0f7",
       padding: 15,
      borderRadius:10,
      
    },
    buttonFonts:{
      color:'white',
      fontSize:responsiveFontSize(2),
      fontWeight:'bold'
  },
  tinyIcon:{
    height:40,
    width:40,
    borderRadius:10,alignSelf:'center'
  },
  tinyLogo:{
    height:80,
    width:80,
    borderRadius:10
  },
  firstRowIOS:{
    backgroundColor:'white',
    top:10,
    borderRadius:10,
   paddingTop:15
  },
  appDisplayRow:{
    
    width:width-40,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:responsiveHeight(1),
    paddingTop:responsiveHeight(1),
    // marginTop:20
     alignItems:'center',
     textAlign:'center',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 20,

  },
  marginToprow:{
    marginTop:10
  },
  AppTitle:{
    color:'black',
    // width:50,
    fontSize:responsiveFontSize(1.6),
    textAlign:'center'
  },
  AppTitlemrBottom:{
    bottom:0
  },
  groupBtnBg:{
    alignItems:'center',
    flexDirection:'row',
    alignSelf:'center',
    backgroundColor:'white',
    width:width-40,
     marginTop:10,
     paddingTop:7,
     paddingBottom:7,
     borderRadius:10,
    justifyContent:'space-between',
    paddingHorizontal:5


  },
  header:{
    height:  Platform.OS === 'ios' ? 95 : 10,
    elevation: 60,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor:'#62a0f7',
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  view:{
    margin:10,
    alignItems:'center',
    flexDirection:'row'
  },
  rightView:{
    justifyContent:'flex-end',width:50
  },
  title:{
    color:'white',
    fontSize:22,
    fontFamily:'IBMPlexSans-BoldItalic'

  },
  paddingRignt:{
    marginRight:10
  },
  padLeft:{
    marginLeft:responsiveWidth(2.4)
  },
  testStyle:{
    color:'red',
    fontSize:responsiveFontSize(1.9),
    color:'black'
  },mrBottom:{
    bottom:1
  }
})
export default InfoScreen;