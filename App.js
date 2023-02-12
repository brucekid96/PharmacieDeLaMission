import 'react-native-gesture-handler';

import * as React from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import AddProduct from './pages/AddProduct';
import Jew from './pages/Jew';
import Wew from './pages/Wew';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

/* const CustomtabBarButton = ({children,onPress}) => {
    <TouchableOpacity
    style={{
      top: -30,
      justifyContent:'center',
      alignItems:'center',
      ...styles.shadow
    }}
    onPress={onPress}>
      <View style={{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:'#032f45'
      }}>
        {children}
      </View>
    </TouchableOpacity>
} */

/* const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
     // screenOptions={{headerShown: false}}
      tabBarOptions={{
        style:{
          showLabel:false,
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#ffffff',
          borderRadius:15,
          height:90,
          ...styles.shadow
        }
      }}
      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home Screen',
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center', justifyContent:'center',top:10}}>
             <Text>Home</Text>
            </View>
              
            
          ),
        }}
      />


      <Tab.Screen
        name="Jew"
        component={Jew}
          options={{
            tabBarLabel: 'Jew ',
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems:'center', justifyContent:'center',top:10}}>
               <Text>Jew</Text>
              </View>
                
            
            ),
        }}
      />
      <Tab.Screen
        name="Wew"
        component={Wew}
        options={{
          tabBarLabel: 'Wew Screen',
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center', justifyContent:'center',top:10}}>
             <Text>Wew</Text>
            </View>
              
            
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore Screen',
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems:'center', justifyContent:'center',top:10}}>
             <Text>ExploreScreen</Text>
            </View>
              
            
          )
        }}
      />
    </Tab.Navigator>
  );
}; */

const styles = StyleSheet.create({
  shadow:{
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5, 
    elevation:5
  }
})

/* const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};
 */
const AddProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{headerShown: false}}>
      <Stack.Screen  component={AddProduct} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
        }}>
        <Drawer.Screen
          name="HomeScreen"
          options={{
            drawerLabel: 'Home Screen Option',
            title: 'Home Screen',
          }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="AddProduct"
          options={{
            drawerLabel: 'Add New Product',
            title: 'Add Product',
          }}
          component={AddProduct}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;