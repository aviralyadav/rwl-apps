import React from 'react';
import {Text,View,Image, Dimensions } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import DashboardScreen from './Dashboard';
import CardList from './CardList';
import Signin from './Signin';
import NewDamChecklist1 from './NewDamChecklist1';
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
import NewDamChecklist2 from './NewDamChecklist2';
import NewDamChecklist3 from './NewDamChecklist3';
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
import EnterRainfall from "./EnterRainfall";
import EnterEvaporation from "./EnterEvaporation";
import EnterDischargeLevel  from "./EnterDischargeLevel";

const DashboardStack = createStackNavigator();
const CardListStack = createStackNavigator();
const SigninStack = createStackNavigator();
const DamInspectionStack = createStackNavigator();
const DamHealthSafetyStack = createStackNavigator();
const DamHealthStack = createStackNavigator();
const LiveStorageDamTankStack = createStackNavigator();
const SignupStack = createStackNavigator();
const NewDamChecklist1Stack = createStackNavigator();
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
const EnterRainfallStack = createStackNavigator();
const EnterEvaporationStack = createStackNavigator();
const EnterDischargeLevelStack = createStackNavigator();
const NewDamChecklist2Stack = createStackNavigator();
const NewDamChecklist3Stack = createStackNavigator();

const screen = Dimensions.get("window");
// export default MainScreen;
function LogoTitle() {
  return (
    <Image
      style={{ width: '100%', height: 55, }}
      source={require("./Images/pravahlogoios5.png")}
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
        headerTitle: props => <LogoTitle {...props} />,
        
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
        fontSize:23
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        marginLeft: 150,
        fontWeight: 'bold',
        fontSize:23
      },
    }}>
    <SignupStack.Screen name="Signup" component={Signup} />
  </SignupStack.Navigator>
);

export const NewDamChecklist1StackScreen = ({navigation}) => (
  <NewDamChecklist1Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <NewDamChecklist1Stack.Screen name="NewDamChecklist1"
     component={NewDamChecklist1}
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
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </NewDamChecklist1Stack.Navigator>
);

export const NewDamChecklist2StackScreen = ({navigation}) => (
  <NewDamChecklist2Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <NewDamChecklist2Stack.Screen name="NewDamChecklist2"
     component={NewDamChecklist2}
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
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </NewDamChecklist2Stack.Navigator>
);

export const NewDamChecklist3StackScreen = ({navigation}) => (
  <NewDamChecklist3Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <NewDamChecklist3Stack.Screen name="NewDamChecklist3"
     component={NewDamChecklist3}
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
      headerTitleContainerStyle: {
        right: 0,
        left:50
      },
    }}
  />
     
  </NewDamChecklist3Stack.Navigator>
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
      backgroundColor: '#dc2430',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      marginLeft: 150,
      fontWeight: 'bold',
      fontSize:23
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
      marginLeft: 105,
      fontWeight: 'bold',
      fontSize:23
    },
  }}>
    <ForgetPassStack.Screen
     name="Forget Password"
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
        backgroundColor: '#dc2430',
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
          backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
          backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
      },
      headerTintColor: '#fff',
     
    }}>
    <GateInspectionDetailForm2Stack.Screen
      name="GateInspectionDetailForm2"
      component={GateInspectionDetailForm2}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
export const EnterRainfallScreen = ({navigation}) => (
  <EnterRainfallStack.Navigator
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
    <EnterRainfallStack.Screen
      name="EnterRainfall"
      component={EnterRainfall}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </EnterRainfallStack.Navigator>
);
export const EnterEvaporationScreen = ({navigation}) => (
  <EnterEvaporationStack.Navigator
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
    <EnterEvaporationStack.Screen
      name="EnterEvaporation"
      component={EnterEvaporation}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </EnterEvaporationStack.Navigator>
);
export const EnterDischargeLevelScreen = ({navigation}) => (
  <EnterDischargeLevelStack.Navigator
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
    <EnterDischargeLevelStack.Screen
      name="EnterDischargeLevel"
      component={EnterDischargeLevel}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerTitleContainerStyle: {
          right: 0,
          left:50
        },
      }}
    />
  </EnterDischargeLevelStack.Navigator>
);

export const DamDashboardScreen = ({navigation}) => (
  <DamDashboardStack.Navigator
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
    <DamDashboardStack.Screen
      name="DamDashboard"
      component={DamDashboard}
      options={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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
        backgroundColor: '#dc2430',
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
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#dc2430"
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