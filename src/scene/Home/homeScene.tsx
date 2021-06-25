import * as React from 'react';
import { View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import {getBiaoti} from "../../utils/api"
import fetchRequest from '../../utils/request';


const Home:React.FunctionComponent = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const afterRender=useEffect
     afterRender(()=>{
      getBiaoti().then((res)=>{
          // console.log(res);
          setData(res.body)
      })
      
      
    },[])
  return (
    <View>
        <Text>
          {/* {data} */}
        </Text>
  </View>
  );
} 

export default Home;
