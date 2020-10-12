import React from 'react';
import { FlatList } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomModal from '../components/CustomModal';
import SubHeader from '../components/SubHeader';

export default class OrderDetail extends React.Component {
  ConfirmModal = React.createRef();
  PhotoModal = React.createRef();
  InputModal = React.createRef();
  WorkFinish = React.createRef();
  DeliveryFinish = React.createRef();
  CheckConfirm = React.createRef();
  RefundModal = React.createRef();
  TotalRefundModal = React.createRef();

  state = {select: 1};

  workData=[
    {
      workState:true,
      workLabel:'작업확인완료',
      workCompleteDate:'2020.09.20 13:34',
      modalSet:()=> this.ConfirmModal.current.visible(true),
    },
    {
      workState:true,
      workLabel:'수거완료',
      workCompleteDate:'2020.09.20 13:34',
      modalSet:()=> this.PhotoModal.current.visible(true),
    },
    {
      workState:true,
      workLabel:'세탁물확인',
      workCompleteDate:'2020.09.20 13:34',
      modalSet:()=> this.ChrckConfirm.current.visible(true),
    },
    {
      workState:true,
      workLabel:'작업완료',
      workCompleteDate:'2020.09.20 13:34',
      modalSet:()=> this.WorkFinish.current.visible(true),
    },
    {
      workState:false,
      workLabel:'배송완료',
      workCompleteDate:'',
      modalSet:()=> this.DeliveryFinish.current.visible(true),
    }
  ]

