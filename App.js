import * as React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {registerRootComponent} from 'expo';
import Toast from 'react-native-toast-message';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeView from './components/HomeView.js'
import Trails from './components/TrailsScreen.js';
import AboutView from './components/AboutView.js';
import DiagnosisView from './components/DiagnosisView.js';
import HelpView from './components/HelpView.js';

import Icon from 'react-native-vector-icons/FontAwesome5';

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

function AboutCovid(){
  return(
    <Stack.Navigator>
    <Stack.Screen
        name="COVID-19 INFO"
        component={AboutView}/>
    </Stack.Navigator>
  )
}

function Diagnosis(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name = "Diagnosis" 
        component = {DiagnosisView}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

function Help(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name = "Help"
      component = {HelpView}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

const MyStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="Covid Aid"
              component={TopNav}/>
      </Stack.Navigator>
  )
}

const TopNav = () => {
  return (
      <Tab.Navigator initialRouteName="Covid Aid"
      tabBarOptions={{
        showIcon:true}}
      >
          
          <Tab.Screen
              name="Home"
              component={HomeView}
              options={{
                  tabBarIcon: ({ tintColor }) => (
                      <View>
                          <Icon
                              style={[{ color: tintColor }]}
                              size={20}
                              name={'home'}
                          />
                      </View>
                  ),
              }}
          />
          <Tab.Screen
              name=" My Trails"
              component={Trails}
              options={{
                  tabBarIcon: ({ tintColor }) => (
                      <View>
                          <Icon
                              style={[{ color: tintColor }]}
                              size={20}
                              name={'walking'}
                          />
                      </View>
                  ),
              }}
          />
         
      </Tab.Navigator>
  )
}

 class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Covid Aid">
                    <Drawer.Screen name="Home" component={MyStack}
                     options = {{
                       title:"HOME",
                       drawerIcon: () =>(
                         <Icon name="home" size = {15}/>
                       ),}} />
                    <Drawer.Screen name = "About Covid " component = {AboutCovid} 
                      options = {{
                       title:"ABOUT COVID-19",
                       drawerIcon: () =>(
                         <Icon name="book" size = {15}/>
                       ),}}
                    />
                    <Drawer.Screen name = "Diagnosis" component = {Diagnosis} 
                      options = {{
                       title:"DIAGNOSE",
                       drawerIcon: () =>(
                         <Icon name="hospital-user" size = {15}/>
                       ),}}
                    />
                    <Drawer.Screen name = "Help" component = {Help}
                     options = {{
                       title:"HELP",
                       drawerIcon: () =>(
                         <Icon name="hands-helping" size = {15}/>
                       ),}} 
                       
                    />
                </Drawer.Navigator>
                <Toast ref={(ref) => Toast.setRef(ref)} />

            </NavigationContainer>
        )
    }
}

export default registerRootComponent(App);