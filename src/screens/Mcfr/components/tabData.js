import React,{ useState, useEffect, useCallback, useRef } from 'react';

import {ScrollView,KeyboardAvoidingView,ToastAndroid,Share, Text, View,Modal,Pressable, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage'; 
// import uuid from 'react-native-uuid';
import moment from 'moment';
import Toggle from "react-native-toggle-element";
// import { ScrollView } from 'react-native\-gesture-handler';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';




import { useSelector, useDispatch } from 'react-redux';
import {
   setPurchasePrice,setPurchasePricePre,setPurchasePricePreData,setDownPaymentPercent,setInterestRate,setTerms,
   setDownPayment,setDownPaymentPre,setLoanAmount,setLoanAmountPre,
   setMonthlyPMI,setmonthlyPMIInput,setmonthlyPMIResult,setOtherMonthlyPayments,
   setTotalMonthlyPayments,
   setAnnualTaxInput,setAnnualTaxOutput,setAnnualInsInput,
   setAnnualInsOutput,setAnnualHoaInput,setAnnualHoaOutput,setAnnualOtherInput,
   setAnnualOtherOutput,setAnnualTaxSign,setAnnualInsSign,setAnnualHoaSign,setAnnualOtherSign,
   setFhaMip,setFhaMipOutput,setTotalLoan,setMonthlyPMIFHA,setmonthlyPMIInputFHA
   ,setmonthlyPMIResultFHA,setOtherMonthlyPaymentsFHA,setTotalMonthlyPaymentsFHA,
   setUSDAMip,setUSDAMipOutput,setTotalLoanUSDA,setMonthlyPMIUSDA,setOtherMonthlyPaymentsUSDA 
,setTotalMonthlyPaymentsUSDA,setmonthlyPMIInputUSDA,setmonthlyPMIResultUSDA,
setVAMip,setVAMipOutput,setTotalLoanVA,setMonthlyPMIVA,setOtherMonthlyPaymentsVA 
,setTotalMonthlyPaymentsVA,setmonthlyPMIInputVA,setmonthlyPMIResultVA,
setName,setEmail,setPhone,setTabTypes,setMonthlyPMIPre,setMonthlyPMIVAPre,setMonthlyPMIFHAPre,setMonthlyPMIUSDAPre,
setfhaMipOutputPre,settotalLoanPre,setVAMipOutputPre,settotalLoanVAPre,setUSDAMipOutputPre,settotalLoanUSDAPre

} from'../redux/actions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const {height,width} = Dimensions.get("screen");

 


const HomeScreen = ({ route, fha, conventional, usda , va}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const _gotToHistory =()=>{
    navigation.navigate('HistoryScreen')
  }
 

  // 
  const [ isPro, setIsPro ] = useState(true);
  const [ isLight, setIsLight ] = useState(false);

  const [ language, setLanguage ] = useState("");
  const [ type, setType ] = useState("");
  const [ displayScore, setDisplayScore ] = useState(9);
  const [ displayPurchaseTypeD, setDisplayPurchaseTypeD ] = useState(9);
  const [ displayUseTypeD, setDisplayUseTypeD ] = useState(9);

  const [ purchaseTypeValue, setPurchaseTypeValue ] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPurchaseType, setModalPurchaseType] = useState(false);
  const [modalUseType, setModalUseType] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(true);
const [maskedValue, setMaskedValue] = useState("");
    
    const { purchasePrice,purchasePricePre,purchasePricePreData,downPaymentPercent,interestRate,terms,
            downPayment,downPaymentPre,loanAmount,loanAmountPre,
            monthlyPMI,monthlyPMIInput,monthlyPMIResult ,otherMonthlyPayments,
            totalMonthlyPayments,annualTaxInput,annualTaxOutput,annualInsInput,
            annualInsOutput,annualHoaInput,annualHoaOutput,annualOtherInput,
            annualOtherOutput,annualTaxSign,annualInsSign,annualHoaSign,annualOtherSign,
            fhaMip,fhaMipOutput,totalLoan,monthlyPMIFHA,monthlyPMIInputFHA,
            monthlyPMIResultFHA,otherMonthlyPaymentsFHA,totalMonthlyPaymentsFHA,
            USDAMip,USDAMipOutput,totalLoanUSDA,monthlyPMIUSDA,otherMonthlyPaymentsUSDA,
            totalMonthlyPaymentsUSDA,monthlyPMIInputUSDA,monthlyPMIResultUSDA,
            VAMip,VAMipOutput,totalLoanVA,monthlyPMIVA,otherMonthlyPaymentsVA,
            totalMonthlyPaymentsVA,monthlyPMIInputVA,monthlyPMIResultVA,
            name,email,tabTypes,phone,monthlyPMIPre,monthlyPMIVAPre,monthlyPMIFHAPre,monthlyPMIUSDAPre,
            fhaMipOutputPre,totalLoanPre,VAMipOutputPre,totalLoanVAPre,USDAMipOutputPre,totalLoanUSDAPre

          } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    let closeiconeSize =15
    let closeiconeColor ='gray'
    const [firstSign, setFirstSign] = useState(false);

    function currencyFormat(num) {
      
       return  num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
   }
   function currencyFormatPI(num) {
      
    return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
   function currencyFormatPurchase(num) {
    return  num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }
  
 function currencyFormatTotal(num) {
 
  return '$'+num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
 
 const purchasePPreview = (text) => {


  // if(text===0){
  //   return false
  // }

  //   var pPrice = currencyFormatPurchase(text)
    
  //     dispatch(setPurchasePricePre(pPrice))

  }

  
  const purchasePPreviewD1 = (text) =>{
    if(text===''){
      return false
    }
     dispatch(setPurchasePricePreData(purchasePrice.toFixed(0)))

  }
  const purchasePPreviewD2 = (text) =>{
     dispatch(setPurchasePricePreData(purchasePricePre))
  
  }
  
    const getPurchasePrice = (text) =>{
 
if(text===''){
  return false
}
 
var priceNum = parseFloat(text.replace(/,/g, ""));
       // var pPrice = currencyFormatPurchase(text)
      dispatch(setPurchasePrice(priceNum))
      dispatch(setPurchasePricePreData(priceNum.toFixed(0)))
      // dispatch(setPurchasePricePre(pPrice))
      // dispatch(setPurchasePricePre(text))

      var pPrice = currencyFormatPurchase(text)
    
      dispatch(setPurchasePricePre(pPrice))

      // setPurchasePrice(text)
      
      getCalculateMPIFHA(loanAmount,interestRate,terms)
      getCalculateMPIVA(totalLoanVA,interestRate,terms)
      getCalculateMPI(priceNum,interestRate,terms)
    
  console.log('pPrice'+priceNum)
  console.log('dP'+downPaymentPercent)
      let calc = priceNum*downPaymentPercent/100
      let loanAmmountValue = text-calc;
      dispatch(setLoanAmountPre(currencyFormat(loanAmmountValue))) //preview
      dispatch(setDownPaymentPre(currencyFormat(calc))) //preview
      // dispatch(setDownPaymentPre(currencyFormat(calc))) //preview
      dispatch(setLoanAmount(loanAmmountValue)) 
      dispatch(setDownPayment(calc.toFixed(0)))
   }
 

   const getDownPaymentPercent = (text) =>{

    dispatch(setDownPaymentPercent(text))
    let calc = purchasePrice*text/100
    let loanAmmountValue = purchasePrice-calc;
    dispatch(setLoanAmountPre(currencyFormat(loanAmmountValue))) //preview
    dispatch(setDownPaymentPre(currencyFormat(calc))) //preview
    // dispatch(setDownPaymentPre(currencyFormat(calc))) //preview
    dispatch(setLoanAmount(loanAmmountValue)) 
    dispatch(setDownPayment(calc.toFixed(0)))
    
      var fhaMipResult  = loanAmmountValue*1.75/100
      dispatch(setFhaMipOutput(fhaMipResult.toFixed(0))) //FHA
      dispatch(setfhaMipOutputPre(currencyFormat(fhaMipResult))) //FHA
      
      
      

      //USDA
      var USDAMipResult  = loanAmmountValue*1.01/100
      dispatch(setUSDAMipOutput(USDAMipResult.toFixed(0))) //FHA
      dispatch(setUSDAMipOutputPre(currencyFormat(USDAMipResult))) //FHA
      var  totalLoanResult = 0 ;
      totalLoanResult =   loanAmmountValue+fhaMipResult
      dispatch(setTotalLoan(totalLoanResult.toFixed(0)))
      dispatch(settotalLoanPre(currencyFormat(totalLoanResult)))
      //USDA
      USDAtotalLoanResult =   loanAmmountValue+USDAMipResult
      dispatch(setTotalLoanUSDA(USDAtotalLoanResult.toFixed(0)))
      dispatch(settotalLoanUSDAPre(currencyFormat(USDAtotalLoanResult)))
      

      getCalculateMPIFHA(totalLoanResult,interestRate,terms)
      getCalculateMPIVA(totalLoanVA,interestRate,terms)
      getCalculateMPI(loanAmmountValue,interestRate,terms)


 

          
  dispatch(setVAMip(VAMip))
  var ResultVAMipOutput =   (loanAmmountValue*VAMip)/100
  dispatch(setVAMipOutput(ResultVAMipOutput.toFixed(0)))
  dispatch(setVAMipOutputPre(currencyFormat(ResultVAMipOutput)))
  var total =  sum([ResultVAMipOutput,loanAmmountValue]);
  dispatch(setTotalLoanVA(total.toFixed(0)))
  dispatch(settotalLoanVAPre(currencyFormat(total)))
    getCalculateMPIVA(total,interestRate,terms)

  

  }

  // down payment 
  
  const getDownPayment = (text) =>{

    var priceNum = parseFloat(text.replace(/,/g, ""));

    var dpercent = (priceNum*100)/purchasePrice


    dispatch(setDownPaymentPercent(dpercent.toFixed(0)))
    
    let loanAmmountValue = purchasePrice-priceNum;
    dispatch(setLoanAmountPre(currencyFormat(loanAmmountValue))) //preview
    dispatch(setDownPaymentPre(priceNum)) //preview
    dispatch(setLoanAmount(loanAmmountValue)) 
    dispatch(setDownPayment(priceNum))
    
      var fhaMipResult  = loanAmmountValue*1.75/100
      dispatch(setFhaMipOutput(fhaMipResult.toFixed(0))) //FHA
      dispatch(setfhaMipOutputPre(currencyFormat(fhaMipResult))) //FHA
      
      
      

      //USDA
      var USDAMipResult  = loanAmmountValue*1.01/100
      dispatch(setUSDAMipOutput(USDAMipResult.toFixed(0))) //FHA
      dispatch(setUSDAMipOutputPre(currencyFormat(USDAMipResult))) //FHA
      var  totalLoanResult = 0 ;
      totalLoanResult =   loanAmmountValue+fhaMipResult
      dispatch(setTotalLoan(totalLoanResult.toFixed(0)))
      dispatch(settotalLoanPre(currencyFormat(totalLoanResult)))
      //USDA
      USDAtotalLoanResult =   loanAmmountValue+USDAMipResult
      dispatch(setTotalLoanUSDA(USDAtotalLoanResult.toFixed(0)))
      dispatch(settotalLoanUSDAPre(currencyFormat(USDAtotalLoanResult)))
      

      getCalculateMPIFHA(totalLoanResult,interestRate,terms)
      getCalculateMPIVA(totalLoanVA,interestRate,terms)
      getCalculateMPI(loanAmmountValue,interestRate,terms)


 

          
  dispatch(setVAMip(VAMip))
  var ResultVAMipOutput =   (loanAmmountValue*VAMip)/100
  dispatch(setVAMipOutput(ResultVAMipOutput.toFixed(0)))
  dispatch(setVAMipOutputPre(currencyFormat(ResultVAMipOutput)))
  var total =  sum([ResultVAMipOutput,loanAmmountValue]);
  dispatch(setTotalLoanVA(total.toFixed(0)))
  dispatch(settotalLoanVAPre(currencyFormat(total)))
    getCalculateMPIVA(total,interestRate,terms)

  

  }

  



  // }
   const getInterestRate = (text) =>{
      dispatch(setInterestRate(text))
      
      getCalculateMPIFHA(totalLoan,text,terms) //FHA
      getCalculateMPIUSDA(totalLoanUSDA,text,terms) //USDA
      getCalculateMPIVA(totalLoanVA,text,terms) //VA
      getCalculateMPI(loanAmount,text,terms)

      
   }
   const getName = (text) =>{
    dispatch(setName(text))
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
      dispatch(setPhone(num))
    }else{
      if(letter=='('){

      }else{
        if(lenth>10){
          return false
        }
      }
      dispatch(setPhone(text))

    }

;


  }
  const getEmail = (text) =>{
    dispatch(setEmail(text))
  }

   const getTerms = (text) =>{
  
      getCalculateMPI(loanAmount,interestRate,text)
      getCalculateMPIFHA(totalLoan,interestRate,text)
      getCalculateMPIUSDA(totalLoanUSDA,interestRate,text)
      getCalculateMPIVA(totalLoanVA,interestRate,text)

      // FHA calculation
      var getLTV = 100-downPaymentPercent
      var compareLoanAmount  = loanAmount
      var r = 0
       
      if(text>15){

        
      if(compareLoanAmount<=625500){
      
        if(getLTV<=90){
          r = .80
        }else if(getLTV>90 && getLTV<=95){
          r = .80
        }
        else if(getLTV>95){
          r = .85
        }else{
          r = 9
        }

      }else{
        

        if(getLTV<=90){
          r = 1.0
        }else if(getLTV>90 && getLTV<=95){
          r = 1.0
        }
        else if(getLTV>95){
          r = 1.5
        }else{
          r = 3
        }
      }
    }
    if(text<15){
  
      if(compareLoanAmount<=625500){
      
        if(getLTV<=90){
          r = .45
        }
        else if(getLTV>90){
          r = .70
        }else{
          r = 2
        }

      }else{

        if(getLTV<=78){
          r = .45
        }else if(getLTV>78 && getLTV<=90){
          r = .70
        }
        else if(getLTV>90){
          r = .95
        }else{
          r = 2
        }
      }
    }

dispatch(setmonthlyPMIInputFHA(r.toFixed(2)))
var resultmonthlyPMIResultFHA  = ((loanAmount*r)/12)/100
dispatch(setmonthlyPMIResultFHA(resultmonthlyPMIResultFHA.toFixed(2)))

var resultmonthlyPMIResultUSDA  = ((loanAmount*0.35)/12)/100 //USDA

dispatch(setmonthlyPMIResultUSDA(resultmonthlyPMIResultUSDA.toFixed(2)))

  
getCalculateMPI(loanAmount,interestRate,text)    
    dispatch(setTerms(text))
    //top to bottom calculation
 

   }

   const closeModal = (text) =>{

    setModalVisible(false)
    setModalPurchaseType(false)
    setModalUseType(false)

   }
   const haldleScore = (text) =>{
    getScore(text)
    setModalVisible(!modalVisible)
   }
   const haldlePurchaseType = (text) =>{


    // 
    var score =text
    var  displayScoreValue = 0
    if(score==1) {
    displayScoreValue = 'Purchase'
    }else if(score==2) {
     displayScoreValue = 'Cash-Out Refi'
    }
    else if(score==3) {  
     displayScoreValue = 'IRRRLs'
    }
    else if(score==4) {  
     displayScoreValue = 'Mfg Home Loan'
    }
    else if(score==5) {
     displayScoreValue = 'Loan Assump'
    }
    else if(score==6) {
     displayScoreValue = 'Vandee Loan'
    }
    else if(score==7) {
     displayScoreValue = 'NADL'
    }else{
     displayScoreValue = 'NONE'
     
    }
    
    setDisplayPurchaseTypeD(displayScoreValue)
    // 
    var temValue = text
    var purchaseTypeValue = 0
    switch(temValue) {
        case 1:
          purchaseTypeValue = 0
          setIsDropDownVisible(true)
         
      setPurchaseTypeValue(1)
        break;
        case 2:
          purchaseTypeValue = 0
          setIsDropDownVisible(true)
          

          setPurchaseTypeValue(2)
        break;
        case 3:
          
          purchaseTypeValue = 0.50
          setIsDropDownVisible(false)

        break;
        case 4:

          purchaseTypeValue = 1.00
          setIsDropDownVisible(false)

        // code block
        break;
        case 5:

          purchaseTypeValue = 0.50
          setIsDropDownVisible(false)

        // code block
        break;
        case 6:

          purchaseTypeValue = 2.25
          setIsDropDownVisible(false)

        break;
        case 7:
        
        purchaseTypeValue = 0
        setIsDropDownVisible(true)

        setPurchaseTypeValue(7)
        break;
      default:
        // code block


     
   
      }
  

  dispatch(setVAMip(purchaseTypeValue.toFixed(2)))
  var ResultVAMipOutput =   (loanAmount*purchaseTypeValue)/100
  
  dispatch(setVAMipOutput(ResultVAMipOutput.toFixed(0)))
  dispatch(setVAMipOutputPre(currencyFormat(ResultVAMipOutput)))
  var total =  sum([ResultVAMipOutput,loanAmount]);
  dispatch(setTotalLoanVA(total.toFixed(0)))
    setModalPurchaseType(false)
    getCalculateMPIVA(total,interestRate,terms)



    

      



   }
   const haldleUseType = (text) =>{
    


    //
    var score =text
    var  displayScoreValue = 0
    if(score==1) {
    displayScoreValue = 'First Use'
    }else{
     displayScoreValue = 'Second Use'
     
    }
    
    setDisplayUseTypeD(displayScoreValue) 
    // 

    var  compareValue =0
    
    if((purchaseTypeValue==1) && (text==1)){
      if(downPaymentPercent<5){
        compareValue = 2.30
      }
      if(downPaymentPercent=>5){
        compareValue = 1.65
      }
      if(downPaymentPercent>10){
        compareValue = 1.40
      }
    } 
    if((purchaseTypeValue==1) && (text==2)){
      if(downPaymentPercent<5){
        compareValue = 3.60
      }
      if(downPaymentPercent=>5){
        compareValue = 1.65
      }
      if(downPaymentPercent>10){
        compareValue = 1.40
      }
    } 
    if((purchaseTypeValue==2) && (text==1)){
      compareValue = 2.30

    } 
    if((purchaseTypeValue==2) && (text==2)){
      compareValue = 3.60

    } 
    if((purchaseTypeValue==7) && (text==1)){
      compareValue = 1.25

    } 
    if((purchaseTypeValue==7) && (text==2)){
      compareValue = 0.50

    } 
    
    setModalUseType(false)
    
      
  dispatch(setVAMip(compareValue.toFixed(2)))
  var ResultVAMipOutput =   (loanAmount*compareValue)/100
  dispatch(setVAMipOutput(ResultVAMipOutput.toFixed(0)))
  dispatch(setVAMipOutputPre(currencyFormat(ResultVAMipOutput)))
  var total =  sum([ResultVAMipOutput,loanAmount]);
  dispatch(setTotalLoanVA(total.toFixed(0)))


    setModalPurchaseType(false)
    getCalculateMPIVA(total,interestRate,terms)

   }
   const haldleVAFundingFee = (text) =>{

    dispatch(setVAMip(text))
  var ResultVAMipOutput =   (loanAmount*text)/100
  dispatch(setVAMipOutput(ResultVAMipOutput.toFixed(0)))
  dispatch(setVAMipOutputPre(currencyFormat(ResultVAMipOutput)))
  var total =  sum([ResultVAMipOutput,loanAmount]);
  dispatch(setTotalLoanVA(total.toFixed(0)))


    setModalPurchaseType(false)
    getCalculateMPIVA(total,interestRate,terms)

   }


   const haldleFHAPmi = (text) =>{
    dispatch(setmonthlyPMIInputFHA(text))
var resultmonthlyPMIResultFHA  = ((loanAmount*text)/12)/100
dispatch(setmonthlyPMIResultFHA(resultmonthlyPMIResultFHA.toFixed(2)))



      // Total Result FHA
      var sumOfOtherMonthlyPaymentsFHA = sum([resultmonthlyPMIResultFHA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))
  // FHA
     var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
     dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))
 


}
   function getCalculateMPI(la,ir,trm){
    let principal =  la;
    let interest = ir / 100 / 12; 
    let payments =  trm * 12; 
    let x = Math.pow(1 + interest, payments);
    let monthlyPMIValue = (principal*x*interest)/(x-1);
    
    if(isNaN(monthlyPMIValue) || monthlyPMIValue=='Infinity'){
    dispatch(setMonthlyPMI(0))
    }else{
    dispatch(setMonthlyPMI(monthlyPMIValue.toFixed(2)))
    dispatch(setMonthlyPMIPre(currencyFormatPI(monthlyPMIValue)))
    // getAllCalculation(monthlyPMI,monthlyPMIVA,monthlyPMIFHA,monthlyPMIUSDA)
    var sumOfTotalMonthlyPayments = sum([otherMonthlyPayments,monthlyPMIValue]);

    dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))

    
    }
   }
  //  fha calcualtion 
  function getCalculateMPIFHA(la,ir,trm){
    let principal =  la;
    let interest = ir / 100 / 12; 
    let payments =  trm * 12; 
    let x = Math.pow(1 + interest, payments);
    let monthlyPMIFHAValue = (principal*x*interest)/(x-1);
    
    if(isNaN(monthlyPMIFHAValue) || monthlyPMIFHAValue=='Infinity'){
    dispatch(setMonthlyPMIFHA(0))
    }else{
    dispatch(setMonthlyPMIFHA(monthlyPMIFHAValue.toFixed(2)))
    dispatch(setMonthlyPMIFHAPre(currencyFormatPI(monthlyPMIFHAValue)))
    // getAllCalculation(monthlyPMI,monthlyPMIVA,monthlyPMIFHAValue,monthlyPMIUSDA)
    //FHA
    var sumOfTotalMonthlyPaymentsFHA = sum([otherMonthlyPaymentsFHA,monthlyPMIFHAValue]);
    dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))
  

    
    }
   }
  //  
    //  USDA calcualtion 
    function getCalculateMPIUSDA(la,ir,trm){
      let principal =  la;
      let interest = ir / 100 / 12; 
      let payments =  trm * 12; 
      let x = Math.pow(1 + interest, payments);
      let monthlyPMIUSDAValue = (principal*x*interest)/(x-1);
      
      if(isNaN(monthlyPMIUSDAValue) || monthlyPMIUSDAValue=='Infinity'){
      dispatch(setMonthlyPMIUSDA(0))
      }else{
      dispatch(setMonthlyPMIUSDA(monthlyPMIUSDAValue.toFixed(2)))
    dispatch(setMonthlyPMIUSDAPre(currencyFormatPI(monthlyPMIUSDAValue)))
    // getAllCalculation(monthlyPMI,monthlyPMIVA,monthlyPMIFHA,monthlyPMIUSDA)
    var sumOfTotalMonthlyPaymentsUSDA = sum([otherMonthlyPaymentsUSDA,monthlyPMIUSDAValue]);
    dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))
  

      }
     }
        //  VA calcualtion 
    function getCalculateMPIVA(la,ir,trm){
      let principal =  la;
      let interest = ir / 100 / 12; 
      let payments =  trm * 12; 
      let x = Math.pow(1 + interest, payments);
      let monthlyPMIVAR = (principal*x*interest)/(x-1);
 

       
      if(isNaN(monthlyPMIVAR) || monthlyPMIVAR=='Infinity'){
      dispatch(setMonthlyPMIVA(0))
      }else{
      dispatch(setMonthlyPMIVA(monthlyPMIVAR.toFixed(2)))
    dispatch(setMonthlyPMIVAPre(currencyFormatPI(monthlyPMIVAR)))
    // getAllCalculation(monthlyPMI,monthlyPMIVA,monthlyPMIFHA,monthlyPMIUSDA)


    // VA
  var sumOfTotalMonthlyPaymentsVA = sum([otherMonthlyPaymentsVA,monthlyPMIVAR]);
  dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))


      }



     }
    //  
  const handleAnnualTaxToggle = (text) =>{
    dispatch(setAnnualTaxSign(text))
    haldleAnnualTaxInput(annualTaxInput)
  }
  const handleAnnualInsToggle = (text) =>{
    dispatch(setAnnualInsSign(text))
    haldleAnnualInsInput(annualInsInput)
  }
  const handleAnnualHoaToggle = (text) =>{
    dispatch(setAnnualHoaSign(text))
    haldleAnnualHoaInput(annualHoaInput)
  }
  const handleAnnualOtherToggle = (text) =>{
    dispatch(setAnnualOtherSign(text))
    haldleAnnualOtherInput(annualOtherInput)
    // Total Result
    var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
    setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2))

    //Total result For FHA
    var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
    setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2))

     //Total result For USDA
     var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
     setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2))

     //Total result For VA
    var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
    setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2))

    var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
    setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments))

    // above for FHA
    var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
    setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA))
    // above for USDA
    var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
    setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA))

     // above for VA
     var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
     setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA))
  }

  
  const haldleAnnualTaxOutput = (text) =>{
    
    if(annualTaxSign == false){
      var  result = (text*purchasePrice/12)/100;
    }else{
      var  result = text/12;
    }

    
// formula start
 if(annualTaxSign == false){
    var  tax_p = (text*12*100)/purchasePrice;
    dispatch(setAnnualTaxInput(tax_p.toFixed(2)))
  }else{
    calc  = text*12;
    var  tax_p =Math.round(calc.toFixed(0))
    dispatch(setAnnualTaxInput(tax_p.toFixed(0)))
  }
  
 
    dispatch(setAnnualTaxOutput(text))
    var result = text
    // Total Result
    var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
    dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
      // Total Result FHA
      var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

        // Total Result USDA
      var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

        // Total Result VA
        var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
        dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))
  
    var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
    dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
    // FHA
    var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
    dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

    // USDA
    var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
    dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

    // VA
    var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
    dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))

   }
  
  const haldleAnnualTaxInput = (text) =>{
    dispatch(setAnnualTaxInput(text))
    if(annualTaxSign == false){
      var  result = (text*purchasePrice/12)/100;
    }else{
      var  result = text/12;
    }
    dispatch(setAnnualTaxOutput(result.toFixed(2)))
    // Total Result
    var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
    dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
      // Total Result FHA
      var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

        // Total Result USDA
      var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

        // Total Result VA
        var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,result,annualInsOutput,annualHoaOutput,annualOtherOutput]);
        dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))
  
    var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
    dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
    // FHA
    var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
    dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

    // USDA
    var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
    dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

    
    // VA
    var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
    dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))

   }