  render() {
    return (
      <View style={{paddingBottom: 60}}>
        <SubHeader {...this.props} />

        <ScrollView style={{backgroundColor: '#f8f8f8'}}>

          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>작업처리</Text>
 
            <FlatList
              data={this.workData}
              renderItem={({item, index}) =>
                <TouchableHighlight
                  onPress={item.modalSet}
                  underlayColor={'rgba(1,161,221,0.05)'}
                  style={[styles.workBtn, item.workState ? styles.workDisableBtn : styles.workEnableBtn]}
                  disabled={item.workState}
                >
                  <View style={styles.workBtnInner}>
                    <View style={styles.workBtnLabels}>
                      {item.workState && <Icon name="check" style={styles.workDisableIcon}></Icon>}
                      <Text style={item.workState ? styles.workDisableLabel : styles.workEnableLabel}>{item.workLabel}</Text>
                    </View>
                      {item.workState && <Text style={styles.workDisableDate}>{item.workCompleteDate}</Text>}
                      {!item.workState && <Icon name="arrow-right-circle" style={styles.workEnableIcon}></Icon>}
                  </View>
                </TouchableHighlight>
              }
              keyExtractor={(item, index) => item}
            >
            </FlatList>
     
          </View>

          <View style={styles.sectionBox}>
            <Text
              style={styles.sectionTitle}>
              주문자정보
            </Text>
            <View style={{marginTop:10,}}>
              <View style={styles.userInfoLine}>
                <Text style={styles.userInfoLabel}>수거일시</Text>
                <Text style={styles.userInfoSub}>2020.06.30 오전</Text>
              </View>

              <View style={styles.userInfoLine}>
                <Text style={styles.userInfoLabel}>전화번호</Text>
                <Text style={styles.userInfoSub}>010-8525-4561</Text>
              </View>

              <View style={styles.userInfoLine}>
                <Text style={styles.userInfoLabel}>주소지</Text>
                <Text style={styles.userInfoSub}>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</Text>
              </View>

              <View style={styles.userInfoLine}>
                <Text style={styles.userInfoLabel}>출입문정보</Text>
                <Text style={styles.userInfoSub}>출입문이 없습니다</Text>
              </View>

              <View style={styles.userInfoCall}>
                <Icon name="message-outline" size={18} style={{width:40,}}/>
                <Text style={styles.userInfoCallText}>내맘대로 해~</Text>
              </View>
            </View>
          </View>

          <View style={styles.sectionBox}>
            <Text
              style={styles.sectionTitle}>
              요청세탁물
            </Text>
            <View style={styles.productBox}>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>생활빨래 80리터</Text>
                <Text style={styles.productAmount}>1</Text>
                <Text style={styles.productPrice}>19,800 원</Text>
              </View>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>와이셔츠</Text>
                <Text style={styles.productAmount}>3</Text>
                <Text style={styles.productPrice}>6,000 원</Text>
              </View>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>티셔츠</Text>
                <Text style={styles.productAmount}>2</Text>
                <Text style={styles.productPrice}>3,000 원</Text>
              </View>
            </View>
            <View style={styles.productTotalLine}>
              <Text style={styles.totalLabel}>합계</Text>
              <Text style={styles.totalPrice}>28,800 원</Text>
            </View>

            <View style={styles.productDivider}/>

            <Text
              style={styles.sectionTitle}>
              검수한 세탁물
            </Text>
            <View style={styles.productBox}>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>생활빨래 80리터</Text>
                <Text style={styles.productAmount}>1</Text>
                <Text style={styles.productPrice}>19,800 원</Text>
              </View>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>와이셔츠</Text>
                <Text style={styles.productAmount}>2</Text>
                <Text style={styles.productPrice}>2,000 원</Text>
              </View>
              <View style={styles.productLine}>
                <Text style={styles.productLabel}>티셔츠</Text>
                <Text style={styles.productAmount}>2</Text>
                <Text style={styles.productPrice}>3,000 원</Text>
              </View>
            </View>
            <View style={styles.productTotalLine}>
              <Text style={styles.totalLabel}>합계</Text>
              <Text style={styles.totalPrice}>28,800 원</Text>
            </View>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>검수결과</Text>
            <View style={styles.resultLine}>
              <Text style={styles.resultLabel}>상품차액</Text>
              <Text style={styles.resultPrice}>- 2,000 원</Text>
            </View>
            <TouchableHighlight
              onPress={()=> this.InputModal.current.visible(true)}
              underlayColor={'rgba(225,61,122,0.05)'}
            >
              <View style={styles.addPriceBtn}>
                <Text style={styles.addPriceBtnLabel}>추가결제요청</Text>
                <Icon name="arrow-right-circle" style={styles.addPriceBtnIcon}></Icon>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>추가결제 요청내역</Text>
            <View style={styles.addResult}>
              <Text style={styles.addResultLabel}>추가결제요청액</Text>
              <Text style={styles.addResultPrice}>3,000 원</Text>
            </View>
            <Text style={styles.addPriceResultText}>
              사유입력합니다
            </Text>
          </View>

          <View style={styles.sectionBox}>
            <Text style={styles.sectionTitle}>작업환불</Text>
            <View style={styles.refundBtns}>
              <TouchableHighlight
                onPress={()=> this.RefundModal.current.visible(true)}
                underlayColor="#f2f2f2"
                style={[styles.refundBtn, styles.refundBtnLeft]}
              >
                <View style={styles.refundBtnInner}>
                  <Text style={styles.refundBtnLabel}>부분환불</Text>
                  <Icon name="arrow-right-circle" style={styles.refundBtnIcon}></Icon>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={()=> this.TotalRefundModal.current.visible(true)}
                underlayColor="#f2f2f2"
                style={styles.refundBtn}
              >
                <View style={styles.refundBtnInner}>
                  <Text style={styles.refundBtnLabel}>전체환불</Text>
                  <Icon name="arrow-right-circle" color="#e13d7a" style={styles.refundBtnIcon}></Icon>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <CustomModal ref={this.ConfirmModal}>
            <View>
              <Text style={{fontSize: 16, marginBottom:10}}>주문확인</Text>
              <Text style={{color:'#888'}}>주문을 확인한 것으로 처리할까요?</Text>
             </View>
          </CustomModal>

          <CustomModal ref={this.PhotoModal}>
            <View>
              <Text style={{fontSize: 16}}>
                <Text style={{color: '#01a1dd'}}>세탁물</Text>의 수거를
                완료하셨나요?
              </Text>
              <Text style={{marginTop: 10, color: '#888'}}>
                고객님의 세탁물 사진을 등록해주세요
              </Text>
              <Text style={{color: '#888'}}>
                물건 분실에 대한 보험처리를 위해 사용됩니다
              </Text>
            </View>

            <TouchableOpacity
              style={{
                height: 180,
                borderWidth: 3,
                borderColor: '#e2e2e2',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="camera-outline" size={32} color={'#ccc'}></Icon>
                <Text style={{marginTop: 5, color: '#888'}}>
                  사진을 등록해주세요
                </Text>
              </View>
            </TouchableOpacity>
          </CustomModal>

          <CustomModal ref={this.InputModal}>
            <View>
              <View>
                <Text style={{fontSize: 18}}>
                  <Text style={{color: '#E13D7A'}}>추가결제</Text> 요청
                </Text>
                <Text style={{color: '#888', marginTop: 5}}>
                  추가된 금액에 대해 청구할 수 있습니디
                </Text>
              </View>

              <View
                style={{
                  height: 1,
                  backgroundColor: '#e2e2e2',
                  marginVertical: 20,
                }}>  
              </View>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:40,paddingHorizontal:10,marginBottom:20,borderWidth:1,backgroundColor:'#f8f8f8',borderColor:'#e2e2e2',borderRadius:4,}}>
                <Text style={{color:'#888'}}>상품차액</Text>
                <Text style={{fontSize:14,color:'#292929'}}>2,000 원</Text>
              </View>
              <Text style={{marginBottom: 5}}>그 외 추가금액 입력</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#e2e2e2',
                  height: 40,
                  borderRadius: 5,
                  marginBottom: 20,
                  paddingHorizontal: 10,
                }}
                keyboardType={'number-pad'}
                placeholder={'금액입력'}
              />
              <Text style={{marginBottom: 5}}>사유입력</Text>
              <TextInput
                multiline={true}
                style={{
                  borderWidth: 1,
                  borderColor: '#e2e2e2',
                  height: 100,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  textAlignVertical: 'top',
                }}
                placeholder={'추가금액이 발생된 원인을 상세히 입력해주세요'}
              />
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:50,paddingHorizontal:10,marginTop:20,backgroundColor:'rgba(225,61,122,0.05)',borderRadius:4,}}>
                <Text style={{color:'#292929'}}>총 추가요청 금액</Text>
                <Text style={{fontSize:16,color:'#E13D7A',fontWeight:'bold'}}>22,000 원</Text>
              </View>
            </View>
          </CustomModal>

          <CustomModal ref={this.WorkFinish}>
            <View>
              <Text style={{fontSize: 18, marginBottom: 5}}>세탁완료</Text>
              <Text style={{color: '#888'}}>세탁완료 처리를 진행할까요?</Text>
            </View>
          </CustomModal>

          <CustomModal ref={this.DeliveryFinish}>
            <View>
              <Text style={{fontSize: 18}}>
                <Text style={{color: '#01a1dd'}}>세탁물</Text>의 배송을
                완료하셨나요?
              </Text>
              <Text style={{marginTop: 10, color: '#888'}}>
                고객님의 세탁물 사진을 등록해주세요
              </Text>
              <Text style={{color: '#888'}}>
                물건 분실에 대한 보험처리를 위해 사용됩니다
              </Text>
            </View>

            <TouchableOpacity
              style={{
                height: 180,
                borderWidth: 3,
                borderColor: '#e2e2e2',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 10,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="camera-outline" size={32} color={'#ccc'}></Icon>
                <Text style={{marginTop: 5, color: '#888'}}>
                  사진을 등록해주세요
                </Text>
              </View>
            </TouchableOpacity>
          </CustomModal>

          <CustomModal ref={this.CheckConfirm}>
            <View>
              <Text style={{fontSize: 20}}>검수완료</Text>
              <Text style={{marginTop: 10, color: '#888'}}>
                변경된 상품의 수가 <Text style={{color: '#01a1dd'}}>1개</Text>
                있습니다
              </Text>
              <Text style={{color: '#888'}}>이대로 진행할까요?</Text>
            </View>
          </CustomModal>

          <CustomModal ref={this.RefundModal}>
            <View>
              <Text style={{fontSize: 20}}>부분환불</Text>
              <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 5, color: '#888'}}>부분취소금액</Text>
                <TextInput
                  keyboardType="number-pad"
                  style={{
                    borderWidth: 1,
                    height: 40,
                    borderRadius: 5,
                    borderColor: '#aaa',
                    paddingHorizontal: 5,
                  }}></TextInput>
              </View>

              <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 5, color: '#888'}}>취소사유</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    borderRadius: 5,
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.select}
                    style={{height: 40, width: '100%'}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({select: itemValue})
                    }>
                    <Picker.Item label="선택한 상품과 실제상품의 수가 다름" value={1} />
                    <Picker.Item label="고객변심으로 인한 취소" value={2} />
                    <Picker.Item label="취급하지 않는 세탁물" value={3} />
                    <Picker.Item label="세탁오염정도가 심함" value={4} />
                    <Picker.Item label="세탁실패로 인한 환불" value={5} />
                  </Picker>
                </View>
                <TextInput
                  multiline
                  style={{
                    height: 100,
                    borderWidth: 1,
                    borderColor: '#aaa',
                    borderRadius: 5,
                    padding: 5,
                    textAlignVertical: 'top',
                  }}></TextInput>
              </View>
            </View>
          </CustomModal>

          <CustomModal ref={this.TotalRefundModal}>
            <View>
              <Text style={{fontSize: 20}}>전체환불</Text>

              <View style={{marginTop: 20,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginBottom: 5, color: '#888'}}>취소금액</Text>
                <Text style={{fontSize:18,fontWeight:'bold'}}>34,500 원</Text>
              </View>

              <View style={{marginTop: 20}}>
                <Text style={{marginBottom: 5, color: '#888'}}>취소사유</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#aaa',
                    borderRadius: 5,
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.select}
                    style={{height: 40, width: '100%'}}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({select: itemValue})
                    }>
                    <Picker.Item label="고객변심으로 인한 취소" value={1} />
                    <Picker.Item label="취급하지 않는 세탁물" value={2} />
                    <Picker.Item label="세탁오염정도가 심함" value={3} />
                    <Picker.Item label="세탁실패로 인한 환불" value={4} />
                  </Picker>
                </View>
                <TextInput
                  multiline
                  style={{
                    height: 100,
                    borderWidth: 1,
                    borderColor: '#aaa',
                    borderRadius: 5,
                    padding: 5,
                    textAlignVertical: 'top',
                  }}></TextInput>
              </View>
            </View>
          </CustomModal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  sectionBox:{
    padding:15,
    backgroundColor:'#fff',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#e2e2e2',
    marginBottom:10,
  },

  sectionTitle:{
    marginBottom:15,
    fontSize:14,
    fontWeight:'bold'
  },

  //작업처리

  workBtn:{
    borderWidth:1,
    marginBottom:10,
  },

  workDisableBtn:{
    borderColor:'#e2e2e2',
  },

  workEnableBtn:{
    borderColor:'#01A1DD'
  },

  workBtnInner:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    height:45,
  },

  workBtnLabels:{
    flexDirection:'row'
  },

  workDisableIcon:{
    fontSize:20,
    color:'#e13d7a',
    marginRight:5,
  },

  workDisableDate:{
    fontSize:12,
  },

  workEnableIcon:{
    fontSize:20,
    color:'#01A1DD',
  },

  workEnableLabel:{
    color:'#01a1dd',
    fontWeight:'bold',
  },


  //주문자정보

  userInfoLine:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginBottom:10,
  },

  userInfoLabel:{
    fontSize:12,
    width:80,
    color:'#888'
  },

  userInfoSub:{
    flex:1,
    fontSize:12,
  },

  userInfoCall:{
    padding:10,
    backgroundColor:'#f8f8f8',
    flexDirection:'row',
    marginTop:10,
  },

  userInfoCallText:{
    fontSize:12,
  },
  
  productBox:{
    borderWidth:1,
    borderColor:'#e2e2e2',
    padding:10,
    backgroundColor:'#f8f8f8',
  },
  productLine:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginVertical:5,
  },
  productLabel:{
    flex:1,
    fontSize:12,
  },
  productAmount:{
    width:30,
    fontSize:12,
    textAlign:'right',
  },
  productPrice:{
    width:100,
    fontSize:12,
    textAlign:'right',
  },
  productTotalLine:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    marginTop:10,
  },
  totalLabel:{
    fontSize:12,
    color:'#888'
  },
  totalPrice:{
    fontSize:13,
  },
  productDivider:{
    marginVertical:20,
    height:1,
    backgroundColor:'#e2e2e2'
  },

  resultLine:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:15,
  },

  resultLabel:{
    color:'#888',
    fontSize:13,
  },
  resultPrice:{
    color:'#e13d7a',
    fontWeight:'bold',
    fontSize:16,
  },

  addPriceBtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:46,
    borderWidth:1,
    borderColor:'#E13D7A',
    paddingHorizontal:10,
  },
  addPriceBtnLabel:{
    color:'#e13d7a',
  },
  addPriceBtnIcon:{
    color:'#e13d7a',
    fontSize:20,
  },
  refundBtns:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#595959'
  },
  refundBtn:{
    flex:1,
  },
  refundBtnLeft:{
    borderRightWidth:1,
    borderColor:'#595959',
  },
  refundBtnInner:{
    padding:10,
  },
  refundBtnLabel:{
    marginBottom:10,
  },
  refundBtnIcon:{
    textAlign:'right',
    fontSize:20,
    color:'#595959', 
  },

  addResult:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:15,
  },
  
  addResultLabel:{
    color:'#888',
    fontSize:13,
  },

  addResultPrice:{
    
  },

  addPriceResultText:{
    padding:10,
    backgroundColor:'#f8f8f8',
    fontSize:12,
  }

});
