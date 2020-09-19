import React, {Component} from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Dimensions,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './Footer';

export default class Signup extends Component {
  onPress() {}
  render() {
    return (
      <View style={styles.container}>
    <ScrollView > 
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./Images/2.jpg')}>
          
          <View>
            <View style={styles.logoContainer}>
              <Image
                source={require('./Images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Image
                source={require('./Images/logo-text.png')}
                style={styles.logoText}
                resizeMode="contain"
              />
            </View>
            <View style={styles.signupForm}>
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/User1.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                  style={styles.textInput}
                  placeholder="Enter First Name"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/User1.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Last Name"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/Email.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                keyboardType="email-address"
                  style={styles.textInput}
                  placeholder="Enter Email ID"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/Mobile.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                keyboardType="numeric"
                  style={styles.textInput}
                  placeholder="Enter Mobile Number"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/Userpwd.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                secureTextEntry
                  style={styles.textInput}
                  placeholder="Enter Password"
                  underlineColorAndroid="transparent"
                />
              </View>
              
              <View style={styles.sectionStyle}>
                <Image
                  source={require('./Images/aadhar.png')}
                  style={styles.imageStyle}
                />

                <TextInput
                secureTextEntry
                  style={styles.textInput}
                  placeholder="Enter Aadhaar Number Optional "
                  underlineColorAndroid="transparent"
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 15,
                }}>
                <LinearGradient
                  colors={['#7b4397', '#dc2430']}
                  style={styles.buttonWrapper}>
                  <TouchableWithoutFeedback
                    style={styles.button1}
                    onPress={this.onPress}>
                    <Text style={styles.button}>Next</Text>
                  </TouchableWithoutFeedback>
                </LinearGradient>
                <LinearGradient
                  colors={['#7b4397', '#dc2430']}
                  style={styles.buttonWrapper}>
                  <TouchableWithoutFeedback
                    style={styles.button}
                    onPress={this.onPress}>
                    <Text style={styles.button}>Cancel</Text>
                  </TouchableWithoutFeedback>
                </LinearGradient>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 25,
                }}>
                <Text
                  style={{
                    color: 'yellow',
                    textDecorationLine: 'underline',
                    fontWeight: '600',
                  }}>
                  Cancel
                </Text>
              </View>
            </View>
          </View>
        

          {/* <LinearGradient colors={['#7b4397', '#dc2430']} style={styles.footer}>
            <Text style={styles.footerText}>
              Designed and developed by Mechatronics Systems Pvt. Ltd.
            </Text>
          </LinearGradient> */}
        </ImageBackground>
        </ScrollView > 
        <View>
           <Footer/>
       </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    // height: 1100,
    // width: '100%'
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "orange"
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    // height: '100%',
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    // alignItems: "center",
    // opacity: 0.7,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
    paddingTop: 40,
  },
  logo: {height: 65, width: 70},
  logoText: {height: 70, width: '75%'},
  footer: {
    // backgroundColor: linearGradient('#fdcc52', '#fdc539'),
    padding: 9,
  },
  signupForm: {
    paddingTop: 10,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    borderRadius: 45,
    margin: 10,
  },

  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    marginLeft:10
  },
  textInput: {flex: 1, color: '#000', fontSize: 15, fontWeight: '600'},
  buttonWrapper: {
    alignItems: 'center',
    // flexDirection: 'row',
    width: '35%',
    borderRadius: 30,
    margin:8
  },
  button: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    padding: 12,
  },
};
