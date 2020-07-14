import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Image,
} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

export default class LiveStorageDamTank extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          height: 510,
          padding: 10,
          margin: 2,
        }}>
        <Container>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: 'black',
                marginTop: 10,
              }}>
              Live Storage Dam Tank
            </Text>
          </View>
          <ScrollView>
            <Content>
              <Card>
                <CardItem>
                  <Body>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 15,
                      }}>
                      <Text>Dam1</Text>
                      <Text>Live Storage</Text>
                      <Text
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 45,
                          width: 60,
                          height: 30,
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingVertical: 5,
                        }}>
                        Major
                      </Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Last Updated Dtae: 27-05-2020, 5:20PM</Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Current Water Level: 50m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{
                          backgroundColor: 'skyblue',
                          width: '50%',
                        }}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Max Storage Level: 150m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{backgroundColor: 'red', width: '50%'}}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 15,
                      }}>
                      <Text>Dam1</Text>
                      <Text>Live Storage</Text>
                      <Text
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 45,
                          width: 60,
                          height: 30,
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingVertical: 5,
                        }}>
                        Minor
                      </Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Last Updated Dtae: 27-05-2020, 5:20PM</Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Current Water Level: 50m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{
                          backgroundColor: 'skyblue',
                          width: '50%',
                        }}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Max Storage Level: 150m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{backgroundColor: 'red', width: '50%'}}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 15,
                      }}>
                      <Text>Dam1</Text>
                      <Text>Live Storage</Text>
                      <Text
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 45,
                          width: 60,
                          height: 30,
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingVertical: 5,
                        }}>
                        Major
                      </Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Last Updated Dtae: 27-05-2020, 5:20PM</Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Current Water Level: 50m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{
                          backgroundColor: 'skyblue',
                          width: '50%',
                        }}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Max Storage Level: 150m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{backgroundColor: 'red', width: '50%'}}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Body>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 15,
                      }}>
                      <Text>Dam1</Text>
                      <Text>Live Storage</Text>
                      <Text
                        style={{
                          backgroundColor: 'red',
                          borderRadius: 45,
                          width: 60,
                          height: 30,
                          paddingLeft: 10,
                          paddingRight: 10,
                          paddingVertical: 5,
                        }}>
                        Minor
                      </Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Last Updated Dtae: 27-05-2020, 5:20PM</Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Current Water Level: 50m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{
                          backgroundColor: 'skyblue',
                          width: '50%',
                        }}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                    <View style={{marginBottom: 15}}>
                      <Text>Max Storage Level: 150m</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 15}}>
                      <Text
                        style={{backgroundColor: 'red', width: '50%'}}></Text>
                      <Text
                        style={{backgroundColor: 'grey', width: '50%'}}></Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </ScrollView>
        </Container>
      </View>
    );
  }
}
