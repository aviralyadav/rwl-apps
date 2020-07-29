import React from 'react';
import {Text,View,Image, Dimensions } from 'react-native';
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
import GateInspectionDetailForm from './GateInspectionDetailForm';
import GateInspectionDetailForm2 from './GateInspectionDetailForm2';
import GateInspectionDetailForm3 from './GateInspectionDetailForm3';
import GateInspectionDetailForm4 from './GateInspectionDetailForm4';
import GateInspectionDetailForm5 from './GateInspectionDetailForm5';
import GateInspectionDetailForm6 from './GateInspectionDetailForm6';
import DamHealthSafety from './DamHealthSafety';
import DamHealth from './DamHealth';

import Signup from './Signup';
import ForgetPass from './ForgetPass';
import LoginScreen from './LoginScreen';
import LiveStorageDamTank from './LiveStorageDamTank';
import GISView from './GISView';
import DataEnteryOption from './DataEnteryOption';
import EnterOTP from "./EnterOTP";
import EnterLakeLevel from "./EnterLakeLevel";
import DamInspectionDetails from "./DamInspectionDetails";
import DamInspectionDetails1 from "./DamInspectionDetails1";
import DamDashboard from "./DamDashboard";
import InstrumentInspectionDetail from "./InstrumentInspectionDetail";
import GateInspectionDetail from "./GateInspectionDetail";


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
const GateInspectionDetailFormStack = createStackNavigator();
const LoginScreenStack = createStackNavigator();
const ForgetPassStack = createStackNavigator();
const DataEnteryOptionStack = createStackNavigator();
const EnterOTPStack = createStackNavigator();
const DamInspectionDetailsStack = createStackNavigator();
const GateInspectionDetailForm2Stack = createStackNavigator();
const GateInspectionDetailForm3Stack = createStackNavigator();
const GateInspectionDetailForm4Stack = createStackNavigator();
const GateInspectionDetailForm5Stack = createStackNavigator();
const GateInspectionDetailForm6Stack = createStackNavigator();
const DamInspectionDetails1Stack = createStackNavigator();
const EnterLakeLevelStack = createStackNavigator();
const DamDashboardStack = createStackNavigator();
const InstrumentInspectionDetailStack = createStackNavigator();
const GateInspectionDetailStack = createStackNavigator();

const screen = Dimensions.get("window");
// export default MainScreen;
function LogoTitle() {
  return (
    <Image
      style={{ width: '100%', height: 55, }}
      source={require("./Images/pravahlogoios3.png")}
    />
  );
}


export const DashboardScreenStack = ({navigation}) => (

  
  <DashboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
        
      },
     
    }}>
    <DashboardStack.Screen
      name="Dashboard"
      component={DashboardScreen}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"

          // style={{marginRight: 0}}
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50,
          
        },
      }}
    />
  </DashboardStack.Navigator>
);

export const CardListScreenStack = ({navigation}) => (
  <CardListStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </CardListStack.Navigator>
);

export const SigninStackScreen = ({navigation}) => (
  <SigninStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </DamInspectionStack.Navigator>
);


export const DamInspectionCheckListScreen = ({navigation}) => (
  <DamInspectionCheckListStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </DamInspectionCheckListStack.Navigator>
);

