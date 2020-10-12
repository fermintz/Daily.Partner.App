import React,{useState} from 'react';
import {View, Text, TextInput, StyleSheet, FlatList,  TouchableHighlight, TouchableOpacity, Picker} from 'react-native';
import {DatePicker} from 'native-base';
import OrderCard from '../components/OrderCard';
import SubHeader from '../components/SubHeader';
import moment from 'moment';

export default class OrderList extends React.Component{

  state = { select: 1 };

  render(){
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
    ]

    const testDate = selectValue => {
      console.log(moment(selectValue).format('YYYY-MM-DD'))
    }

    return(
      <View>
        <SubHeader {...this.props}/>

        <FlatList 
          data={orderData}
          contentContainerStyle={{paddingBottom:60}}
          ListHeaderComponent={({item})=>
          <View>
            <View style={styles.searchOpt}>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>주문상태</Text>
                <View style={styles.selectBox}>
                  <Picker
                    selectedValue={this.state.select}
                    style={styles.picker}
                    prompt="정렬선택"
                    textStyle={{fontSize:11}}
                    onValueChange={(itemValue, itemIndex) => this.setState({state:{select:itemValue}})}
                  >
                    <Picker.Item label="전체" value={1}/>
                    <Picker.Item label="주문확인" value={2}/>
                    <Picker.Item label="수거완료" value={3}/>
                    <Picker.Item label="작업완료" value={4}/>
                    <Picker.Item label="검수완료" value={5}/>
                    <Picker.Item label="배송완료" value={6}/>
                  </Picker>
                </View>
              </View>
              <View style={styles.searchItem}>
                <Text style={styles.searchItemLabel}>날짜</Text>
                <View style={styles.datePickers}>
                  <View style={styles.datePicker}>
                    <DatePicker
                      defaultDate={new Date()}
                      locale={"ko"}
                      textStyle={{fontSize:13,textAlign:'center',}}
                      placeHolderText="날짜선택"
                      placeHolderTextStyle={{fontSize:13,textAlign:'center',color:'#888'}}
                      onDateChange={testDate}
                    />
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text>~</Text>
                  </View>
                  <View style={styles.datePicker}>
                    <DatePicker
                      defaultDate={new Date()}
                      locale={"ko"}
                      textStyle={{fontSize:13,textAlign:'center',}}
                      placeHolderText="날짜선택"
                      placeHolderTextStyle={{fontSize:13,textAlign:'center',color:'#888'}}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.searchItem,{marginBottom:0}]}>
                <Text style={styles.searchItemLabel}>주문자</Text>
                <TextInput
                  style={styles.searchItemInput}
                  placeholder="주문자명을 입력해주세요"
                />
              </View>

              <View style={styles.searchBtns}>
                <TouchableHighlight
                  style={styles.resetBtn}
                  underlayColor={'#f2f2f2'}
                  onPress={()=>{}}
                >
                  <Text style={styles.resetBtnText}>초기화</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.searchBtn}
                  underlayColor={'#191919'}
                  onPress={()=>{}}
                >
                  <Text style={styles.searchBtnText}>검색</Text>
                </TouchableHighlight>
              </View>
              
              
            </View>

            <View style={styles.listStateBar}>
              <Text style={styles.listTitle}>검색결과(2)</Text>
              <View style={styles.listAlignBtns}>
                <TouchableOpacity style={styles.listAlignBtn}>
                  <Text style={styles.listAlignBtnText}>최신순</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.listAlignBtn}>
                  <Text style={styles.listAlignBtnText}>과거순</Text>
                </TouchableOpacity>
              </View>
            </View>   
          </View>
          }
          style={{paddingBottom:10,marginBottom:10,}}
          renderItem={({item})=>
            <OrderCard data={item} navigation={this.props.navigation}/>
            }
            keyExtractor={(item,index) => index}
          />
        </View>


    )
  }
}

const styles = StyleSheet.create({
  stateItemBtn:{
    flex:1,borderRadius:4
  },
  stateItem:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10,
  },
  stateNumber:{
    fontSize:24,
    marginBottom:5,
    color:'#aaa'
  },
  stateNumberActive:{
    color:'#01a1dd'
  },
  stateName:{
    fontSize:12,
  },
  orderItem:{
    borderWidth:1,
    borderColor:'#d2d2d2',
    backgroundColor:'#fff',
    paddingHorizontal:15,
    marginTop:10,
    marginHorizontal:10,
    borderRadius:4,
  },
  orderItemHead:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:50,
    borderBottomWidth:1,
    borderColor:'#e2e2e2'
  },
  orderItemBody:{
    paddingVertical:15,
  },

  searchOpt:{
    backgroundColor:'#fff',
    paddingVertical:15,
    paddingHorizontal:10,
    alignItems:'flex-end',
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
  },

  searchItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:8,
    borderWidth:1,
    borderColor:'#d2d2d2',
    borderRadius:4,
  },

  searchItemLabel:{
    width:100,
    borderRightWidth:1,
    borderColor:'#e2e2e2',
    paddingHorizontal:15,
  },
  searchItemInput:{
    flex:1,
    height:40,
    paddingHorizontal:15,
    textAlign:'right'
  },

  searchBtns:{
    flexDirection:'row',
    alignItems:'center'
  },
  searchBtn:{
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#292929',
    borderRadius:4,
    marginTop:10,
    marginLeft:10,
  },

  resetBtn:{
    width:80,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:4,
    marginTop:10,
  },

  searchBtnText:{
    color:'#fff',
  },

  resetBtnText:{
    color:'#292929'
  },

  selectBox:{
    flex:1,
    height:40,
    borderRadius:4,
    borderColor:'#d2d2d2',
    padding:0
  },

  picker:{
    paddingRight:0,
    paddingLeft:0,
    flex:1,
    height:24,
    transform:[
      {scaleX:0.95},
      {scaleY:0.95},
    ]
  },

  datePickers:{
    flex:1,
    flexDirection:'row',
  },

  datePicker:{
    flex:1,
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