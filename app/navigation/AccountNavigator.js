import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import About from '../screens/About';
import TmTh from '../screens/TmThScreen';
import Fb from '../screens/FaceBook';
import YouTubeScreen from '../screens/YouTubeScreen';
import OtherScreen from '../screens/OtherScreen';
import DynamicurlScreen from '../screens/DynamicurlScreen';
import Officials from '../screens/Officials';
const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="About" component={About}/>
    <Stack.Screen name="Tmth" component={TmTh}/>
    <Stack.Screen name="Fb" component={Fb}/>
    <Stack.Screen name="Yt" component={YouTubeScreen}/>
    <Stack.Screen name="Other" component={OtherScreen}/>
    <Stack.Screen name="Durl" component={DynamicurlScreen}/>
    <Stack.Screen name="Official" component={Officials}/>
  </Stack.Navigator>
);

export default AccountNavigator;
