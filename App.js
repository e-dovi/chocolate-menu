//import { Pressable, Button, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {selectCart, clearCart, /*addToCart,*/ increaseQty, decreaseQty, removeItem} from './reducers/cartSlice.js';
import {useDispatch, Provider, useSelector} from "react-redux";
import {createContext, useContext, useState} from 'react';
import {store} from './reducers/store.js';
import CartScreen from './components/cart.js';
import LoginScreen from './components/login.js';
import SettingsScreen from './components/setting.js';
import MenuScreen from './components/menu.js';

export const AuthContext = createContext(null);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  
  const [hasUser, setUser] = useState(false)

  return (
  
    <Provider store={store}>
    <AuthContext.Provider value={{hasUser, setUser}}>
      <NavigationContainer>
     {hasUser ? 

     (<Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
          <Tab.Screen name="Menu" component={MenuScreen} options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}/>

          <Tab.Screen name="Cart" component={CartScreen} options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          )}}/>

          <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )}}/>
        </Tab.Navigator>)
       :
        
      (<Stack.Navigator>
        
        <Stack.Screen name="Login" component={LoginScreen} />
     
      </Stack.Navigator> )}
      </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  
  );
}
