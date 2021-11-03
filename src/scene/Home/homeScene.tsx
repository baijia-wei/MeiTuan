import * as React from 'react';
import { View,Text, Alert } from 'react-native';
import HomeView from './HomeMenuView';

import * as Icons from "../../assets/Staticsrc/daohang"
import HomeCarousel from "./HomeCarousel";
import { useState ,useEffect } from 'react';
import {getBiaoti }from "../../utils/api";
const Home:React.FunctionComponent = () => {
  let [carouseldata,setScroll] = useState([]);
   useEffect(()=>{
    getBiaoti().then((res)=>{
        setScroll(res.body)
      })
    },[])
 
  return (
    <View>
        {/* 轮播图 */}
        <HomeCarousel menUInfos={carouseldata}/>
        {/* 菜单栏 */}
        <HomeView menUInfos={Icons.entryData}/>
  </View>
  );
} 

export default Home;
