// In App.js in a new project

import  React ,{useEffect} from 'react';
import {View,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import { DrawerContent } from './Screen/DrawerContent';

import MainTabScreen from './Screen/MainTabScreen';
import BookmarkScreen from './Screen/BookmarkScreen';
import SettingScreen from './Screen/SettingScreen';
import SupportScreen from './Screen/SupportScreen';

import { AuthContext } from './components/context';

import RootStackScreen from './Screen/RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';


const Drawer = createDrawerNavigator();


const  App = () => {

  // const [isLoading, setIsLoading]= React.useState(true);
  //  const [userToken,setUserToken] = React.useState(null);

   const initialLoginState = {
    isLoading: true,
    userName:null,
    userToken:null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
           userToken: action.token,
          isLoading: false,
        };
    }
  };

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(()=>({
      signIn:async(userName,password) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        let userToken;
        userToken = null;

        if(userName == 'user' && password == 'pass') {
          userToken = 'dfgdfg';
        //  console.log("sdf2323ds");
          try{
            
          //  console.log("sdfds");
            await AsyncStorage.setItem('userToken', userToken);
            console.log(e);
          }catch(e){
            console.log("fwegweg");
          }
        }
      //  console.log("sdweew3r23rfds");
       // console.log('user token:',userToken);
        dispatch({type:'LOGIN',id:userName, token:userToken});
      },
      signOut:async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try{
          await AsyncStorage.removeItem('userToken');
        }catch(e){
          console.log(e);
        }

        dispatch({type:'LOGOUT'});
      },
      signUp : () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
    }),[]);

  useEffect(()=>{
    setTimeout(async()=>{
     // setIsLoading(false);
     let userToken;
     userToken= null;
     try{
      userToken = await AsyncStorage.getItem('userToken');
    }catch(e){
      console.log(e);
    }
   //  console.log('user token:',userToken);
     dispatch({type:'REGISTER', token:userToken});
    },1000);
  },[]);


    if( loginState.isLoading ) {
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size = "large"/>
        </View>
      );
    }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}

export default App;