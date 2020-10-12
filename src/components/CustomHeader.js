import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomHeader extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={{color:'#fff',fontSize:18,marginLeft:20,fontWeight:'bold'}}>데일리세탁 파트너</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:60,
    backgroundColor:'#01a1dd',
  },
})