import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constains/navigationStrings';
import * as Screens from '../screens'
import imagePath from '../constains/imagePath';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
   
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName={navigationStrings.CHATS}>
    <Tab.Screen
        name={navigationStrings.STATUS}
        component={Screens.Status}
        options={{
            tabBarIcon: ({ focused }) => {
                return <Image style={{ tintColor: focused ? 'blue' : 'black' }} source={imagePath.icStatus} />
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.CALLS}
        component={Screens.Calls}
        options={{
            tabBarIcon: ({ focused }) => {
                return <Image style={{ tintColor: focused ? 'blue' : 'black' }} source={imagePath.icCalls} />
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.CAMERA}
        component={Screens.Camera}
        options={{
            tabBarIcon: ({ focused }) => {
                return <Image style={{ tintColor: focused ? 'blue' : 'black' }} source={imagePath.icCamera} />
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.CHATS}
        component={Screens.Chats}
        options={{
            tabBarIcon: ({focused}) =>{
                return <Image style={{tintColor: focused? 'blue': 'black'}} source={imagePath.icChats} />
            }
        }}
    />
    <Tab.Screen
        name={navigationStrings.SETTINGS}
        component={Screens.Settings}
        options={{
            tabBarIcon: ({ focused }) => {
                return <Image style={{ tintColor: focused ? 'blue' : 'black' }} source={imagePath.icSettings} />
            }
        }}
    />
</Tab.Navigator>
  );
}