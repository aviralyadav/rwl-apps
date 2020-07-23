/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// import CustomSidebarMenu from './CustomSidebarMenu';
import {DrawerContent} from './DrawerContent';
import {
  CardListScreenStack,
  DashboardScreenStack,
  SigninStackScreen,
  SignupStackScreen,
  DamHealthSafetyScreen,
  DamInspectionScreen,
  DamHealthStackScreen,
  LiveStorageDamTankStackScreen,
  DamInspectionCheckListScreen,
  ProfileStackScreen,
  GISViewStackScreen,
  ForgetPassStackScreen,
  LoginScreenStackScreen,
  DataEnteryOptionStackScreen,
  EnterOTPStackScreen,
  DamInspectionDetailsStackScreen
} from './MainScreen';
const Drawer = createDrawerNavigator();

class App extends React.Component {
  render (){
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen
            name="DashboardScreenStack"
            component={DashboardScreenStack}
          />
          <Drawer.Screen name="CardList" component={CardListScreenStack} />
          <Drawer.Screen name="Signin" component={SigninStackScreen} />
          <Drawer.Screen name="DamHealth" component={DamHealthStackScreen} />
          <Drawer.Screen name="DamInspection" component={DamInspectionScreen} />
          <Drawer.Screen
            name="DamInspectionCheckList"
            component={DamInspectionCheckListScreen}
          />
          <Drawer.Screen
            name="DamHealthSafety"
            component={DamHealthSafetyScreen}
          />
          <Drawer.Screen
            name="LiveStorageDamTank"
            component={LiveStorageDamTankStackScreen}
          />
          <Drawer.Screen name="Signup" component={SignupStackScreen} />
          <Drawer.Screen name="Profile" component={ProfileStackScreen} />
          <Drawer.Screen name="LoginScreen" component={LoginScreenStackScreen} />
          <Drawer.Screen
            name="GISView"
            component={GISViewStackScreen}
          />
          <Drawer.Screen
            name="ForgetPass"
            component={ForgetPassStackScreen}
          />
           <Drawer.Screen
            name="DataEnteryOption"
            component={DataEnteryOptionStackScreen}
          />
          
          <Drawer.Screen
            name="EnterOTP"
            component={EnterOTPStackScreen}
          />
           <Drawer.Screen
            name="DamInspectionDetails"
            component={DamInspectionDetailsStackScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
}

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
