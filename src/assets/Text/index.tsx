import React,{PureComponent} from "react";
import { TextStyle } from "react-native";
import { StyleProp } from "react-native";
import { StyleSheet,View,Image,Text } from "react-native";
import color  from "../Color/color";


export function Heading1(style:StyleProp<TextStyle>,...props:[ ]) {
    return <Text style={[styles.h1,style]} {...props}></Text>
}
const styles=StyleSheet.create({
    h1:{
        fontSize:40
    }
})