export const GateInspectionDetailFormScreen = ({navigation}) => (
  <GateInspectionDetailFormStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailFormStack.Screen
      name="GateInspectionDetailForm"
      component={GateInspectionDetailForm}
      options={{
        title: 'Gate Inspection Detail form',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailFormStack.Navigator>
);

export const DamHealthSafetyScreen = ({navigation}) => (
  <DamHealthSafetyStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </DamHealthSafetyStack.Navigator>
);

export const DamHealthStackScreen = ({navigation}) => (
  <DamHealthStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </DamHealthStack.Navigator>
);

export const LiveStorageDamTankStackScreen = ({navigation}) => (
  <LiveStorageDamTankStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </LiveStorageDamTankStack.Navigator>
);

export const SignupStackScreen = ({navigation}) => (
  <SignupStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
        backgroundColor: '#CB3550',
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
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </ProfileStack.Navigator>
);


export const GISViewStackScreen = ({navigation}) => (
  <GISViewStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </GISViewStack.Navigator>
);

export const LoginScreenStackScreen = ({navigation}) => (
  <LoginScreenStack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#CB3550',
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
      backgroundColor: '#CB3550',
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
        backgroundColor: '#CB3550',
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
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />  
  </DataEnteryOptionStack.Navigator>
);

export const EnterOTPStackScreen = ({navigation}) => (
  <EnterOTPStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
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
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </EnterOTPStack.Navigator>
);

export const DamInspectionDetailsStackScreen = ({navigation}) => (
  <DamInspectionDetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
     
    }}>
    <DamInspectionDetailsStack.Screen name="DamInspectionDetails"
     component={DamInspectionDetails}
     options={{
      headerTitle: props => <LogoTitle {...props} />
      ,
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </DamInspectionDetailsStack.Navigator>
);

export const DamInspectionDetails1StackScreen = ({navigation}) => (
  <DamInspectionDetails1Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
     
    }}>
    <DamInspectionDetails1Stack.Screen name="DamInspectionDetails1"
     component={DamInspectionDetails1}
     options={{
      headerTitle: props => <LogoTitle {...props} />
      ,
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#CB3550"
          onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </DamInspectionDetails1Stack.Navigator>
);

export const GateInspectionDetailForm2Screen = ({navigation}) => (
  <GateInspectionDetailForm2Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailForm2Stack.Screen
      name="GateInspectionDetailForm2"
      component={GateInspectionDetailForm2}
      options={{
        title: 'Gate Inspection Detail 2',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailForm2Stack.Navigator>
);

export const GateInspectionDetailForm3Screen = ({navigation}) => (
  <GateInspectionDetailForm3Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailForm3Stack.Screen
      name="GateInspectionDetailForm3"
      component={GateInspectionDetailForm3}
      options={{
        title: 'Gate Inspection Detail 3',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailForm3Stack.Navigator>
);

export const GateInspectionDetailForm4Screen = ({navigation}) => (
  <GateInspectionDetailForm4Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailForm4Stack.Screen
      name="GateInspectionDetailForm4"
      component={GateInspectionDetailForm4}
      options={{
        title: 'Gate Inspection Detail 4',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailForm4Stack.Navigator>
);
export const GateInspectionDetailForm5Screen = ({navigation}) => (
  <GateInspectionDetailForm5Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailForm5Stack.Screen
      name="GateInspectionDetailForm5"
      component={GateInspectionDetailForm5}
      options={{
        title: 'Gate Inspection Detail 5',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailForm5Stack.Navigator>
);

export const GateInspectionDetailForm6Screen = ({navigation}) => (
  <GateInspectionDetailForm6Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailForm6Stack.Screen
      name="GateInspectionDetailForm6"
      component={GateInspectionDetailForm6}
      options={{
        title: 'Gate Inspection Detail 6',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailForm6Stack.Navigator>
);
export const EnterLakeLevelScreen = ({navigation}) => (
  <EnterLakeLevelStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <EnterLakeLevelStack.Screen
      name="EnterLakeLevel"
      component={EnterLakeLevel}
      options={{
        title: 'EnterLakeLevel',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </EnterLakeLevelStack.Navigator>
);

export const DamDashboardScreen = ({navigation}) => (
  <DamDashboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <DamDashboardStack.Screen
      name="DamDashboard"
      component={DamDashboard}
      options={{
        title: 'DamDashboard',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </DamDashboardStack.Navigator>
);
export const InstrumentInspectionDetailScreen = ({navigation}) => (
  <InstrumentInspectionDetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <InstrumentInspectionDetailStack.Screen
      name="InstrumentInspectionDetail"
      component={InstrumentInspectionDetail}
      options={{
        title: 'InstrumentInspectionDetail',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </InstrumentInspectionDetailStack.Navigator>
);

export const GateInspectionDetailScreen = ({navigation}) => (
  <GateInspectionDetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#CB3550',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        //   marginLeft:150,
        fontWeight: 'bold',
      },
    }}>
    <GateInspectionDetailStack.Screen
      name="GateInspectionDetail"
      component={GateInspectionDetail}
      options={{
        title: 'Gate Inspection Detail ',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#CB3550"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </GateInspectionDetailStack.Navigator>
);