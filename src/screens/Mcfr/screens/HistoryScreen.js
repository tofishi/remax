import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Linking,Alert } from 'react-native';
import AppbarHeader from '../components/AppHeader';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Header from '../../Home/components/Header';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import {
   setPurchasePrice,setPurchasePricePreData,setPurchasePricePre,setDownPaymentPercent,setInterestRate,setTerms,
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
setName,setEmail,setPhone,setTabTypes

} from'../redux/actions';


const { height, width } = Dimensions.get("screen");


const HomeScreen = ({ navigation }) => {

  const { purchasePrice,purchasePricePre,downPaymentPercent,interestRate,terms,
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
    name,email,tabTypes,phone,

  } = useSelector(state => state.userReducer);
const dispatch = useDispatch();


  const [CalculationList, setCalculationList] = useState([]);
  const [tabeName, setTabeName] = useState();
  
  // delete confirmation alert
  const deleteRecord = async index  => {
    Alert.alert(
      'Delete',
      'Are you sure you want to Delete?',
      [
        {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
        {text: 'YES', onPress: () => deletebox(index)},
      ]
    );
  
  }
   


    // delete function to delete record
    const deletebox = async index  => {
      const tempData = CalculationList;
      const selectedData = tempData.filter((item, ind) => {
        return ind != index;
      });
      let ok = selectedData.reverse()
      setCalculationList(ok)
      await AsyncStorage.setItem('products', JSON.stringify(ok) )
  
    }
    
  
  useEffect(() => {
    getCalculation()
    getActiveTab()
  })
  // get Calculation List History form Asyncstorage
  const getCalculation = async () => {
    try {
      const contactsS = await AsyncStorage.getItem('products')
      let news = JSON.parse(contactsS)
      let ok = news.reverse()
      setCalculationList(ok)
     } catch (e) {
      console.log('not')
      // error reading value
    }
  }


  const getActiveTab = async () => {
    try {
      const tab = await AsyncStorage.getItem('tabType')
      setTabeName(tab)

     } catch (e) {
      console.log('not')
      // error reading value
    }
  }

  // go to info screen
  const _gotToinfo = () => {
    navigation.navigate('InfoScreen')
  }

  
  const getSetPram = (index) =>{

const tempData = CalculationList;
    const selectedData = tempData.filter((item, ind) => {
      return ind == index;
      
    });
    // dispatch(selectedData[0].USDAMipOutput_data

    dispatch(setPurchasePrice(selectedData[0].purchasePrice_data))
    dispatch(setPurchasePricePreData(selectedData[0].purchasePricePre_data))
    dispatch(setPurchasePricePre(selectedData[0].purchasePricePre_data))
    dispatch(setDownPaymentPercent(selectedData[0].downPaymentPercent_data))
    dispatch(setInterestRate(selectedData[0].interestRate_data))
    dispatch(setTerms(selectedData[0].terms_data))
    dispatch(setDownPayment(selectedData[0].downPayment_data))
    dispatch(setDownPaymentPre(selectedData[0].downPaymentPre_data))
    dispatch(setLoanAmount(selectedData[0].loanAmount_data))
    dispatch(setLoanAmountPre(selectedData[0].loanAmountPre_data))
    dispatch(setMonthlyPMI(selectedData[0].monthlyPMI_data))
    dispatch(setmonthlyPMIInput(selectedData[0].monthlyPMIInput_data))
    dispatch(setmonthlyPMIResult(selectedData[0].monthlyPMIResult_data))
    dispatch(setOtherMonthlyPayments(selectedData[0].otherMonthlyPayments_data))
    dispatch(setTotalMonthlyPayments(selectedData[0].totalMonthlyPayments_data))
    dispatch(setAnnualTaxInput(selectedData[0].annualTaxInput_data))
    dispatch(setAnnualTaxOutput(selectedData[0].annualTaxOutput_data))
    dispatch(setAnnualInsInput(selectedData[0].annualInsInput_data))
    dispatch(setAnnualInsOutput(selectedData[0].annualInsOutput_data))
    dispatch(setAnnualHoaInput(selectedData[0].annualHoaInput_data))
    dispatch(setAnnualHoaOutput(selectedData[0].annualHoaOutput_data))
    dispatch(setAnnualOtherInput(selectedData[0].annualOtherInput_data))
    dispatch(setAnnualOtherOutput(selectedData[0].annualOtherOutput_data))
    dispatch(setAnnualTaxSign(selectedData[0].annualTaxSign_data))
    dispatch(setAnnualInsSign(selectedData[0].annualInsSign_data))
    dispatch(setAnnualHoaSign(selectedData[0].annualHoaSign_data))
    dispatch(setAnnualOtherSign(selectedData[0].annualOtherSign_data))
    dispatch(setFhaMip(selectedData[0].fhaMip_data))
    dispatch(setFhaMipOutput(selectedData[0].fhaMipOutput_data))
    dispatch(setTotalLoan(selectedData[0].totalLoan_data))
    dispatch(setMonthlyPMIFHA(selectedData[0].monthlyPMIFHA_data))
    dispatch(setmonthlyPMIInputFHA(selectedData[0].monthlyPMIInputFHA_data))
    dispatch(setmonthlyPMIResultFHA(selectedData[0].monthlyPMIResultFHA_data))
    dispatch(setOtherMonthlyPaymentsFHA(selectedData[0].otherMonthlyPaymentsFHA_data))
    dispatch(setTotalMonthlyPaymentsFHA(selectedData[0].totalMonthlyPaymentsFHA_data))
    dispatch(setUSDAMip(selectedData[0].USDAMip_data))
    dispatch(setUSDAMipOutput(selectedData[0].USDAMipOutput_data))
    dispatch(setTotalLoanUSDA(selectedData[0].totalLoanUSDA_data))
    dispatch(setMonthlyPMIUSDA(selectedData[0].monthlyPMIUSDA_data))
    dispatch(setOtherMonthlyPaymentsUSDA(selectedData[0].otherMonthlyPaymentsUSDA_data))
    dispatch(setTotalMonthlyPaymentsUSDA(selectedData[0].totalMonthlyPaymentsUSDA_data))
    dispatch(setmonthlyPMIInputUSDA(selectedData[0].monthlyPMIInputUSDA_data))
    dispatch(setmonthlyPMIResultUSDA(selectedData[0].monthlyPMIResultUSDA_data))
    dispatch(setVAMip(selectedData[0].VAMip_data))
    dispatch(setVAMipOutput(selectedData[0].VAMipOutput_data))
    dispatch(setTotalLoanVA(selectedData[0].totalLoanVA_data))
    dispatch(setMonthlyPMIVA(selectedData[0].monthlyPMIVA_data))
    dispatch(setOtherMonthlyPaymentsVA(selectedData[0].otherMonthlyPaymentsVA_data))
    dispatch(setTotalMonthlyPaymentsVA(selectedData[0].totalMonthlyPaymentsVA_data))
    dispatch(setmonthlyPMIInputVA(selectedData[0].monthlyPMIInputVA_data))
    dispatch(setmonthlyPMIResultVA(selectedData[0].monthlyPMIResultVA_data))
    dispatch(setName(selectedData[0].name_data))
    dispatch(setEmail(selectedData[0].email_data))
    dispatch(setPhone(selectedData[0].phone_data))
    dispatch(setTabTypes(selectedData[0].type_data)) 
    navigation.navigate('Mcfr')
  }
  const IconSize = 18;
  
  return (
    <View >
       <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='Mcfr'
                 />
            </View>
      <View style={styles.pageContainer}>

        <View >
    <View style={{alignItems:'center',top:5}}>
      <Text style={{fontSize:17,color:'darkblue',fontWeight:'bold'}}>{tabeName}</Text>
    </View>
          <View style={styles.midSection}>
    


            <FlatList
              data={CalculationList}
              renderItem={({ item, index }) => { 
                if (item.type_data == tabeName) {
                return (
                  <View style={{ width: width - 30, height:160, backgroundColor: 'white', color: "white", borderRadius: 10, padding: 5, marginTop: 10, flexDirection:'row'}}
                >


                    <TouchableOpacity style={{width:'100%'}}    onPress={() => getSetPram(index) }>

{/* 
<View style={{borderWidth:1,borderColor:'#62a0f7',width:'100%',flexDirection:'row',paddingLeft:2,paddingRight:10,borderBottomWidth:0,paddingTop:4,paddingBottom:0,borderTopLeftRadius:5,borderTopRightRadius:5}} >
  <View style={{width:responsiveWidth(12)}}>
  <Text style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  Name:
  </Text>
  </View>
  <View   numberOfLines={1} style={{width:responsiveWidth(28)}}>
   <TextInput    editable = {false}     maxLength={17} value={item.name_data}  style={{color:'black',fontSize:responsiveFontSize(1.8),height:responsiveWidth(5),padding:0,paddingTop:2}}/>
  
  </View>
  <View style={{width:responsiveWidth(12)}}>
  <Text style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  Phone:  
  </Text>
  </View>
  <View style={{width:responsiveWidth(30)}}>
  <Text style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  {item.phone_data}  
  </Text>
  </View>
  
  
</View>
<View style={{width:'100%',flexDirection:'row'}} >
<View style={{ width:'30%',borderWidth:1,borderColor:'gray',height:90,borderLeftColor:'#62a0f7',borderLeftWidth:1 }}>
  <View style={{alignItems:'center'}}>
        <Text style={styles.headingColor}>
          Price
        </Text>          
  </View>
  <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center'}}>
  <Text style={{color:'blue'}}>$</Text><TextInput    editable = {false}     maxLength={12} value={item.purchasePricePre_data}  style={{color:'blue',fontSize:responsiveFontSize(1.8),height:responsiveWidth(5),padding:0,paddingTop:2}}/>
                  
  </View>
  <View style={{alignItems:'center'}}>
        <Text style={styles.headingColor}>
          Loan
        </Text>          
  </View>
  <View style={{alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:responsiveFontSize(1.8)}}>
        {tabeName ==='CONVENTIONAL' ?   '$'+item.loanAmountPre_data : ''  }
        {tabeName ==='VA' ?   '$'+item.totalLoanVA_data : ''  }
        {tabeName ==='FHA' ?   '$'+item.totalLoan_datap : ''  }
        {tabeName ==='USDA' ?   '$'+item.totalLoanUSDA_data : ''  }
  
        </Text>          
  </View>

</View>

                    <View style={{ borderWidth:1,borderColor:'gray',flexDirection: 'row', justifyContent: "space-between",width:'70%',height:90,borderRightColor:'#62a0f7',borderRightWidth:1,borderLeftWidth:0}}>
                      <View style={{width:'33%'}}>
                      <View>
                        <Text style={{  fontWeight:'bold',color: 'black',alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.2), }}
                      >Down</Text>
                      <Text style={{  color: 'black',alignSelf:'center' ,fontSize:responsiveFontSize(1.7),paddingBottom:responsiveFontSize(0.1)}}>{item.downPaymentPercent_data}%</Text>
                      </View>
 
                      <View style={{borderTopWidth:1,borderColor:'gray',with:'100%'}}>

                      <Text style={{ fontWeight: 'bold', color: 'black',alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.4) }}
                      >P+I</Text>
                      <Text style={{  color: 'black',alignSelf:'center' ,fontSize:responsiveFontSize(1.7)}}>
                        {tabeName ==='CONVENTIONAL' ?   item.monthlyPMI_data : ''  }
                        {tabeName ==='VA' ?   item.monthlyPMIVA_data : '' }
                        {tabeName ==='FHA' ?   item.monthlyPMIFHA_data : '' }
                        {tabeName ==='USDA' ?   item.monthlyPMIUSDA_data : '' }
                        
                        
                        
                        </Text>
                      </View>

                      
                      </View>
                      
                     
                      <View style={{width:'33.33%'}}>
                        <View>
                      <Text style={{ fontWeight: 'bold', color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.2)}}>Int</Text>
                      <Text style={{  color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingBottom:responsiveFontSize(0.1)}}>{item.interestRate_data}%</Text>
                    </View>
                    <View style={{borderTopWidth:1,borderColor:'gray',with:'100%'}}>
                      <Text style={{ fontWeight: 'bold', color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.4)}}>Oth</Text>
                      <Text style={{  color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7)}}>
                      {tabeName ==='CONVENTIONAL' ?   item.otherMonthlyPayments_data : ''  }
                        {tabeName ==='VA' ?   item.otherMonthlyPaymentsVA_data : '' }
                        {tabeName ==='FHA' ?   item.otherMonthlyPaymentsFHA_data : '' }
                        {tabeName ==='USDA' ?   item.otherMonthlyPaymentsUSDA_data : '' }

                      </Text>
                     </View>
                      </View>
                      
                      
                       */}
                   
{/*                     
                      <View style={{width:'33%'}}>
                        <View>
                      <Text style={{ fontWeight: 'bold', color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.2)}}>Yrs</Text>
                      <Text style={{  color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingBottom:responsiveFontSize(0.1)}}>{item.terms_data}</Text>
                  </View>
                  <View style={{borderTopWidth:1,borderColor:'gray'}}>
                      <Text style={{ fontWeight: 'bold', color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7),paddingTop:responsiveFontSize(.4)}}>Total</Text>
                      <Text style={{  color: 'black' ,alignSelf:'center',fontSize:responsiveFontSize(1.7)}}>
                      {tabeName ==='CONVENTIONAL' ?   item.totalMonthlyPayments_data : ''  }
                        {tabeName ==='VA' ?   item.totalMonthlyPaymentsVA_data : '' }
                        {tabeName ==='FHA' ?   item.totalMonthlyPaymentsFHA_data : '' }
                        {tabeName ==='USDA' ?   item.totalMonthlyPaymentsUSDA_data : '' }
                        </Text>
                      </View>
                      </View>
                      
                    
                      <View>
                      </View>
                      
                    </View>


 
</View>
<View style={{borderWidth:1,borderColor:'#62a0f7',width:'100%',flexDirection:'row',justifyContent:'space-between',paddingLeft:50,paddingRight:10,borderTopWidth:0,borderBottomLeftRadius:5,borderBottomRightRadius:5,paddingTop:4,paddingBottom:4}} >
  <Text style={{color:'black'}}>
  {item.created_at}
  </Text>
  <Text>
  
  <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/delete-red50.png')}
                  />
  </Text>
</View>   
 */}
<View style={{height:150,with:'90%',backgroundColor:'white',borderWidth:1,borderColor:'blue',borderRadius:5}}>
  
<View style={{borderBottomColor:'gray',borderBottomWidth:1,width:'100%',flexDirection:'row',paddingBottom:5,paddingTop:5}} >
  <View style={{width:responsiveWidth(12),marginLeft:5}}>
  <Text style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  Name:
  </Text>
  </View>
  <View   numberOfLines={1} style={{width:responsiveWidth(35)}}>
   <TextInput    editable = {false}   numberOfLines={1}  maxLength={17} value={item.name_data}  style={{color:'black',fontSize:responsiveFontSize(1.8),height:responsiveWidth(5),padding:0,paddingTop:2}}/>
  
  </View>
  <View style={{width:responsiveWidth(6)}}>
  <Text style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  P#:  
  </Text>
  </View>
  <View style={{width:responsiveWidth(35)}}>
  <Text numberOfLines={1} style={{color:'black',fontSize:responsiveFontSize(1.8)}}>
  {item.phone_data}  
  </Text>
  </View>
  
  
</View>
<View style={{width:'90%',alignSelf:'center',backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'center'}}>
  
   <View style={{alignItems:'center'}}>
      <Text style={styles.th}>
        Price
      </Text>
      <Text style={styles.td}>
      ${item.purchasePricePre_data}
      </Text>
      
      <Text style={styles.th}>
        Loan
      </Text>
      <Text style={styles.td}>
      {tabeName ==='CONVENTIONAL' ?   '$'+item.loanAmountPre_data : ''  }
        {tabeName ==='VA' ?   '$'+item.loanAmountPre_data : ''  }
        {tabeName ==='FHA' ?   '$'+item.loanAmountPre_data : ''  }
        {tabeName ==='USDA' ?   '$'+item.loanAmountPre_data : ''  }


{/* 
        {tabeName ==='CONVENTIONAL' ?   '$'+item.loanAmountPre_data : ''  }
        {tabeName ==='VA' ?   '$'+item.totalLoanVA_data : ''  }
        {tabeName ==='FHA' ?   '$'+item.totalLoan_data : ''  }
        {tabeName ==='USDA' ?   '$'+item.totalLoanUSDA_data : ''  } */}
      </Text>
    </View>

    <View style={{alignItems:'center'}}>
      <Text style={styles.th}>
        Down
      </Text>
      <Text style={styles.td}>
      {item.downPaymentPercent_data}%
      </Text>
      <Text style={styles.th}>
        P+I
      </Text>
      <Text style={styles.td}>
      {tabeName ==='CONVENTIONAL' ?   item.monthlyPMI_data : ''  }
                        {tabeName ==='VA' ?   item.monthlyPMIVA_data : '' }
                        {tabeName ==='FHA' ?   item.monthlyPMIFHA_data : '' }
                        {tabeName ==='USDA' ?   item.monthlyPMIUSDA_data : '' }
      </Text>
    </View>


    <View style={{alignItems:'center'}}>
      <Text style={styles.th}>
        Int
      </Text>
      <Text style={styles.td}>
      {item.interestRate_data}%
      </Text>
      <Text style={styles.th}>
        Oth
      </Text>
      <Text style={styles.td}>
      {tabeName ==='CONVENTIONAL' ?   item.otherMonthlyPayments_data : ''  }
                        {tabeName ==='VA' ?   item.otherMonthlyPaymentsVA_data : '' }
                        {tabeName ==='FHA' ?   item.otherMonthlyPaymentsFHA_data : '' }
                        {tabeName ==='USDA' ?   item.otherMonthlyPaymentsUSDA_data : '' }

      </Text>
    </View>

    <View style={{alignItems:'center'}}>
      <Text style={styles.th}>
        Yrs
      </Text>
      <Text style={styles.td}>
      {item.terms_data}
      </Text>
      <Text style={styles.th}>
        Total
      </Text>
      <Text style={styles.td}>
      {tabeName ==='CONVENTIONAL' ?   item.totalMonthlyPayments_data : ''  }
                        {tabeName ==='VA' ?   item.totalMonthlyPaymentsVA_data : '' }
                        {tabeName ==='FHA' ?   item.totalMonthlyPaymentsFHA_data : '' }
                        {tabeName ==='USDA' ?   item.totalMonthlyPaymentsUSDA_data : '' }
      </Text>
    </View>
     </View>
     <View style={{borderTopWidth:1,borderTopColor:'gray',width:'100%',flexDirection:'row',justifyContent:'space-between',paddingTop:4,paddingBottom:4,paddingRight:10,paddingLeft:10}} >
  <Text style={{color:'black'}}>
  {item.created_at}
  </Text>
  <Text>
  <TouchableOpacity onPress={() => deleteRecord(index)}  >
  <Image
                    resizeMode='contain'
                  style={[styles.tinyIcon]}
                  source={require('../../../assets/images/icons/delete-red50.png')}
                  />
                  </TouchableOpacity>
  </Text>
</View>
</View>
                    </TouchableOpacity>


                  </View>







                )
                }
              }}

            />
          </View>

        

        </View>

       
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  pageContainer: {
    // justifyContent: 'center',
    backgroundColor: '#D7DDE9',
    height: height,
    width: width,
    alignItems: 'center'
  },

  midSection: {
    backgroundColor: '#D7DDE9',
    borderRadius: 10,
    top: 2,
     bottom: 50,
    height: "81%",
    width: width - 30,
    alignItems: 'center'
  },
  ActionButtonbar: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    top: 20,
    right: 5,
    // backgroundColor:'red'
  },

  BottomeSection: {
    position: 'absolute', zIndex: 1,
    flex: 4,
    top: -22,
  },

  input: {
    fontSize: 32,
    right: 10,
    top: 5,
    color: "black",
    textAlign: 'right',
    fontFamily: "Roboto-Regular",

  },
  inputClearBtn: {
    fontSize: 32,
    right: 0,
    // top:10,
    color: "black",
    textAlign: 'right',
    height: 60,
    width: "85%",
    fontFamily: "Roboto-Regular",
  },
  borderInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 140,
    paddingEnd: 30
    // padding:7

  },

  button: {
    alignItems: "center",
    backgroundColor: "#FF5E80",
    padding: 5,
    borderRadius: 10,
    marginLeft: 10,
    //  width:67
  },
  buttonFonts: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  parent: {
    // marginLeft: 25,
    marginRight: 5,
    marginTop: 8,
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 220,
  },
  closeButton: {
    height: 20,
    width: 22,
    marginRight: 15,

  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  btnMarginTop: {
    left: 10
  },
  headingColor:{
    color:'blue',
    fontSize:responsiveFontSize(1.8),
    padding:1,
    fontWeight:'bold'
  },
  tinyIcon:{
    height:16,
    width:16,
    // borderRadius:10
    marginRight:10
  },
  th:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    alignSelf:'center'
  },
  td:{
    fontSize:14,
    color:'black',
    alignSelf:'center'
  },
  hr:{
    borderBottomWidth:1,
    borderBottomColor:'red',
  }

})
export default HomeScreen;