/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from './DrawerContent';
import Dashboard from './Dashboard';
import Splash from './Splash';
import DamInspection from './DamInspection';
import DamHealthSafety from './DamHealthSafety';
import DamHealth from './DamHealth';
import CardList from './CardList';
import  UserProfile from './UserProfile';
import Signup from './Signup';
import Signin from './Signin';
import ForgetPass from './ForgetPass';
import LoginScreen from './LoginScreen';
import LiveStorageDamTank from './LiveStorageDamTank';


const Stack = createStackNavigator();
const SigninStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SigninStackScreen =( {navigation}) =>(

<SigninStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#dc2430'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          marginLeft:150,
          fontWeight:'bold'
        }
        }}>
        <Stack.Screen  name="Signin" component={Signin}/>
       
      </SigninStack.Navigator>

);

const DashboardStackScreen =( {navigation}) =>(
  <DashboardStack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor: '#dc2430'
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            marginLeft:80,
            fontWeight:'bold'
          }
          }}>
         
          <Stack.Screen  name="Dashboard" component={Dashboard} options={{
            headerLeft:() =>(
              <Icon.Button name='ios-menu' size={25}
              backgroundColor="#dc2430" onPress={()=>{navigation.openDrawer()}}></Icon.Button>
            )
          }}/>
        </DashboardStack.Navigator>
  
  );


const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
           {/* <Dashboard />  */}
          {/* <Splash/> */}
          {/* <DamInspection/>  */}
          {/* <DamHealthSafety/> */}
           {/* <DamHealth/>  */}
           {/* <CardList/>  */}
           {/* <UserProfile/> */}
           {/* <Signup/> */}
           {/* <Signin/> */}
           {/* <ForgetPass /> */}
           {/* <LoginScreen/> */}
        {/* </ScrollView>
      </SafeAreaView> */}
      <NavigationContainer>
      <Drawer.Navigator DrawerContent={props => <DrawerContent {...props} />}>
        
        {/* <Drawer.Screen name="Signin" component={SigninStackScreen} /> */}
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
