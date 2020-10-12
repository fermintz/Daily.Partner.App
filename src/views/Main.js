import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight ,FlatList,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import OrderCard from '../components/OrderCard'

export default class Main extends React.Component {

  modal = React.createRef();
  state = { select: 1 };

  render() {

    const orderData = [
      {
        orderDate: '2020.06.23.12:34',
        userDate: '2020.06.30 오전',
        userAddress: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
        userMassage: '비닐봉지가 없어요 오실때 가져다 주세요!',
        door:'*1034',
      },
      {
        orderDate: '2020.06.23.12:34',
        userDate: '2020.06.30 오전',
        userAddress: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
        userMassage: '비닐봉지가 없어요 오실때 가져다 주세요!',
        door:'*1034',
      },
      {
        orderDate: '2020.06.23.12:34',
        userDate: '2020.06.30 오전',
        userAddress: '부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호',
        userMassage: '비닐봉지가 없어요 오실때 가져다 주세요!',
        door:'*1034',
      },
    ]

    return (

      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:60,backgroundColor:'#01a1dd'}}>
          <Text style={{fontSize:16,fontWeight:'bold',marginLeft:10,color:'#fff'}}>데일리세탁 파트너</Text>
          <TouchableHighlight
            underlayColor="#0091C8"
            style={{width:60,height:60,alignItems:'center',justifyContent:'center'}}
            onPress={()=> this.props.navigation.openDrawer()}
          >
              <Icon name="menu" size={28} color={'#fff'}></Icon>
          </TouchableHighlight>
        </View>

        <FlatList 
          data={orderData}
          contentContainerStyle={{paddingBottom:60}}
          ListHeaderComponent={({item})=>
          <>
            <View style={{backgroundColor:'#fff'}}>
              <View style={{flexDirection:'row',borderBottomWidth:1,borderColor:'#e2e2e2'}}>
                <TouchableHighlight 
                  style={{flex:2,borderRadius:4,paddingHorizontal:15,paddingVertical:10,}}
                  underlayColor={'#f8f8f8'}
                  onPress={()=>{}}
                >
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign:'left',fontSize:14,}}>신규주문</Text>
                    <View style={{marginTop:10,}}>
                      <Text style={{fontSize:24,width:60,height:60,backgroundColor:'rgba(1,161,221,0.1)',textAlign:'center',textAlignVertical:'center',borderRadius:40,color:'#01a1dd',fontWeight:'bold'}}>
                        07
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <View style={{flex:4,borderLeftWidth:1,borderColor:'#e2e2e2',padding:10,}}>
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber, styles.stateNumberActive]}>1</Text>
                        <Text style={styles.stateName}>주문확인</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber, styles.stateNumberActive]}>5</Text>
                        <Text style={styles.stateName}>수거대기</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber,]}>0</Text>
                        <Text style={styles.stateName}>검수대기</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber,]}>0</Text>
                        <Text style={styles.stateName}>결제/완료</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber, styles.stateNumberActive]}>1</Text>
                        <Text style={styles.stateName}>추가결제</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'rgba(1,161,221,0.1)'}
                      style={styles.stateItemBtn}
                      onPress={()=>{}}
                    >
                      <View style={styles.stateItem}>
                        <Text style={[styles.stateNumber,]}>0</Text>
                        <Text style={styles.stateName}>배송대기</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View> 
            </View>

            <View style={styles.listStateBar}>
              <Text style={styles.listTitle}>주문확인</Text>
              <View style={styles.listAlignBtns}>
                <TouchableOpacity style={styles.listAlignBtn}>
                  <Text style={styles.listAlignBtnText}>최신순</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.listAlignBtn}>
                  <Text style={styles.listAlignBtnText}>과거순</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </>
          }
          style={{paddingBottom:10,marginBottom:10,}}
          renderItem={({item})=>
            <OrderCard data={item} navigation={this.props.navigation}/>
          }
          keyExtractor={(item,index) => index}
        />

      </View>


    );
  }
}


const styles = StyleSheet.create({
  stateItemBtn:{
    flex:1,borderRadius:4
  },

  stateItem:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:5,
  },

  stateNumber:{
    fontSize:18,
    marginBottom:5,
    color:'#aaa'
  },

  stateNumberActive:{
    color:'#01a1dd'
  },

  stateName:{
    fontSize:11,
  },

  listStateBar:{
    marginHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:15,
  },

  listTitle:{
    color:'#494949',
    fontWeight:'bold',
    fontSize:15,
  },
  listAlignBtns:{
    flexDirection:'row',
    alignItems:'center'
  },
  listAlignBtn:{
    height:26,
    justifyContent:'center',
    marginLeft:5,
    borderWidth:1,
    borderColor:'#a2a2a2',
    paddingHorizontal:10,
    borderRadius:4,
  },
  listAlignBtnText:{
    fontSize:12,
  }
  
})