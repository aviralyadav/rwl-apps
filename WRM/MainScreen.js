import React from 'react';
import {Text,View,Image } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from './Dashboard';
import CardList from './CardList';
import Signin from './Signin';
import Profile from './Profile';
// import DrawerContent from './DrawerContent';
import Splash from './Splash';
import DamInspection from './DamInspection';
import DamInspectionCheckList from './DamInspectionCheckList';
import DamHealthSafety from './DamHealthSafety';
import DamHealth from './DamHealth';

import Signup from './Signup';
import ForgetPass from './ForgetPass';
import LoginScreen from './LoginScreen';
import LiveStorageDamTank from './LiveStorageDamTank';
import EnterEvaporation from './EnterEvaporation';


const DashboardStack = createStackNavigator();
const CardListStack = createStackNavigator();
const SigninStack = createStackNavigator();
const DamInspectionStack = createStackNavigator();
const DamHealthSafetyStack = createStackNavigator();
const DamHealthStack = createStackNavigator();
const LiveStorageDamTankStack = createStackNavigator();
const SignupStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const EnterEvaporationStack = createStackNavigator();
const DamInspectionCheckListStack = createStackNavigator();

// export default MainScreen;
function LogoTitle() {
  return (
    <Image
      style={{ width:"105%", height: 55}}
      source={require("./Images/pravahlogoios.png")}
    />
  );
}


export const DashboardScreenStack = ({navigation}) => (

  
  <DashboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DashboardStack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />
        ,
        
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DashboardStack.Navigator>
);

export const CardListScreenStack = ({navigation}) => (
  <CardListStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <CardListStack.Screen
      name="CardList"
      component={CardList}
      options={{
        headerTitle: props => <LogoTitle {...props} />
        ,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </CardListStack.Navigator>
);

export const SigninStackScreen = ({navigation}) => (
  <SigninStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
      },
    }}>
    <SigninStack.Screen name="Signin" component={Signin} />
  </SigninStack.Navigator>
);

export const DamInspectionScreen = ({navigation}) => (
  <DamInspectionStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <DamInspectionStack.Screen
      name="DamInspection"
      component={DamInspection}
      options={{
        title: 'Dam Inspection',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DamInspectionStack.Navigator>
);

export const DamInspectionCheckListScreen = ({navigation}) => (
  <DamInspectionCheckListStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <DamInspectionCheckListStack.Screen
      name="DamInspectionCheckList"
      component={DamInspectionCheckList}
      options={{
        title: 'Dam Inspection CheckList',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DamInspectionCheckListStack.Navigator>
);

export const DamHealthSafetyScreen = ({navigation}) => (
  <DamHealthSafetyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DamHealthSafetyStack.Screen
      name="DamHealthSafety"
      component={DamHealthSafety}
      options={{
        title: 'Dam Health Safety',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DamHealthSafetyStack.Navigator>
);

export const DamHealthStackScreen = ({navigation}) => (
  <DamHealthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DamHealthStack.Screen
      name="DamHealth"
      component={DamHealth}
      options={{
        title: 'Dam Health',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DamHealthStack.Navigator>
);

export const LiveStorageDamTankStackScreen = ({navigation}) => (
  <LiveStorageDamTankStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <LiveStorageDamTankStack.Screen
      name="LiveStorageDamTank"
      component={LiveStorageDamTank}
      options={{
        title: 'Live Storage Dam Tank',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </LiveStorageDamTankStack.Navigator>
);

export const SignupStackScreen = ({navigation}) => (
  <SignupStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
      },
    }}>
    <SignupStack.Screen name="Signup" component={Signup} />
  </SignupStack.Navigator>
);

export const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);


export const EnterEvaporationStackScreen = ({navigation}) => (
  <EnterEvaporationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen name="EnterEvaporation" component={EnterEvaporation} />
  </EnterEvaporationStack.Navigator>
);
