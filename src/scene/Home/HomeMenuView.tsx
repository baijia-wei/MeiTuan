import * as React from 'react';
import { Alert, ImageProps, StyleSheet } from 'react-native';
import { View,Text ,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import screen from "../../assets/coommon/screen"
import PageControl from "react-native-page-control"
import color from "../../assets/Color/color"
import { useState } from 'react';
interface IStatea {
  id: number,
  text: string,
  img_src: Readonly<ImageProps>
}
interface Props{
    menUInfos:Array<IStatea>,
    // onMenuSelected:Function
}
const HomeView:React.FC<Props>= (props:Props) => {
  let [currentPage,onScroll] = useState(0);
  const  {menUInfos}=props
  const  pageCount =Math.ceil(menUInfos.length/10)
  const  MenuElements=menUInfos.map((info,index)=>{
      return  <TouchableOpacity  key={info.id}  style={styles.constainer} onPress={()=>{
                  Alert.alert("text:"+index)
      }}>
                <Image source={info.img_src}  style={styles.icon}/>
                <Text>{info.text}</Text>
              </TouchableOpacity>
  })

  const  MenuViews=[]
  for (let i = 0 ; i < pageCount;i++){
      let elementsPerPage=MenuElements.slice(i*10,i*10+10)
      const menuView=(
        <View style={styles.itemsView}  key={i}>
          {elementsPerPage}
        </View>
    )
    MenuViews.push(menuView)
  }

  return (
    <View style={styles.constainerx}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // 滑动菜单栏 底部小圆点开始变换位置
          onScroll={(e)=>{onScroll( Math.round(e.nativeEvent.contentOffset.x/screen.width))}}
          >
          {MenuViews}
        </ScrollView>
        <PageControl 
          style={styles.pageCountsw}

          numberOfPages={pageCount}
          currentPage={currentPage}
          pageIndicatorTintColor="gray"
          currentPageIndicatorTintColor={color.primary}
        />

    </View>
  );
} 
const styles=StyleSheet.create({
  constainer:{
      justifyContent:"center",
      alignItems:"center",
      width:screen.width/5,
      height:screen.width/5,
  },
  icon:{
    width:screen.width/9,
    height:screen.width/9,
    margin:5
  },
  itemsView:{
    flexDirection:"row",
    flexWrap:"wrap",
    width:screen.width
  },
  constainerx:{
    backgroundColor:"white"
  },
  pageCountsw:{
      margin:10
  }
})



export default HomeView;
