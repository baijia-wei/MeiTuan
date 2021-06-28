import * as React from 'react';
import { View,Text } from 'react-native';

interface Props{
    menUInfos:Array<object>,
    onMenuSelected:Function

}
interface State{


}

const HomeView:React.FunctionComponent<Props>= (path:Props) => {
  let {menUInfos,onMenuSelected}=path

  let MenuElements=menUInfos.map((info,index)=>{
    <Text>

    </Text>
  })

  return (
    <View>
        
  </View>
  );
} 

export default HomeView;
