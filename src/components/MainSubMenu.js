import React from 'react';
import { Text,View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MainSubMenu extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <>
        <View style={{backgroundColor:'#242424',alignItems:'flex-start',justifyContent:'flex-start',borderBottomWidth:1,borderColor:'rgba(0,0,0,0.5)',padding:20,}}>
          <Text style={{color:'#fff',color:'#aaa'}}>안녕하세요</Text>
          <Text style={{color:'#fff',fontSize:24,marginTop:2,}}>박수민님</Text>
          <TouchableHighlight
            onPress={()=>{}}
            underlayColor={'#292929'}
            style={{borderRadius:4,marginTop:10,overflow:'hidden'}}
          >
            <View style={{paddingHorizontal:15,height:24,justifyContent:'center',alignItems:'center',backgroundColor:'#191919'}}>
              <Text style={{color:'#fff',fontSize:12}}>Loguut</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=>{}}
            underlayColor={'#292929'}
            style={{position:'absolute',top:10,right:10,overflow:'hidden',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}
          >
            <Icon name="cog" size={30} color={'#fff'}/>
          </TouchableHighlight>
        </View>
        <View style={{paddingVertical:15,backgroundColor:'#292929',flex:1,borderTopWidth:1,borderColor:'rgba(255,255,255,0.1)'}}>
          <TouchableHighlight
            onPress={()=>{navigation.navigate('Main')}}
            underlayColor={'#191919'}
          >
            <View style={{height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,}}>
              <Text style={{fontSize:15,color:'#fff'}}>메인으로</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={()=>{navigation.navigate('orderList')}}
            underlayColor={'#191919'}
          >
            <View style={{height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,}}>
              <Text style={{fontSize:15,color:'#fff'}}>전체주문목록</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=>{navigation.navigate('Main')}}
            underlayColor={'#191919'}
          >
            <View style={{height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,}}>
              <Text style={{fontSize:15,color:'#fff'}}>취소/환불내역</Text>
            </View>
          </TouchableHighlight>
        </View>

        
      </>
    )
  }
}