import React from 'react';
import {View, Text, StyleSheet,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SubHeader extends React.Component {
  goBack() {
    this.props.navigation?.goBack();
  }

  render() {

    const {navigation} = this.props

    return (
      <View style={{height:60,flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderBottomWidth:1,borderColor:'#e2e2e2'}}>
        <TouchableHighlight
          onPress={()=>{navigation.navigate('Main')}}
          underlayColor={'#f8f8f8'}
          style={{width:60,height:60,justifyContent:'center',alignItems:'center'}}
        >
          <Icon name="arrow-left" size={24}/>
        </TouchableHighlight>
        <Text style={{fontSize:18}}>전체주문내역</Text>
      </View>
    );
  }
}
