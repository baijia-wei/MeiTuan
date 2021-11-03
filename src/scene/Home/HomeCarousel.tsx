import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View ,Image} from 'react-native';
import screen from "../../assets/coommon/screen"
import Swiper from 'react-native-swiper';
import color from "../../assets/Color/color"
import { baseURL } from '../../utils/request';
import { useState } from 'react';
import { Text } from 'react-native';
interface IStatea {
    id: number,
    imgSrc: string
}
interface Props{
    menUInfos:Array<IStatea>,
}

const HomeCarousel:React.FunctionComponent<Props>= (props) => {
    const{menUInfos}=props
    const Carousehtml=menUInfos.map((info,index)=>{
      return<Image key={index} source={{uri:baseURL+info.imgSrc}} style={styles.stretch}/>})
  return (
    <View style={styles.searchindex}>
      <Swiper height={200}
              loop={true}
              showsPagination={true}
              showsButtons={true}
              index={0}
              autoplayTimeout={3.5}
              autoplay={true}
              horizontal={true}>
          {Carousehtml}
           </Swiper>
      
    </View>
  );
} 
const styles=StyleSheet.create({
  searchindex:{
    height:200,
    width:screen.width,
    backgroundColor:"white",
  },
  pageCountsw:{
    margin:10
  },
  stretch:{
    flex:1,
    width:screen.width,
    height:180
  }
})



export default HomeCarousel;
