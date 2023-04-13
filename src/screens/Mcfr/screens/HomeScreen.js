import React,{ useState, useEffect } from 'react';
import {ToastAndroid,Share, Text, View, Image, StyleSheet,Dimensions,TextInput , TouchableOpacity,Linking, TouchableWithoutFeedback, Keyboard} from 'react-native';
import TabData from '../components/tabData';
import Header from '../../Home/components/Header';
 import { TabView,TabBar, SceneMap } from 'react-native-tab-view';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const {height,width} = Dimensions.get("screen");

const FirstRoute = () => (
  <TabData conventional />
  );
  
  const SecondRoute = () => (
    <TabData fha />
  );
  
  const ThirdRoute = () => (
    <TabData  va  />
  );
  const FourthRoute = () => (
    <TabData usda />

  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
  });
const HomeScreen = ({navigation, route}) => {
    const layout =Dimensions.get("screen");

    // navigate to Infoscreen

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Conventional' },
    { key: 'second', title: 'FHA' },
    { key: 'third', title: 'VA' },
    { key: 'fourth', title: 'USDA' },
  ]);
  const renderTabBar = props => (
  	<TabBar
     	 {...props}
        style={{backgroundColor:'#62a0f7'}}
        tabStyle={{
          // elevation: 0,
           width: '100%',
          marginHorizontal: 3,
        }}
        labelStyle={{
          fontSize: responsiveFontSize(2),
          fontWeight: '600',
          // left:'20%',
          // width:'100%'
          // textTransform: 'capitalize',
        }}
        // indicatorStyle={{
        //   height: 3,
        //   bottom: 6,
        //   width:120,
        //   color:'white'
          
        // }}
        activeColor={'white'}
        inactiveColor={'black'}
  	/>
  );
 

  
return (
  <View style={{flex:1}}>
    {/* <View style={{backgroundColor:'#62a0f7', justifyContent:'space-between',
        alignItems:'center',flexDirection:'row',
        height:  Platform.OS === 'ios' ? 100 : 60,
        paddingTop: Platform.OS === 'ios' ? 40 : 0,

        }}>
          <View>
          <Image
                  style={{height:35,width:35,left:7}}
                  source={require('../../../assets/images/logo/loancal_lite_icon.png')}
                  />
          </View>
  <View><Text style={{fontFamily:'IBMPlexSans-BoldItalic',color:'white',padding:10,
        fontSize:22,
        
}}>Loan Calculator - Lite </Text></View>
    
  <TouchableOpacity  
          onPress={()=>{  navigation.navigate('TabScreen') }} style={{right:5}}
        ><Text>ok</Text></TouchableOpacity>

     </View> */}
       <View style={{height:  Platform.OS === 'ios' ? '15%' : '10%',paddingTop:Platform.OS === 'ios' ? 45 : 5,width:'100%',alignSelf:'center',backgroundColor:'white'}}>
                <Header
                 back
                 navPath='TabScreen'
                 />
            </View>
    <TabView
    
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
      style={{width:'100%'}}
    />
  </View>
  
  )
}
const styles= StyleSheet.create({


})
export default HomeScreen;