// 
const haldleAnnualInsInput = (text) =>{
  dispatch(setAnnualInsInput(text))
  if(annualInsSign == false){
    var  result = (text*purchasePrice/12)/100;
  }else{
    var  result = text/12;
  }
  dispatch(setAnnualInsOutput(result.toFixed(2)))
  // Total Result 
  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
  // Total Result FHA
  var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

  // Total Result USDA
  var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

  // Total Result USDA
  var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))

  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  //FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

  //USDA
  var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
  dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

    //VA
    var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
    dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))
  
}
const haldleAnnualInsOutput = (text) =>{
  // dispatch(setAnnualInsInput(text))
  // if(annualInsSign == false){
  //   var  result = (text*purchasePrice/12)/100;
  // }else{
  //   var  result = text/12;
  // }
  if(annualInsSign == false){
      var  tax_p = (text*12*100)/purchasePrice;
    }else{
      calc  = text*12;
      var  tax_p =Math.round(calc.toFixed(0))
    }
  dispatch(setAnnualInsInput(tax_p.toFixed(0)))

  dispatch(setAnnualInsOutput(text))
  var result = text
  // Total Result 
  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
  // Total Result FHA
  var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

  // Total Result USDA
  var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

  // Total Result USDA
  var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,result,annualHoaOutput,annualOtherOutput]);
  dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))

  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  //FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

  //USDA
  var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
  dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

    //VA
    var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
    dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))
  
}
//  
const haldleAnnualHoaInput = (text) =>{
  dispatch(setAnnualHoaInput(text))
  if(annualHoaSign == false){
    var  result = (text*purchasePrice/12)/100;
  }else{
    var  result = text/12;
  }
  dispatch(setAnnualHoaOutput(result.toFixed(2)))

  // Total Result 
  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))

   // Total Result FHA 
   var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
   dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

    // Total Result  USDA
    var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
    dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

      // Total Result  VA
      var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))
 
  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  // FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

  // USDA
  var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
  dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

  // VA
  var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
  dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))
 }
