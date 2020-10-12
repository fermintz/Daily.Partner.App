import React from 'react'
import {View,Text, TouchableOpacity, StyleSheet, TouchableHighlight} from 'react-native'
import IconAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class OrderCard extends React.Component{

  render(){

    const item = this.props.data;
    const navigation = this.props.navigation;

    return(
      <TouchableOpacity 
        style={styles.orderItem}
        onPress={()=> navigation.navigate('orderDetail')}
      >
        <View>
          <View style={styles.orderItemHead}>
            <Text style={{fontWeight:'bold',fontSize:12,color:'#01a1dd'}}>2020.10.08 오전 수거희망</Text>
            <Text style={{fontSize:12,}}>주문확인</Text>
          </View>
          <View style={styles.orderItemBody}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={{flex:1,paddingRight:20,}}>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                  <Text style={{fontSize:14,}}>박수민</Text>
                  <Text style={{color:'#888',fontSize:12,marginLeft:10}}>010-8525-4561</Text>
                </View>
                <Text style={{marginTop:8,fontSize:12}}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
              </View>
              <TouchableHighlight
                underlayColor={'#2EA20C'}
                style={{width:40,height:40,justifyContent:'center',alignItems:'center',backgroundColor:'#33B80C',borderRadius:20}}
                onPress={()=>{}}
              >
                <IconAwesome name="phone" size={20} color={'#fff'}/>
              </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,}}>
              <Text style={{width:70,color:'#888',fontSize:12}}>출입문정보</Text>
              <Text style={{flex:1,color:'#E13D7A',fontSize:12}}>*1034 입니다</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'flex-start',padding:15,backgroundColor:'#f8f8f8',borderRadius:4,marginTop:15,}}>
              <Icon name="message-outline" size={20} style={{width:40,}}/>
              <Text style={{flex:1,fontSize:12,}}>비닐봉지가 없어요 오실때 가져다주세요! 비닐봉지가 없어요 오실때 가져다주세요!</Text>
            </View>
            <View style={{marginTop:5,}}>
              <Text style={{fontSize:11,color:'#888',textAlign:'right'}}>{item.orderDate}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    )
  }
}


const styles = StyleSheet.create({
  orderItem:{
    borderWidth:1,
    borderColor:'#d2d2d2',
    backgroundColor:'#fff',
    marginTop:10,
    marginHorizontal:10,
    borderRadius:4,
  },
  orderItemHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:45,
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
    paddingHorizontal:15,
  },
  orderItemBody:{
    padding:15,
  },
})