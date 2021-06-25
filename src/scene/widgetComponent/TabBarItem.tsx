import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Text,Image,StyleSheet,View } from 'react-native';

interface Props {
    normalImage:ImageSourcePropType,
    selectedImage:ImageSourcePropType,
    focused:boolean,
    tintColor:string
}
const TabBaritem:React.FunctionComponent<Props> = (Props) => {
    const  {normalImage,selectedImage,focused,tintColor} =Props
  return (
    //   ,tintColor:tintColor:可选 当前颜色 不切换图片
        <Image source={focused? selectedImage:normalImage} style={{width:25,height:25}}/>
  );
}

export default TabBaritem;