import React, {Component} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import Footer from './Footer';

export default class DamInspectionDetail3 extends Component {
  constructor() {
      super();
      this.state = {
        data: [
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
          {
            Gate: 'lorem ipsum description data',
            Observations: 'Pune 121 maharastra 80219',
            Category:"Goods",
            remark: 'Product is very good at all',
          },
        ],
      };
  }
  render() {
      console.log(this.state)
    return (
      <View style={styles.damCheckListContainer}>
        <View style={styles.viewArea}>
          <ScrollView>
          <ScrollView  horizontal={true}>
              <View>
            <View style={styles.header}>
              <Text style={styles.headingText}>Gate Inspection Detail</Text>
              <Text style={styles.headingText}>Observations</Text>
              <Text style={styles.headingText}>Category</Text>
              <Text style={styles.headingText}>Remark</Text>
            </View>
            {this.state.data &&
              this.state.data.map((item, i) => (
                
                  <View style={styles.contentArea} key={i}>
                    <Text style={styles.contentText}>{item.Gate}</Text>
                    <Text style={styles.contentText}>{item.Observations}</Text>
                    <Text style={styles.contentText}>{item.Category}</Text>
                    {/* <Text> */}
                    {/* <Text style={styles.contentText}>{'IMAGE'}</Text> */}
                    {/* {/* <View> */}
                    
                      {/* <Image source={item.image} style={styles.image} /> */}
                    {/* </Text> */}
                    <Text style={styles.contentText}>{item.remark}</Text>
                  </View>
                )
              )}
              {/* <View style={styles.buttonView}>
                <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Save & Next
            </Text>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback>
            <Text style = {styles.buttonText}>
               Clear
            </Text>
         </TouchableWithoutFeedback>
                </View> */}
              </View>
              
          </ScrollView>
          </ScrollView>
        </View>
        {/* <View>
          <Footer />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  damCheckListContainer: {
    flex: 1,
  },
  viewArea: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 700,
    padding: 10,
    margin: 1,
  },
  header: {
    
    flexDirection: 'row',
    width: 419,
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    height: 60,
    padding: 4,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 15,
    fontWeight: '700',
    width: '25%'
  },
  contentText: {
      fontWeight: 'normal',
      fontSize: 15,
      width: '25%',
      padding: 5
  },
  contentArea: {
      flexDirection:'row',
      justifyContent:'space-between',
      width: 385,
      alignItems: 'center',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingBottom: 5,
      paddingTop: 5
  },
  image: {
      width: 70,
      height: 65
  },
  buttonView: {
    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', 
    paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2
  },
  buttonText: {
    marginTop: 5,
    borderWidth: 1,
    // padding: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderColor: 'black',
    backgroundColor: 'red',
    color: '#fff',
    fontSize: 18
  },
});
