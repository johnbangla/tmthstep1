import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import About from '../screens/About';
import TmTh from '../screens/TmThScreen';
import Fb from '../screens/FaceBook';
import YouTubeScreen from '../screens/YouTubeScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="About" component={About}/>
    <Stack.Screen name="Tmth" component={TmTh}/>
    <Stack.Screen name="Fb" component={Fb}/>
    <Stack.Screen name="Yt" component={YouTubeScreen}/>
  </Stack.Navigator>
);

export default AccountNavigator;
