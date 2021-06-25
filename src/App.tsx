import  React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator,} from "@react-navigation/bottom-tabs";
import Home from "./scene/Home/homeScene"
import Mine from "./scene/Mine/mine"
import Nearby from "./scene/Mine/mine"
import order from "./scene/Order/order"
import web from "./web/webScene"
import TabBaritem from "./scene/widgetComponent/TabBarItem";
import color from "./scene/widgetComponent/color";
import { StyleSheet, Text, TouchableOpacity ,Image,Dimensions} from "react-native";

const App:React.FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused,color}) => {
            // console.log(focused);当前选项卡是否选中
            if (route.name === '首页') {
             return <TabBaritem tintColor={color} focused={focused} normalImage={require('./img/nohome.png')} selectedImage={require('./img/home.png')}/>
            } 
            if (route.name === '推荐') {
              return   <TabBaritem tintColor={color} focused={focused} normalImage={require('./img/nonearby.png')} selectedImage={require('./img/nearby.png')}/>
            }
            if (route.name === '订单') {
              return  <TabBaritem tintColor={color} focused={focused} normalImage={require('./img/noorder.png')} selectedImage={require('./img/order.png')}/>
            }
            if (route.name === '我的') {
              return <TabBaritem tintColor={color} focused={focused} normalImage={require('./img/nomine.png')} selectedImage={require('./img/mine.png')}/>
            }
          },
        })}
        lazy={true}
        // 当前选项卡选中不选中颜色
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
       >
        <Tab.Screen name="首页"  component={TabScreen}  />
        <Tab.Screen name="推荐" component={Nearby} />
        <Tab.Screen name="订单" component={order}/>
        <Tab.Screen name="我的" component={Mine} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const TabScreen=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="首页"
        component={Home}
        options={{
          headerTintColor: 'red',
          headerStyle: { backgroundColor: color.primary },
          headerTitle:NavigationOptions,
          headerLeft:headerLeft,
          headerRight:headerRight
        }}
      />
      <Stack.Screen
        name="webscene"
        component={web}
        options={{
          headerTintColor: 'red',
          headerStyle: { backgroundColor: 'blue' },
          
        }}
      />
    </Stack.Navigator>
  );
}


const NavigationOptions=()=>{
    return  <TouchableOpacity style={styles.searchBar}>
                <Image source={require("./img/fangdajing.png")} style={styles.searchIcon}/>
                <Text style={{fontSize:15
                  ,color:color.heise}}>搜索</Text>
            </TouchableOpacity>
}

// 配置导航栏左侧
const headerLeft=()=>{
    return  <TouchableOpacity style={styles.cibtauber}
              onPress={()=>{
                
              }}
              >
                <Text style={{fontSize:15 ,margin:8,color:color.heise} }>定位</Text>
            </TouchableOpacity> 
}
const headerRight=()=>{
  return  <TouchableOpacity style={styles.cibtauber}>
              {/* <Text style={{fontSize:15 ,margin:8,color:"white"} }>图标</Text> */}
              <Image source={require("./img/xiaoxi.png")} style={styles.searchIcon}/>
          </TouchableOpacity> 
}




//tab导航栏  // 选项卡页签tab navigator 实例
const Tab = createBottomTabNavigator();
// 堆栈stack 实例
const Stack = createStackNavigator();

const styles=StyleSheet.create({
  searchBar:{
    flexDirection:"row",
    // 搜索框的长度是当前设备的百分之70
    width:Dimensions.get("window").width*0.7,
    height:30,
    borderRadius:19,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  },
  cibtauber:{
    justifyContent:"center",
    alignItems:"center",
  },
  searchIcon:{
    width:20,
    height:20,
    margin:5
  }
})


export default App;