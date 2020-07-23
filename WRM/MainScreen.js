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
import GISView from './GISView';
import DataEnteryOption from './DataEnteryOption';
import EnterOTP from "./EnterOTP";


const DashboardStack = createStackNavigator();
const CardListStack = createStackNavigator();
const SigninStack = createStackNavigator();
const DamInspectionStack = createStackNavigator();
const DamHealthSafetyStack = createStackNavigator();
const DamHealthStack = createStackNavigator();
const LiveStorageDamTankStack = createStackNavigator();
const SignupStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const GISViewStack = createStackNavigator();
const DamInspectionCheckListStack = createStackNavigator();
const LoginScreenStack = createStackNavigator();
const ForgetPassStack = createStackNavigator();
const DataEnteryOptionStack = createStackNavigator();
const EnterOTPStack = createStackNavigator();


// export default MainScreen;
function LogoTitle() {
  return (
    <Image
      style={{ width:"105%", height: 55 }}
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
     
    }}>
    <DamInspectionStack.Screen
      name="DamInspection"
      component={DamInspection}
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
  </DamInspectionCheckListStack.Navigator>
);

export const DamHealthSafetyScreen = ({navigation}) => (
  <DamHealthSafetyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
     
    }}>
    <DamHealthSafetyStack.Screen
      name="DamHealthSafety"
      component={DamHealthSafety}
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
  </DamHealthSafetyStack.Navigator>
);

export const DamHealthStackScreen = ({navigation}) => (
  <DamHealthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
     
    }}>
    <DamHealthStack.Screen
      name="DamHealth"
      component={DamHealth}
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
  </DamHealthStack.Navigator>
);

export const LiveStorageDamTankStackScreen = ({navigation}) => (
  <LiveStorageDamTankStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
     
     
    }}>
    <LiveStorageDamTankStack.Screen
      name="LiveStorageDamTank"
      component={LiveStorageDamTank}
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
     
    }}>
    <ProfileStack.Screen name="Profile"
     component={Profile}
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
     
  </ProfileStack.Navigator>
);


export const GISViewStackScreen = ({navigation}) => (
  <GISViewStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <GISViewStack.Screen name="GISView"
     component={GISView}
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
     
  </GISViewStack.Navigator>
);

export const LoginScreenStackScreen = ({navigation}) => (
  <LoginScreenStack.Navigator
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
    <LoginScreenStack.Screen
     name="LOGIN"
     component={LoginScreen}
    //  options={{
    //   headerTitle: props => <LogoTitle {...props} />
    //   ,
    //   headerLeft: () => (
    //     <Icon.Button
    //       name="ios-menu"
    //       size={25}
    //       backgroundColor="#dc2430"
    //       onPress={() => navigation.openDrawer()}></Icon.Button>
    //   ),
    // }}
  />  
  </LoginScreenStack.Navigator>
);

export const ForgetPassStackScreen = ({navigation}) => (
  <ForgetPassStack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#dc2430',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      marginLeft: 120,
      fontWeight: 'bold',
    },
  }}>
    <ForgetPassStack.Screen
     name="ForgetPassword"
     component={ForgetPass}
    
  />  
  </ForgetPassStack.Navigator>
);

export const DataEnteryOptionStackScreen = ({navigation}) => (
  <DataEnteryOptionStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
    
    }}>
    <DataEnteryOptionStack.Screen
     name="DataEnteryOption"
     component={DataEnteryOption}
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
  </DataEnteryOptionStack.Navigator>
);

export const EnterOTPStackScreen = ({navigation}) => (
  <EnterOTPStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <EnterOTPStack.Screen name="EnterOTP"
     component={EnterOTP}
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
     
  </EnterOTPStack.Navigator>
);