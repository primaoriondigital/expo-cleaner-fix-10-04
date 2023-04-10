import React from 'react'
import { GetStarted, PageHome,PageLogin,Splash,pageChat } from '.'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../page/Login';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={PageHome} options={{headerShown: false}}/>
        <Stack.Screen name="Chat" component={pageChat} options={{headerShown: false}}/>
        <Stack.Screen name="GetStated" component={GetStarted} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={PageLogin} options={{headerShown: false}}/>
        {/* <Stack.Screen name="Chat" component={pageChat} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Chat" component={pageChat} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Chat" component={pageChat} options={{headerShown: false}}/> */}
        {/* <Stack.Screen name="Chat" component={pageChat} options={{headerShown: false}}/> */}
    </Stack.Navigator>
  )
}

export default Router