// 
const haldleAnnualHoaOutput = (text) =>{
   
  dispatch(setAnnualHoaOutput(text))
  // var  result = text;
  // Total Result 


// formula start
  if(annualHoaSign == false){
    var  tax_p = (text*12*100)/purchasePrice;
  }else{
    calc  = text*12;
    var  tax_p =Math.round(calc.toFixed(0))
  }
  
 
  dispatch(setAnnualHoaInput(tax_p.toFixed(0)))
var result = Text 
// formual end

  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))

   // Total Result FHA 
   var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
   dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

    // Total Result  USDA
    var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
    dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

      // Total Result  VA
      var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,result,annualOtherOutput]);
      dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))
 
  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  // FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

  // USDA
  var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
  dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

  // VA
  var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
  dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))
 } 
// 
 //
 const haldleAnnualOtherInput = (text) =>{
  dispatch(setAnnualOtherInput(text))
  if(annualOtherSign == false){
    var  result = (text*purchasePrice/12)/100;
  }else{
    var  result = text/12;
  }
  dispatch(setAnnualOtherOutput(result.toFixed(2)))

  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))

  // FHA
  var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
  dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

    // USDA
    var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
    dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

      // VA
      var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
      dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))

  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  // FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))
 
  // USDA
 var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
 dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

  // VA
  var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
  dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))

}
// 
const haldleAnnualOtherOutput = (text) =>{
  

  if(annualOtherSign == false){
    var  tax_p = (text*12*100)/purchasePrice;
  }else{
    calc  = text*12;
    var  tax_p =Math.round(calc.toFixed(0))
  }
  dispatch(setAnnualOtherInput(tax_p.toFixed(0)))
  

  dispatch(setAnnualOtherOutput(text))
var result = text
  var sumOfOtherMonthlyPayments = sum([monthlyPMIResult,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
  dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))

  // FHA
  var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
  dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

    // USDA
    var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
    dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

      // VA
      var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,annualHoaOutput,result]);
      dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))

  var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
  dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
  // FHA
  var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
  dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))
 
  // USDA
 var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
 dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))

  // VA
  var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
  dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))

}
// 

 //monthly PMI sum
 function sum(input){
               
  if (toString.call(input) !== "[object Array]")
     return false;
       
             var total =  0;
             for(var i=0;i<input.length;i++)
               {                  
                 if(isNaN(input[i])){
                 continue;
                  }
                   total += Number(input[i]);
                }
              return total;
             }
             


