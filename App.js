import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Updates from './screens/Updates';
import Profile from './screens/Profile';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
          }} >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                tabBarIcon:({focused})=>
                focused ? <Icon name='home' size={15} color='blue'></Icon>:<Icon name='home' size={15} color='gray'></Icon>
               }}
            />
            <Tab.Screen
              name="Updates"
              component={Updates}
              options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                tabBarIcon:({focused})=>
                focused ? <Icon name='mobile' size={15} color='blue'></Icon>:<Icon name='mobile' size={15} color='gray'></Icon>
               }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                tabBarIcon:({focused})=>
                focused ? <Icon name='user' size={15} color='blue'></Icon>:<Icon name='user' size={15} color='gray'></Icon>
               }}
            />
      </Tab.Navigator>
    </NavigationContainer>
  );
}