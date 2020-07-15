import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem,  Body,Image } from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

import Footer from './Footer';
export default class CardList extends Component {
  render() {
    return (
        <View style={styles.dashboardContainer}>
        <View
               style={{
                flex:1,
                backgroundColor: "white",
                 flexDirection: "column",
                 justifyContent: "flex-start",
                 alignItems: "stretch",
                 height: 510,
                 padding: 10,
                 margin:2
                
                  }}
                         
               > 
      <Container>
      <View>
        

<Text style={{fontSize:20, textAlign:"center", color:'black',marginTop:10}}>
    CheckListData
</Text>
</View>
        <ScrollView>
        <Content>
          <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
         <Card>
            
            <CardItem>
              <Body>
                  <View>
                  <Text>
                      Description : Lorem ipsum dolor sit amet
                  </Text>
                  </View>
                  <View>
                <Text>
                     Location : Pune
                </Text>  
                </View>
                <View>
                    <Text>
                     Image : 
                    </Text>
                </View>
                <View>
                    <Text>
                    Remark : The Dam is very good for flow water
                    </Text>
                </View>
              </Body>
            </CardItem>
            
         </Card>
        </Content>
        </ScrollView>
        
      </Container>
     
      </View>
      <View>
                            <Footer/>
                        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1
}
})