//onchnage dropdown value for Score  --- START
const getScore = (text) =>{
  
  if(purchasePrice==='' || purchasePrice===0){
    return false;
  }
 let  score = text;
 let down = downPaymentPercent;
 let x = Math.round(down);
 let percent = 100-x;
 let term = terms;
  let mpi;

  
  //if term year is more then 20
  if(term>20){
     if(percent<= 95 ){
      
     if(score==1) {
       mpi = .38;
       }
       else if(score==2) {
       mpi = .53;
       }else if(score==3) {
       mpi = .66;
       }else if(score==4) {
       mpi = .78; 
       }else if(score==5) {
       mpi = .96;
       }else if(score==6) {
       mpi = 1.28;
       }else if(score==7) {
       mpi = 1.33;
       }else if(score==8) {
       mpi = 1.42;
       }else{
       mpi = 0;
       }
     }
     if(percent==97){
     if(score==1) {
       mpi = .58;
       }
       else if(score==2) {
       mpi = .70;
       }else if(score==3) {
       mpi = .87;
       }else if(score==4) {
       mpi = .99;
       }else if(score==5) {
       mpi = 1.21;
       }else if(score==6) {
       mpi = 1.54;
       }else if(score==7) {
       mpi = 1.65;
       }else if(score==8) {
       mpi = 1.86;
       }else{
       mpi = 0;
       }
     }
     if(percent==90){
     if(score==1) {
       mpi = .28;
       }
       else if(score==2) {
       mpi = .38;
       }else if(score==3) {
       mpi = .46;
       }else if(score==4) {
       mpi = .55;
       }else if(score==5) {
       mpi = .65;
       }else if(score==6) {
       mpi = .90;
       }else if(score==7) {
       mpi = .91;
       }else if(score==8) {
       mpi = .94;
       }else{
       mpi = 0;
       }
     }
     if(percent<=85){
     if(score==1) {
       mpi = .19;
       }
       else if(score==2) {
       mpi = .20;
       }else if(score==3) {
       mpi = .23;
       }else if(score==4) {
       mpi = .25;
       }else if(score==5) {
       mpi = .28;
       }else if(score==6) {
       mpi = .38;
       }else if(score==7) {
       mpi = .40;
       }else if(score==8) {
       mpi = .44;
       }else{
       mpi = 0;
       }
     }

  }

  //if term year is less then or equalt to 20
 if(term<=20){
  if(percent==95){
        if(score==1) {
       mpi = .30;
       }
       else if(score==2) {
       mpi = .39;
       }else if(score==3) {
       mpi = .46;
       }else if(score==4) {
       mpi = .56;
       }else if(score==5) {
       mpi = .67;
       }else if(score==6) {
       mpi = .83;
       }else if(score==7) {
       mpi = .97;
       }else if(score==8) {
       mpi =1.14;
       }else{
       mpi = 0;
       }
     }

     if(percent==97){
        if(score==1) {
       mpi = .40;
       }
       else if(score==2) {
       mpi = .53;
       }else if(score==3) {
       mpi = .68;
       }else if(score==4) {
       mpi = .80;
       }else if(score==5) {
       mpi = 1.01;
       }else if(score==6) {
       mpi = 1.34;
       }else if(score==7) {
       mpi = 1.51;
       }else if(score==8) {
       mpi =1.72;
       }else{
       mpi = 0;
       }
     }

     if(percent==90){
        if(score==1) {
       mpi = .19;
       }
       else if(score==2) {
       mpi = .21;
       }else if(score==3) {
       mpi = .25;
       }else if(score==4) {
       mpi = .28;
       }else if(score==5) {
       mpi = .33;
       }else if(score==6) {
       mpi = .42;
       }else if(score==7) {
       mpi = .48;
       }else if(score==8) {
       mpi = .56;
       }else{
       mpi = 0;
       }
     }

     if(percent<=85){
        if(score==1) {
       mpi = .14;
       }
       else if(score==2) {
       mpi = .16;
       }else if(score==3) {
       mpi = .20;
       }else if(score==4) {
       mpi = .21;
       }else if(score==5) {
       mpi = .21;
       }else if(score==6) {
       mpi = .23;
       }else if(score==7) {
       mpi = .25;
       }else if(score==8) {
       mpi = .28;
       }else{
       mpi = 0;
       }
     }
     }


    var displayScoreValue = 0
     if(score==1) {
     displayScoreValue = 'Superior'
     }else if(score==2) {
      displayScoreValue = 'Excellent'
     }
     else if(score==3) {  
      displayScoreValue = 'Very Good'
     }
     else if(score==4) {  
      displayScoreValue = 'Fair'
     }
     else if(score==5) {
      displayScoreValue = 'Mediocre'
     }
     else if(score==6) {
      displayScoreValue = 'Okay'
     }
     else if(score==7) {
      displayScoreValue = 'Not Bad'
     }else{
      displayScoreValue = 'Passable'
      
     }
     setDisplayScore(displayScoreValue)
  
     dispatch(setmonthlyPMIInput(mpi.toFixed(2)))
// Total Payment 


let loan_amount_data = loanAmount;
let answer = (loan_amount_data*mpi/12)/100;
dispatch(setmonthlyPMIResult(answer.toFixed(2)))

var sumOfOtherMonthlyPayments = sum([answer,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
// alert(sumOfOtherMonthlyPayments)
dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
// FHA
var sumOfOtherMonthlyPaymentsFHA = sum([monthlyPMIResultFHA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
dispatch(setOtherMonthlyPaymentsFHA(sumOfOtherMonthlyPaymentsFHA.toFixed(2)))

// USDA
var sumOfOtherMonthlyPaymentsUSDA = sum([monthlyPMIResultUSDA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
dispatch(setOtherMonthlyPaymentsUSDA(sumOfOtherMonthlyPaymentsUSDA.toFixed(2)))

// VA
var sumOfOtherMonthlyPaymentsVA = sum([monthlyPMIResultVA,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
dispatch(setOtherMonthlyPaymentsVA(sumOfOtherMonthlyPaymentsVA.toFixed(2)))



var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))

// FHA
var sumOfTotalMonthlyPaymentsFHA = sum([sumOfOtherMonthlyPaymentsFHA,monthlyPMIFHA]);
dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))

// USDA
var sumOfTotalMonthlyPaymentsUSDA = sum([sumOfOtherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))


// VA
var sumOfTotalMonthlyPaymentsVA = sum([sumOfOtherMonthlyPaymentsVA,monthlyPMIVA]);
dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))

// //below function filternumber is remove , and spacess form interger 


};



const setCustomScore = (text) =>{
  setDisplayScore('Rate')
  dispatch(setmonthlyPMIInput(text))  

  
let loan_amount_data = loanAmount;
let answer = (loan_amount_data*text/12)/100;
dispatch(setmonthlyPMIResult(answer.toFixed(2)))


var sumOfOtherMonthlyPayments = sum([answer,annualTaxOutput,annualInsOutput,annualHoaOutput,annualOtherOutput]);
// alert(sumOfOtherMonthlyPayments)
dispatch(setOtherMonthlyPayments(sumOfOtherMonthlyPayments.toFixed(2)))
// FHA

var sumOfTotalMonthlyPayments = sum([sumOfOtherMonthlyPayments,monthlyPMI]);
dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
setModalVisible(!modalVisible)
}



// top to bottom
function getAllCalculation(monthlyPMI,monthlyPMIVA,monthlyPMIFHAValue,monthlyPMIUSDA){
    
    var sumOfTotalMonthlyPayments = sum([otherMonthlyPayments,monthlyPMI]);

    dispatch(setTotalMonthlyPayments(currencyFormatTotal(sumOfTotalMonthlyPayments)))
    //FHA
    var sumOfTotalMonthlyPaymentsFHA = sum([otherMonthlyPaymentsFHA,monthlyPMIFHAValue]);
    
    dispatch(setTotalMonthlyPaymentsFHA(currencyFormatTotal(sumOfTotalMonthlyPaymentsFHA)))
  
    //USDA
    var sumOfTotalMonthlyPaymentsUSDA = sum([otherMonthlyPaymentsUSDA,monthlyPMIUSDA]);
    dispatch(setTotalMonthlyPaymentsUSDA(currencyFormatTotal(sumOfTotalMonthlyPaymentsUSDA)))
  
      //VA

      var sumOfTotalMonthlyPaymentsVA = sum([otherMonthlyPaymentsVA,monthlyPMIVA]);
      dispatch(setTotalMonthlyPaymentsVA(currencyFormatTotal(sumOfTotalMonthlyPaymentsVA)))
   
}
//onchnage dropdown value for Score --- END
// 
const reset = (text) =>{

     

dispatch(setPurchasePrice(0));
dispatch(setPurchasePricePre(0));
dispatch(setPurchasePricePreData(0));
dispatch(setDownPaymentPercent(0));
dispatch(setInterestRate(0));
dispatch(setTerms(0));
dispatch(setDownPayment(0));
dispatch(setDownPaymentPre(0));
dispatch(setLoanAmount(0));
dispatch(setLoanAmountPre(0));
dispatch(setMonthlyPMI(0));
dispatch(setmonthlyPMIInput(0));
dispatch(setmonthlyPMIResult(0));
dispatch(setOtherMonthlyPayments(0));
dispatch(setTotalMonthlyPayments(0));
dispatch(setAnnualTaxInput(0));
dispatch(setAnnualTaxOutput(0));
dispatch(setAnnualInsInput(0));
dispatch(setAnnualInsOutput(0));
dispatch(setAnnualHoaInput(0));
dispatch(setAnnualHoaOutput(0));
dispatch(setAnnualOtherInput(0));
dispatch(setAnnualOtherOutput(0));
dispatch(setAnnualTaxSign(false));
dispatch(setAnnualInsSign(true));
dispatch(setAnnualHoaSign(true));
dispatch(setAnnualOtherSign(true));
dispatch(setFhaMip(0));
dispatch(setFhaMipOutput(0));
dispatch(setTotalLoan(0));
dispatch(setMonthlyPMIFHA(0));
dispatch(setmonthlyPMIInputFHA(0));
dispatch(setmonthlyPMIResultFHA(0));
dispatch(setOtherMonthlyPaymentsFHA(0));
dispatch(setTotalMonthlyPaymentsFHA(0));
dispatch(setUSDAMip(0));
dispatch(setUSDAMipOutput(0));
dispatch(setTotalLoanUSDA(0));
dispatch(setMonthlyPMIUSDA(0));
dispatch(setOtherMonthlyPaymentsUSDA(0));
dispatch(setTotalMonthlyPaymentsUSDA(0));
dispatch(setmonthlyPMIInputUSDA(0.35));
dispatch(setmonthlyPMIResultUSDA(0));
dispatch(setVAMipOutput(0));
dispatch(setTotalLoanVA(0));
dispatch(setMonthlyPMIVA(0));
dispatch(setOtherMonthlyPaymentsVA(0));
dispatch(setTotalMonthlyPaymentsVA(0));
dispatch(setmonthlyPMIInputVA(0));
dispatch(setmonthlyPMIResultVA(0));

}

const dPpRef = useRef();
const inrRef = useRef();
const termRef = useRef();

const anualTRef = useRef();
const anualIRef = useRef();
const anualHRef = useRef();
const anualORef = useRef();

const nameRef = useRef();
const emailRef = useRef();
const phoneRef = useRef();


// save start
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
    //  below function for save calculation in local asyncstorage
    let contacts = [];
    const saveCalculation = async (value) => {

if(email===''){

  
}else{
  if (validateEmail(email)) {
 console.log('valid email')
  } else {
    
    Alert('Invalid Email \n Please fill valid Email address')
    return false;
  }

    }
      var type =0
      if(conventional===true) {
         type = 'CONVENTIONAL' }
         else if(va===true) {
          type = 'VA'  
        } 
        else if(fha===true) {
          type = 'FHA'  
        } else{
          type ='USDA'
        }
        


        try {
        
     if( purchasePrice!==0){ 
         let tempContat =[];
         let x = JSON.parse(await AsyncStorage.getItem('products'));
         tempContat = x;
         console.log(tempContat);
         if(x=='' || x==null){
         }else{
           tempContat.map(item => {
             contacts.push(item)  
           })
         }


         
         // below US date formate
       let dateTime =  moment(new Date()).format("MM-DD-YYYY hh:mma")
  
          contacts.push({
  'purchasePrice_data': purchasePrice,
  'purchasePricePre_data':purchasePricePre,
  'downPaymentPercent_data':downPaymentPercent,
  'interestRate_data':interestRate,
  'terms_data':terms,
  'downPayment_data':downPayment,
  'downPaymentPre_data':downPaymentPre,
  'loanAmount_data':loanAmount,
  'loanAmountPre_data':loanAmountPre,
  'monthlyPMI_data':monthlyPMI,
  'monthlyPMIInput_data':monthlyPMIInput,
  'monthlyPMIResult_data':monthlyPMIResult,
  'otherMonthlyPayments_data':otherMonthlyPayments,
  'totalMonthlyPayments_data':totalMonthlyPayments,
  'annualTaxInput_data':annualTaxInput,
  'annualTaxOutput_data':annualTaxOutput,
  'annualInsInput_data':annualInsInput,
  'annualInsOutput_data':annualInsOutput,
  'annualHoaInput_data':annualHoaInput,
  'annualHoaOutput_data':annualHoaOutput,
  'annualOtherInput_data':annualOtherInput,
  'annualOtherOutput_data':annualOtherOutput,
  'annualTaxSign_data':annualTaxSign,
  'annualInsSign_data':annualInsSign,
  'annualHoaSign_data':annualHoaSign,
  'annualOtherSign_data':annualOtherSign,
  'fhaMip_data':fhaMip,
  'fhaMipOutput_data':fhaMipOutput,
  'totalLoan_data':totalLoan,
  'monthlyPMIFHA_data':monthlyPMIFHA,
  'monthlyPMIInputFHA_data':monthlyPMIInputFHA,
  'monthlyPMIResultFHA_data':monthlyPMIResultFHA,
  'otherMonthlyPaymentsFHA_data':otherMonthlyPaymentsFHA,
  'totalMonthlyPaymentsFHA_data':totalMonthlyPaymentsFHA,
  'USDAMip_data':USDAMip,
  'USDAMipOutput_data':USDAMipOutput,
  'totalLoanUSDA_data':totalLoanUSDA,
  'monthlyPMIUSDA_data':monthlyPMIUSDA,
  'otherMonthlyPaymentsUSDA_data':otherMonthlyPaymentsUSDA,
  'totalMonthlyPaymentsUSDA_data':totalMonthlyPaymentsUSDA,
  'monthlyPMIInputUSDA_data':monthlyPMIInputUSDA,
  'monthlyPMIResultUSDA_data':monthlyPMIResultUSDA,
  'VAMip_data':VAMip,
  'VAMipOutput_data':VAMipOutput,
  'totalLoanVA_data':totalLoanVA,
  'monthlyPMIVA_data':monthlyPMIVA,
  'otherMonthlyPaymentsVA_data':otherMonthlyPaymentsVA,
  'totalMonthlyPaymentsVA_data':totalMonthlyPaymentsVA,
  'monthlyPMIInputVA_data':monthlyPMIInputVA,
  'monthlyPMIResultVA_data':monthlyPMIResultVA,
  'name_data':name,
  'email_data':email,
  'phone_data':phone,
  'type_data':type,
  'created_at':dateTime
          })
         await AsyncStorage.setItem('products', JSON.stringify(contacts) )
         // alert when data saved for Android- by tofik
        alert('Your data is now saved.  \n Please click on History to retrieve.')
         //  ToastAndroid.showWithGravity(
        //    "Record saved succesfully",
        //    ToastAndroid.LONG,
        //    ToastAndroid.CENTER,
        //    ToastAndroid.CENTER,
           
        //  );
       }
        } catch (e) {
         // saving error
     console.log(e)
 
       }
 
     }
     // end above saveCalc function
   

 
       const gotHistory = async (value) => {
        var hitoryValue =0
        if(conventional===true) {
         hitoryValue = 'CONVENTIONAL' }
           else if(va===true) {
             hitoryValue = 'VA'  
          } 
          else if(fha===true) {
           hitoryValue = 'FHA'  
          } else{
           hitoryValue ='USDA'
          }
        await AsyncStorage.setItem('tabType',hitoryValue)
      navigation.navigate('HistoryScreen')

      }
// save end


const getMoviesFromApi = () => {
  


  // POST request using fetch with error handling
  const requestOptions = {
   method: 'POST',
   headers: { 
     
     Accept: 'application/json',
     'Content-Type': 'application/json',
     'Authorization': 'Bearer VaNX7DyjLkSCtZjBNTeHrVuVyD8TCP',
   },
   body: JSON.stringify({ app_name: 'mcfr',
   device_type: 'ANDROID',
   device_token: 'yes',})
};
fetch('http://api.newhomesinorlando.net/DeviceToken', requestOptions)
   .then(async response => {
       const isJson = response.headers.get('content-type')?.includes('application/json');
       const data = isJson && await response.json();

       // check for error response
       if (!response.ok) {
           // get error message from body or default to response status
           const error = (data && data.message) || response.status;
           return Promise.reject(error);
       }
       console.log(data)

   })
   .catch(error => {
       this.setState({ errorMessage: error.toString() });
       console.error('There was an error!', error);
   });
};



//automaticallyAdjustKeyboardInsets={true} 

   return (
    <View style={{ flex: 1, backgroundColor: 'white' }}  >
      <KeyboardAwareScrollView>
   <ScrollView     contentContainerStyle={{ flexGrow: 1 }}>
    
    <View>
    <View style={styles.middleRow}>
       <View style={{width:'23%',left:2}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Purchase	 
                </Text>
       </View>

              
       <View style={{width:'24%',left:2}}>
       {va &&
       <Pressable
       style={{borderWidth:1,borderColor:'gray',borderRadius:5,height:24,right:3}}
        onPress={() => setModalPurchaseType(true)}
      >
                {displayPurchaseTypeD === 9 ? 
          <Text style={styles.textStyle}>Type      </Text> : <Text style={styles.textStyle}>{displayPurchaseTypeD}</Text> }
   
      </Pressable> }  
       </View>
       <View style={{width:'24%',left:2}}>
       {va && isDropDownVisible &&
       
       <Pressable
       style={{borderWidth:1,borderColor:'gray',borderRadius:5,height:24}}
        onPress={() => setModalUseType(true)}
      >
        {displayUseTypeD === 9 ? 
          <Text style={styles.textStyle}>UseType        </Text> : <Text style={styles.textStyle}>{displayUseTypeD}</Text> }
        

      </Pressable> }  
       </View>

       <View style={{width:'30%',left:6 }}>
                <View>
                <View style={styles.parent}>
      <TextInput
placeholderTextColor='gray'
      value={purchasePricePreData}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0.00'
      onChangeText={(text) => getPurchasePrice(text)}
      returnKeyType = {"done"}
      onFocus={(text) =>purchasePPreviewD1(text) }
      onBlur={(text) => purchasePPreviewD2(text) } 
      
      
      onSubmitEditing={() => {
        dPpRef.current.focus();
      }}
      />
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => dispatch(setPurchasePrice(0))}
          >
                              <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
 
          </TouchableOpacity>
        </View>

 
                </View>
       </View>
    </View>
</View>



{/*  */}
<View>
    <View style={styles.middleRow}>
       <View style={{width:'32%'}}>
              <Text style={[styles.lableText,styles.genralFontSize]}>
                Down Payment	
                </Text>
       </View>
       <View style={{width:'18%',left:3}}>
       {/* <ToggleSwitch /> */}
       </View>
       <View style={{width:'20%',left:3}}>
                <View>
                <View style={styles.parent1}>
      <TextInput
     ref={dPpRef}
     onSubmitEditing={() => {
      inrRef.current.focus();
    }}
     value={downPaymentPercent}
      style={[styles.textInput,styles.genralFontSize]}
      onChangeText={(text) => getDownPaymentPercent(text)}
      keyboardType="numeric"  
      placeholder='0.00'
      
placeholderTextColor='gray'

      returnKeyType = {"done"}

      />
{/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => dispatch(setDownPaymentPercent(0))}
          >
            <Entypo   style={styles.closeButton} name="circle-with-cross" size={closeiconeSize} color={closeiconeColor} />
          </TouchableOpacity> */}
                    <Text style={styles.signDsn}>%</Text>
        </View>
     </View>
       </View>
       <View style={{width:'30%',left:10}}>
       <View style={styles.parent}>
      <TextInput
      value={downPaymentPre}
      onChangeText={(text) => getDownPayment(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
            placeholder='0.00'
      returnKeyType = {"done"}
      placeholderTextColor='gray'

      />
<TouchableOpacity
            style={[styles.closeButtonParent]}
            onPress={() => getDownPayment(0)}
          >
                  <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
          </TouchableOpacity>
        </View>
       </View>
    </View>
</View>
{/*  */}
   
 {/*  */}
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'45%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Loan Amount 
                </Text>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
  >
{loanAmountPre}
  </Text>
 
                </View>
       </View>
    </View>
</View>
{/*  */}

{fha &&    
  

<View>
    <View style={styles.middleRow}>
       <View style={{width:'40%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                FHA Up Front MIP	
                </Text>
       </View>
       <View style={{width:'10%',left:3}}>
 
       </View>
       {/*  */}
       <View style={{width:'20%',left:3}}>
                <View>
                <View style={styles.parent1}>
      <TextInput
  
     value='1.75'
      style={[styles.textInput,styles.genralFontSize]}
      // onChangeText={(text) => getDownPaymentPercent(text)}
      keyboardType="numeric"  
      placeholder='0.00'
      
      />
          <Text style={styles.signDsn}>%</Text>
        </View>
        </View>
     </View>
       {/*  */}
       <View style={{width:'30%',left:10}}>
                     <View>
                <Text
    style={[styles.resultInputField,styles.genralFontSize]}
  >
{fhaMipOutputPre}
  </Text>
 
                </View>
       </View>
    </View>

<View >
<View style={styles.middleRow}>
       <View style={{width:'70%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Total Loan	
                </Text>
                </View>
                 <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
  >
{totalLoanPre}
  </Text>
  
       </View>
                </View>
       </View>
       </View>
</View>

 


}
 
 {/* next row */}



{/*  */}

{va &&    
  

  <View>
      <View style={styles.middleRow}>
         <View style={{width:'40%'}}>
                  <Text style={[styles.lableText,styles.genralFontSize]}>
                  VA Funding Fee	
                  </Text>
         </View>
         <View style={{width:'10%',left:3}}>
   
         </View>
         <View style={{width:'20%',left:3}}>
       <View style={styles.parent}>
        {/* Condition for Light Pro-By Tofik */}
       {isPro &&
              
      <TextInput
      value={VAMip}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      
      onChangeText={(text) => haldleVAFundingFee(text)}
placeholderTextColor='gray'

      />
    }
      {isLight &&
              
              <TextInput
              value={VAMip}
              onChangeText={(text) => haldleVAFundingFee(text)}
              style={[styles.textInput,styles.inputBgColor]}
              keyboardType="numeric"  
              placeholder='0'
        placeholderTextColor='gray'
        editable = {false}
              />
            }
          {annualTaxSign ?   <Text style={styles.signDsn}>$</Text>   : <Text style={styles.signDsn}>%</Text> } 
        </View>
       </View>
         <View style={{width:'30%',left:10}}>
                       <View>
                  <Text
      style={[styles.resultInputField,styles.genralFontSize]}
    >
  {VAMipOutputPre} 
    </Text>
    
                  </View>
         </View>
      </View>
  
  <View >
  <View style={styles.middleRow}>
         <View style={{width:'70%'}}>
                  <Text style={[styles.lableText,styles.genralFontSize]}>
                  Total Loan	
                  </Text>
                  </View>
                   <View style={{width:'30%',left:10}}>
                  <View>
                  <Text
      style={[styles.resultInputField,styles.genralFontSize]}
    >
  {totalLoanVAPre}
    </Text>
    
    
         </View>
                  </View>
         </View>
         </View>
  </View>
  
   
  
  
  }
   
   {/* next row */}
  

{/*  */}

{/*  */}

{usda &&    
  

  <View>
      <View style={styles.middleRow}>
         <View style={{width:'50%'}}>
                  <Text style={[styles.lableText,styles.genralFontSize]}>
                  USDA Guarantee Fee	
                  </Text>
         </View>
         <View style={{width:'0%',left:3}}>
   
         </View>
         <View style={{width:'20%',left:4}}>
         <View style={styles.parent}>
      <Text
     
      style={[styles.textInput,styles.genralFontSize]}

      >1.01</Text>
          <Text style={styles.signDsn}>%</Text>
        </View>
     </View>
         <View style={{width:'30%',left:10}}>
                       <View>
                  <Text
      style={[styles.resultInputField,styles.genralFontSize]}
    >
  {USDAMipOutputPre}
    </Text>
    
                  </View>
         </View>
      </View>
  
  <View >
  <View style={styles.middleRow}>
         <View style={{width:'70%'}}>
                  <Text style={[styles.lableText,styles.genralFontSize]}>
                  Total Loan	
                  </Text>
                  </View>
                   <View style={{width:'30%',left:10}}>
                  <View>
                  <Text
      style={[styles.resultInputField,styles.genralFontSize]}
    >
  {totalLoanUSDAPre}
    </Text>
    
         </View>
                  </View>
         </View>
         </View>
  </View>
  
   
  
  
  }
   
   {/* next row */}
  

{/*  */}

<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
               Interest Rate
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={interestRate}
      onChangeText={(text) => getInterestRate(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
placeholderTextColor='gray'
      placeholder='0.000'
      returnKeyType = {"done"}
      ref={inrRef}
      onSubmitEditing={() => {
       termRef.current.focus();
     }}
      />
{/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => dispatch(setInterestRate(0))}
          >
            <Entypo   style={styles.closeButton} name="circle-with-cross"  size={closeiconeSize} color={closeiconeColor}  />
          </TouchableOpacity> */}
                    <Text style={styles.signDsn}>%</Text>
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
               
 
                </View>
       </View>
    </View>
</View>
{/*  */}
{/*  */}

<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
               Term (Years)
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
       </View>
       <View style={{width:'20%',left:3}}>
               <View style={styles.parent1}>
      <TextInput
      ref={termRef}
      onSubmitEditing={() => {
        anualTRef.current.focus();
      }}
      value={terms}
      onChangeText={(text) => getTerms(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      returnKeyType = {"done"}
placeholderTextColor='gray'


      />
{/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => dispatch(setTerms(0))}
          >
            <Entypo   style={styles.closeButton} name="circle-with-cross" size={closeiconeSize} color={closeiconeColor}   />
          </TouchableOpacity> */}
                    {/* <Text style={styles.signDsn}>%</Text> */}
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
               
 
                </View>
       </View>
    </View>
</View>
 {/*  */}

 {/* next row */}


{/*  */}
{conventional && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'50%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Monthly Payment (P+I)
                </Text>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text   
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
          >{monthlyPMIPre}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/*  */}
{fha && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'50%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
Monthly Payment (P+I)
                </Text>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text   
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
          >{monthlyPMIFHAPre}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/*  */}
{va && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'50%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
Monthly Payment (P+I)
                </Text>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text   
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
          >{monthlyPMIVAPre}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}
{/*  */}
{usda && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'50%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
Monthly Payment (P+I)
                </Text>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text   
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
          >{monthlyPMIUSDAPre}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

<View style={{width:"100%",backgroundColor:'gray',borderTopColor:'black',height:1,marginTop:5,marginBottom:3}}>
<Text>&nbsp;</Text>
</View>
{/* conventional */}
{conventional && 
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Monthly PMI	
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
       <Pressable
        style={{borderWidth:1,borderColor:'gray',borderRadius:5,height:24,right:3}}
        onPress={() => setModalVisible(true)}
      >
        
          
          {displayScore === 9 ? 
          <Text style={styles.textStyle}>Score       </Text> : <Text style={styles.textStyle}>{displayScore}</Text> }
          
      </Pressable>  
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={monthlyPMIInput}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      ref={(input) => { this.interestRateInput = input; }}
      onSubmitEditing={() => { this.termsInput.focus(); }}
      editable = {false}
      placeholder='0.00'
      returnKeyType = {"done"}
placeholderTextColor='gray'


      />
      
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setAnnualTaxInput("")}
          >
            <Text style={styles.signDsn}>%</Text>
          </TouchableOpacity>
          
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
             
  >{monthlyPMIResult}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}
{/* FHA */}
{fha && 
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Monthly PMI	
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
        
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
       {isLight &&
      <TextInput
      value={monthlyPMIInputFHA}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      editable = {false}
      placeholder='0.00'
placeholderTextColor='gray'
onChangeText={(text) => haldleFHAPmi(text)}

      /> }
      {isPro &&
      <TextInput
      value={monthlyPMIInputFHA}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0.00'
placeholderTextColor='gray'
onChangeText={(text) => haldleFHAPmi(text)}


      /> }
      
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setAnnualTaxInput("")}
          >
            <Text style={styles.signDsn}>%</Text>
          </TouchableOpacity>
          
        </View>
       </View>  
       <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
             
  >{monthlyPMIResultFHA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/* VA */}
{va && 
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Monthly PMI	
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
        
       </View>
       <View style={{width:'20%',left:3}}>
                <View>
                <Text
    //  placeholder = "0.00"
    //  keyboardType = 'numeric'
    // returnKeyType="next"
    style={[styles.resultInputField,styles.genralFontSize]}
     tabindex="0"         
  > {monthlyPMIInputVA}</Text>
               
               
                </View>
       </View>
       <View style={{width:'30%',left:10}}>
                <View>
                <Text
style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
             
  >{monthlyPMIResultVA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/*  */}
{/* USDA */}
{usda && 
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Monthly PMI	
                </Text>
       </View>
       <View style={{width:'20%',left:3}}>
        
        
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value='.35'
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      ref={(input) => { this.interestRateInput = input; }}
      onSubmitEditing={() => { this.termsInput.focus(); }}
      editable = {false}
      placeholder='0.00'
      returnKeyType = {"done"}
placeholderTextColor='gray'


      />
      
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setAnnualTaxInput("")}
          >
            <Text style={styles.signDsn}>%</Text>
          </TouchableOpacity>
          
        </View>
       </View>  
       <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
             
  >{monthlyPMIResultUSDA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/*  */}
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Annual Tax	
                </Text>
       </View>
       <View style={{width:'20%',right:responsiveWidth(1)}}>
       
       {/* toggle */}
       <Toggle
  value={annualTaxSign}
  onPress={(newState) => handleAnnualTaxToggle(newState)}
  leftTitle='%'
  rightTitle="$"
  trackBar={{
    activeBackgroundColor: "#e3e5e2",
    inActiveBackgroundColor: "#e3e5e2",
    borderActiveColor: "white",
    borderInActiveColor: "white",
    borderWidth: 10,
    width: 80,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 48,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/>
       {/* toggle end */}

       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={annualTaxInput}
      onChangeText={(text) => haldleAnnualTaxInput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      returnKeyType = {"done"}
      onFocus={() =>setFirstSign(true) }
      onBlur={() => setFirstSign(false) } 
      ref={anualTRef}
      onSubmitEditing={() => {
        anualIRef.current.focus();
      }}
placeholderTextColor='gray'

      />
    
          {annualTaxSign ?   <Text style={styles.signDsn}>$</Text>   : <Text style={styles.signDsn}>%</Text> } 
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
       <View style={styles.parent}>
      <TextInput
      value={annualTaxOutput}
      onChangeText={(text) => haldleAnnualTaxOutput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      // ref={(input) => { this.interestRateInput = input; }}
      // onSubmitEditing={() => { this.termsInput.focus(); }}
      placeholder='0.00'
      returnKeyType = {"done"}
placeholderTextColor='gray'


      />
      
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => haldleAnnualTaxOutput(0)}
          >
                   <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
          </TouchableOpacity>
          
        </View>
       </View>
    </View>
</View>
{/*  */}
{/*  */}
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Annual Ins
                </Text>
       </View>
       <View style={{width:'20%',right:responsiveWidth(1)}}>
         {/* toggle */}
         <Toggle
  value={annualInsSign}
  onPress={(newState) => handleAnnualInsToggle(newState)}
  leftTitle='%'
  rightTitle="$"
  trackBar={{
    activeBackgroundColor: "#e3e5e2",
    inActiveBackgroundColor: "#e3e5e2",
    borderActiveColor: "white",
    borderInActiveColor: "white",
    borderWidth: 10,
    width: 80,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 48,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/>
       {/* toggle end */}
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={annualInsInput}
      onChangeText={(text) => haldleAnnualInsInput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      returnKeyType = {"done"}
      ref={anualIRef}
      onSubmitEditing={() => {
        anualHRef.current.focus();
      }}
placeholderTextColor='gray'

      />
 
{annualInsSign ?   <Text style={styles.signDsn}>$</Text>   : <Text style={styles.signDsn}>%</Text> } 
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
       <View style={styles.parent}>
      <TextInput
      value={annualInsOutput}
      onChangeText={(text) => haldleAnnualInsOutput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      // ref={(input) => { this.interestRateInput = input; }}
      // onSubmitEditing={() => { this.termsInput.focus(); }}
      placeholder='0.00'
      returnKeyType = {"done"}
      placeholderTextColor='gray'

      />
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => haldleAnnualInsOutput(0)}
          >
                  <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
          </TouchableOpacity>
        </View>
       </View>
    </View>
</View>
{/*  */}
{/*  */}
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Annual HOA
                </Text>
       </View>
       <View style={{width:'20%',right:responsiveWidth(1)}}>
         {/* toggle */}
         <Toggle
  value={annualHoaSign}
  onPress={(newState) => handleAnnualHoaToggle(newState)}
  leftTitle='%'
  rightTitle="$"
  trackBar={{
    activeBackgroundColor: "#e3e5e2",
    inActiveBackgroundColor: "#e3e5e2",
    borderActiveColor: "white",
    borderInActiveColor: "white",
    borderWidth: 10,
    width: 80,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 48,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/>
       {/* toggle end */}
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={annualHoaInput}
      onChangeText={(text) => haldleAnnualHoaInput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      returnKeyType = {"done"}
      ref={anualHRef}
      onSubmitEditing={() => {
        anualORef.current.focus();
      }}
placeholderTextColor='gray'

      />
 
{annualHoaSign ?   <Text style={styles.signDsn}>$</Text>   : <Text style={styles.signDsn}>%</Text> } 
        </View>
       </View>
       <View style={{width:'30%',left:10}}>
       <View style={styles.parent}>
      <TextInput
      value={annualHoaOutput}
      onChangeText={(text) => haldleAnnualHoaOutput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      // ref={(input) => { this.interestRateInput = input; }}
      // onSubmitEditing={() => { this.termsInput.focus(); }}
      placeholder='0.00'
      returnKeyType = {"done"}
      placeholderTextColor='gray'

      />
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => haldleAnnualHoaOutput(0)}
          >
                   <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
          </TouchableOpacity>
        </View>
               
       </View>
    </View>
</View>
{/*  */}
{/*  */}
<View>
    <View style={styles.middleRow}>
       <View style={{width:'30%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Annual Other
                </Text>
       </View>
       <View style={{width:'20%',right:responsiveWidth(1)}}>
         {/* toggle */}
         <Toggle
  value={annualOtherSign}
  onPress={(newState) => handleAnnualOtherToggle(newState)}
  leftTitle='%'
  rightTitle="$"
  trackBar={{
    activeBackgroundColor: "#e3e5e2",
    inActiveBackgroundColor: "#e3e5e2",
    borderActiveColor: "white",
    borderInActiveColor: "white",
    borderWidth: 10,
    width: 80,
    height: 45,
    radius: 17,
    }}
  thumbStyle={{
    backgroundColor:'#62a0f7'
  }}
  TitleStyle={{ color: "red" }}

  thumbButton={{
    width: 48,
    height: 44,
    radius: 7,
    left:2,
    right:2,
  }}

/>
       {/* toggle end */}
       
       </View>
       <View style={{width:'20%',left:3}}>
       <View style={styles.parent1}>
      <TextInput
      value={annualOtherInput}
      onChangeText={(text) => haldleAnnualOtherInput(text)}
      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      placeholder='0'
      returnKeyType = {"done"}
      ref={anualORef}

      placeholderTextColor='gray'

      />
{/* <TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => setAnnualOtherInput("")}
          >
            <Entypo   style={styles.closeButton} name="circle-with-cross"   />
          </TouchableOpacity> */}
          {annualOtherSign ?   <Text style={styles.signDsn}>$</Text>   : <Text style={styles.signDsn}>%</Text> } 
        </View>
        
       </View>
      
       <View style={{width:'30%',left:10}}>
       <View style={styles.parent}>
      <TextInput
      value={annualOtherOutput}
      onChangeText={(text) => haldleAnnualOtherOutput(text)}

      style={[styles.textInput,styles.genralFontSize]}
      keyboardType="numeric"  
      // ref={(input) => { this.interestRateInput = input; }}
      // onSubmitEditing={() => { this.termsInput.focus(); }}
      placeholder='0.00'
      returnKeyType = {"done"}
      placeholderTextColor='gray'

      />
<TouchableOpacity
            style={styles.closeButtonParent}
            onPress={() => haldleAnnualOtherOutput(0)}
          >
                   <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/x-lightgray50.png')}
                  />
          </TouchableOpacity>
        </View>
      
      
       </View>
    </View>
</View>
{/*  */}
{/*  */}
{conventional && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Other Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
>{otherMonthlyPayments}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{fha && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Other Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
>{otherMonthlyPaymentsFHA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}
{va && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Other Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
>{otherMonthlyPaymentsVA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}
{usda && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Other Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
>{otherMonthlyPaymentsUSDA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}
{conventional && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Total Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
  style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
   >{totalMonthlyPayments}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{fha && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Total Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
   >{totalMonthlyPaymentsFHA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{va && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Total Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
    style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
   >{totalMonthlyPaymentsVA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{usda && 
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'55%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Total Monthly Payments
                </Text>
       </View>
              <View style={{width:'30%',left:10}}>
                <View>
                <Text
   style={[styles.resultInputField,styles.inputBgColor,styles.genralFontSize]}
   >{totalMonthlyPaymentsUSDA}</Text>
 
                </View>
       </View>
    </View>
</View>
}
{/*  */}

{/*  */}
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'45%'}}>
                <Text style={[styles.lableText,styles.genralFontSize]}>
                Name
                </Text>
       </View>
              <View style={{width:'50%',left:10}}>
                <View>
                <TextInput
     placeholder = "Enter Name"
    value={name}
    returnKeyType="next"
    onChangeText={(text) => getName(text)}
    style={{color:'black',borderWidth:1,borderRadius:7,borderColor:'gray',padding:0,textAlign:'left',paddingLeft:15,fontSize:responsiveFontSize(2),width:'100%'}}
     tabindex="0"
     
     onSubmitEditing={() => {
      emailRef.current.focus();
     }}
placeholderTextColor='gray'

             
  />
 
                </View>
       </View>
    </View>
</View>
{/*  */}
{/*  */}
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'45%'}}>
      
       <Text style={[styles.lableText,styles.genralFontSize]}>
                Phone #
                </Text>


       </View>
              <View style={{width:'50%',left:10}}>
                <View>
                <TextInput
     placeholder = "Enter Phone #"
     keyboardType = 'phone-pad'
    returnKeyType="next"
    style={{color:'black',borderWidth:1,borderRadius:7,borderColor:'gray',padding:0,textAlign:'left',paddingLeft:15,fontSize:responsiveFontSize(2),width:'100%'}}
     tabindex="0"
     value={phone}
     onChangeText={(text) => getPhone(text)}
     ref={emailRef}
     maxLength={14}
     onSubmitEditing={() => {
      phoneRef.current.focus();
     }}       
placeholderTextColor='gray'

  />
 
                </View>
       </View>
    </View>
</View>
{/*  */}
 
{/*  */}
<View>
    <View style={styles.borrtomRow}>
       <View style={{width:'45%'}}>
       
      <Text style={[styles.lableText,styles.genralFontSize]}>
                Email
                </Text>
      
       </View>
              <View style={{width:'50%',left:10}}>
                <View>
                <TextInput
                value={email}
     placeholder = "Enter Email"
     keyboardType = 'email-address'
    returnKeyType="done"
    onChangeText={(text) => getEmail(text)}
    style={{color:'black',borderWidth:1,borderRadius:7,borderColor:'gray',padding:0,textAlign:'left',paddingLeft:15,fontSize:responsiveFontSize(2),width:'100%'}}
     tabindex="0"
     ref={phoneRef}
placeholderTextColor='gray'

  />
 
                </View>
       </View>
    </View>
</View>
{/*  */}
<View style={{height:5,backgroundColor:'white'}}>
 </View>

<View style={{height:responsiveHeight(10),backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>

<View style={{alignItems:'center',flexDirection:'row',alignSelf:'center'}}>
                <TouchableOpacity style={[styles.button,styles.btnFlexDirection,styles.btnclr]} onPress  ={(text)=>reset(text)} >
                     
                    <Image
                    resizeMode='contain'
                  style={[styles.tinyLogo]}
                  source={require('../../../assets/images/icons/clear-x-jdk50.png')}
                  />
                    <Text style={[styles.buttonFonts,styles.marginLeftBtn]} >Clear</Text>
                </TouchableOpacity>          
             
                <TouchableOpacity style={[styles.button,styles.btnFlexDirection,styles.btnclr]} 
                // onPress={() => Linking.openURL(mailLink)  }
                >
                    
                   
                    <Image
                    resizeMode='contain'
                  style={[styles.tinyLogo]}
                  source={require('../../../assets/images/icons/email-icon-jdk50.png')}
                  />
                  <Text style={[styles.buttonFonts,styles.marginLeftBtn]} >Email</Text>
                </TouchableOpacity>        
                <TouchableOpacity style={[styles.button,styles.btnFlexDirection,styles.btnclr]} 
                // onPress={(text)=>onShare(text)} 
                
                >
                     <Image
                    resizeMode='contain'
                  style={[styles.tinyLogo]}
                  source={require('../../../assets/images/icons/share-icon50.png')}
                  />
                    <Text style={[styles.buttonFonts,styles.marginLeftBtn]} >Share</Text>
                </TouchableOpacity>      
              
                <TouchableOpacity style={[styles.button,styles.btnFlexDirection,styles.btnclr]} 
               onPress={()=>{  gotHistory('hello') }}
                >
                                        <Image
                    resizeMode='contain'
                  style={[styles.tinyLogo]}
                  source={require('../../../assets/images/icons/history-clear50.png')}
                  />
                   <Text style={[styles.buttonFonts,styles.marginLeftBtn]} >History</Text>
                </TouchableOpacity>  
                  <TouchableOpacity style={[styles.button,styles.btnFlexDirection,styles.btnclr]} 
             onPress={(text)=>saveCalculation(text)}
                >
                                                           <Image
                    resizeMode='contain'
                  style={[styles.tinyLogo]}
                  source={require('../../../assets/images/icons/save-icon-clear50.png')}
                  />
                   <Text style={[styles.buttonFonts,styles.marginLeftBtn]} >Save</Text>
                </TouchableOpacity>    
                   
             
          </View>
          

</View>
 {/* add display below */}


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
            onPress={() => closeModal('false')}
          >
                                                                     <Image
                    resizeMode='contain'
                  style={{height:22,width:22}}
                  source={require('../../../assets/images/icons/clear-x-jdk50.png')}
                  />
 
          </TouchableOpacity>
            </View>   
            <View style={{width:'80%',top:40}}>
            <Pressable   onPress={() => haldleScore(1)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Superior</Text>
                <Text style={styles.modalTitle}>760+</Text>
            </Pressable>

            <Pressable   onPress={() => haldleScore(2)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Excellent</Text>
                <Text style={styles.modalTitle}>740-759</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(3)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Very Good</Text>
                <Text style={styles.modalTitle}>720-739</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(4)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Fair</Text>
                <Text style={styles.modalTitle}>700-719</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(5)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Mediocre</Text>
                <Text style={styles.modalTitle}>680-699</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(6)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Okay</Text>
                <Text style={styles.modalTitle}>660-679</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(7)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Not Bad</Text>
                <Text style={styles.modalTitle}>640-659</Text>
            </Pressable>
            <Pressable   onPress={() => haldleScore(8)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text style={styles.modalTitle}>Passable</Text>
                <Text style={styles.modalTitle}>620-639</Text>
            </Pressable>
            {isPro &&
            <Pressable   onPress={() => haldleScore(9)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5,paddingBottom:10}}>
                <Text style={styles.modalTitle}>Rate</Text>
                <TextInput keyboardType="numeric"       returnKeyType = {"done"} style={{color:'black',borderWidth:1,borderColor:'gray',height:25,backgroundColor:'white',width:55,padding:4}} 
                 
                 onChangeText={(text) => dispatch(setmonthlyPMIInput(text)) }
                 onBlur={(text) => setCustomScore(monthlyPMIInput) } 
                />
            </Pressable> }

            {isLight &&
            <Pressable   onPress={() => haldleScore(9)} style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:5,paddingBottom:10}}>
                <Text style={styles.modalTitle}>Rate</Text>
                <Text style={{ color:'black',
  fontSize:responsiveFontSize(2),
  textAlign:'left'}}>Pro</Text>
               
            </Pressable> }
            </View>
            
            
          </View>
        </View>
      </Modal>
      {/* modal display end */}

      {/*  */}
      
{/* modal display */}
<Modal
        animationType="slide"
        transparent={true}
        visible={modalPurchaseType}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalPurchaseType);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{backgroundColor:'#62a0f7',top:0,position:'absolute',width:'100%',alignItems:'center',height:40,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text>&nbsp;</Text>
                <Text style={{color:'white',fontSize:22,padding:5}}>Purchase Type</Text>
                    <TouchableOpacity
            style={{bottom:2,marginRight:responsiveWidth(2)}}
            onPress={() => closeModal('false')}
          >         
                    <Image
                    resizeMode='contain'
                  style={{height:20,width:20}}
                  source={require('../../../assets/images/icons/clear-x-jdk50.png')}
                  />
          </TouchableOpacity>

            </View>   
            <View style={{width:'100%',top:40}}>
            <Pressable   onPress={() => haldlePurchaseType(1)} style={{textAlign:'center',alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>Purchase</Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(2)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}> Cash-Out Refi </Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(3)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>  IRRRLs  </Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(4)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>   Mfg Home Loan  </Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(5)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>   Loan Assump   </Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(6)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>   Vendee Loan    </Text>
            </Pressable>
            <Pressable   onPress={() => haldlePurchaseType(7)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center',marginBottom:5}}>
                <Text style={styles.modalTitle}>       NADL  </Text>
            </Pressable>

          
            </View>
            
            
          </View>
        </View>
      </Modal>
      {/* modal display end */}

      {/*  */}
      {/* modal display */}
<Modal
        animationType="slide"
        transparent={true}
        visible={modalUseType}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalUseType);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{backgroundColor:'#62a0f7',top:0,position:'absolute',width:'100%',alignItems:'center',height:40,borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text>  &nbsp; </ Text>
                <Text style={{color:'white',fontSize:22,padding:5,bottom:2}}>Select</Text>
                <TouchableOpacity
            style={{marginRight:responsiveWidth(2)}}
            onPress={() => closeModal('false')}
          >         
                    <Image
                    resizeMode='contain'
                  style={{height:20,width:20}}
                  source={require('../../../assets/images/icons/clear-x-jdk50.png')}
                  />
          </TouchableOpacity>
            </View>   
            <View style={{width:'100%',top:40}}>
            <Pressable   onPress={() => haldleUseType(1)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center'}}>
                <Text style={styles.modalTitle}>First Use</Text>
            </Pressable>
            <Pressable   onPress={() => haldleUseType(2)} style={{alignItems:'center',flexDirection:'row',padding:5,alignSelf:'center',marginBottom:5}}>
                <Text style={styles.modalTitle}>Second Use</Text>
            </Pressable>

          
            </View>
            
            
          </View>
        </View>
      </Modal>
      {/* modal display end */}
      {/*  */}
      
      </ScrollView>
      </KeyboardAwareScrollView>
  </View>
  )
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer:{
    justifyContent:'center',
    backgroundColor:'#D7DDE9',
    height:height,
    width:width,
    alignItems:'center'
  },
  firstRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  feedbackInputBlank:{
    
    borderRadius:7,
    height:30,
    width:80,
    // paddingRight:20
  },
  feedbackInput:{
    color:"gray",
    textAlign:'right',
    fontFamily:"Roboto-Regular",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:7,
    padding:0,
    width:80,
    paddingRight:10,
    height:26,
    borderColor: 'lightgray',
    fontSize:13,
   

  },
  resultInput:{
    color:"gray",
    textAlign:'right',
    fontFamily:"Roboto-Regular",
    borderWidth: 1,
    borderRadius:7,
    width:110,
    padding: 0,
    paddingRight:20,
    height:26,
    borderColor: 'lightgray',
    fontSize:15,
    
  },
  borrtomRow:{
    flexDirection:'row',
    alignItems:'center',
    width:responsiveWidth(100),
    paddingRight:responsiveWidth(4),
    paddingLeft:responsiveWidth(3.3),
    justifyContent:'space-between',
    paddingTop:3
  },
  middleRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:responsiveWidth(100),
    paddingRight:responsiveWidth(4),
    paddingLeft:responsiveWidth(3),
    height:34,
     
  },
  resultInputField:{
    borderWidth:1,
    borderRadius:6,
    borderColor:'gray',
     height: 25,
    textAlign:'right',
    width:"100%",
    paddingRight:10,
    color:'black',
    paddingTop:3

  },
  lableText:{
    color:'black'
  },
  input: {
   height: 40,
   margin: 12,
   borderWidth: 1,
 },
 
 parent1: {
  marginLeft: 0,
  marginRight: 0,
  borderColor: "gray",
  borderRadius: 5,
  borderWidth: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingRight:10
},
 parent: {
   marginLeft: 0,
   marginRight: 0,
   borderColor: "gray",
   borderRadius: 5,
   borderWidth: 1,
   flexDirection: "row",
   justifyContent: "space-between",
   paddingRight:6
 },
 textInput: {
   height: 25,
   textAlign:'right',
   width:"90%",
   padding:0,
   paddingRight:6,
   color:'black'
   },
 closeButton: {
   top:3,
   height:20,
   width:20,
   right:0,
 },
 closeButtonParent: {
   justifyContent: "center",
   alignItems: "center",
   marginRight: 5,
 },
//  modal popup css below
centeredView:{
  width:responsiveWidth(100),
  // left:responsiveWidth(1),
  bottom:responsiveWidth(20)
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
button: {
  borderRadius: 6,
  padding: 3,
  width:70,
  elevation: 2,
  borderWidth:1,
  marginBottom:3,
    borderWidth:1,
   borderColor:'red'
},
buttonOpen: {
  backgroundColor: "white",
  borderColor:'gray'
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "black",
  // fontWeight: "bold",
  textAlign: "center",
  fontSize:responsiveFontSize(2),
  // bottom:2,
  paddingLeft:3
},
modalText: {
  padding:40,
  marginBottom: 0,
  textAlign: "center"
},
genralFontSize:{
       fontSize:responsiveFontSize(1.9)
},
// 

// 

button: {
  alignItems: "center",
  backgroundColor: "#FF5E80",
  padding: 5,
  borderRadius:10,
  marginLeft:5,
  marginRight:5,
  borderWidth:1,
  borderColor:'#4e91ee'
  //  width:67
},
buttonFonts:{
    color:'white',
    fontSize:responsiveFontSize(2.4),
    fontWeight:'bold'
},

// closeButton: {
//   height: 20,
//   width: 22,
//   marginRight: 15,

// },
closeButtonParent: {
  justifyContent: "center",
  alignItems: "center",
  marginRight: 5,
},
btnMarginTop:{
  left:10
},
btnFlexDirection:{
  // flexDirection:'row'
},
marginLeftBtn:{
  // marginLeft:3
}
,
btnclr:{backgroundColor:'#62a0f7'},
signDsn:{
  fontSize:responsiveFontSize(2.2),
  right:2,
  color:'black'
},
modalTitle:{
  color:'black',
  fontSize:responsiveFontSize(2),
  textAlign:'left'
},
inputBgColor:{
  backgroundColor:'#bfd5fa',
},
tinyLogo:{
  height:30,
  width:30,
  // borderRadius:10
},
tinyIcon:{
  height:12,
  width:12,
  // borderRadius:10
},
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});
export default HomeScreen;