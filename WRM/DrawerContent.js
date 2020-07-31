import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';

// import{ AuthContext } from '../components/context';
import files from './Images/base64';

export const DrawerContent = (props) => {

    const paperTheme = useTheme();

    const shareToFrnds = async () => {
        const shareOptions = {
            message: 'This is the message to share',
            // url: files.image1
            // urls: [files.image1, files.image2]   // should be in base 64 format
            url: files.samplePdf
        }
        try {
            const shareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(shareResponse));
        } catch(err) {
            console.log('Error', err)
        }
    }

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 5}}>
                        <Image
                source={require('./Images/pravahlogoios.png')}
                style={styles.logo}
                resizeMode="stretch"
              />
                            <View >
                                
                                <Caption></Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Dashboard')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="share" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Share"
                            onPress={shareToFrnds}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Card List"
                            onPress={() => {props.navigation.navigate('CardList')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Dam Inspection"
                            onPress={() => {props.navigation.navigate('DamInspection')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Dam Inspection CheckList"
                            onPress={() => {props.navigation.navigate('DamInspectionCheckList')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Dam Health"
                            onPress={() => {props.navigation.navigate('DamHealth')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Dam Health Safety"
                            onPress={() => {props.navigation.navigate('DamHealthSafety')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form2"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm2')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form3"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm3')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form4"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm4')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form5"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm5')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gate Inspection Detail Form6"
                            onPress={() => {props.navigation.navigate('GateInspectionDetailForm6')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Live Storage Dam Tank"
                            onPress={() => {props.navigation.navigate('LiveStorageDamTank')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sign up"
                            onPress={() => {props.navigation.navigate('Signup')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sign In"
                            onPress={() => {props.navigation.navigate('Signin')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="GISView"
                            onPress={() => {props.navigation.navigate('GISView')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="LoginScreen"
                            onPress={() => {props.navigation.navigate('LoginScreen')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="ForgetPass"
                            onPress={() => {props.navigation.navigate('ForgetPass')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="DataEnteryOption"
                            onPress={() => {props.navigation.navigate('DataEnteryOption')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="EnterOTP"
                            onPress={() => {props.navigation.navigate('EnterOTP')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="DamInspectionDetails"
                            onPress={() => {props.navigation.navigate('DamInspectionDetails')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="DamInspectionDetails1"
                            onPress={() => {props.navigation.navigate('DamInspectionDetails1')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="EnterLakeLevel"
                            onPress={() => {props.navigation.navigate('EnterLakeLevel')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="EnterRainfall"
                            onPress={() => {props.navigation.navigate('EnterRainfall')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="EnterEvaporation"
                            onPress={() => {props.navigation.navigate('EnterEvaporation')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="EnterDischargeLevel"
                            onPress={() => {props.navigation.navigate('EnterDischargeLevel')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="DamDashboard"
                            onPress={() => {props.navigation.navigate('DamDashboard')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="InstrumentInspectionDetail"
                            onPress={() => {props.navigation.navigate('InstrumentInspectionDetail')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="GateInspectionDetail"
                            onPress={() => {props.navigation.navigate('GateInspectionDetail')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 5,
    },
    // title: {
    //   fontSize: 16,
    //   marginTop: 3,
    //   fontWeight: 'bold',
    // },
    // caption: {
    //   fontSize: 14,
    //   lineHeight: 14,
    // },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 25,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    logo: {height:80, width:"90%"},
  });
