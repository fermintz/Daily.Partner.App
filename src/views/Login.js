import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Login extends React.Component{
  render(){
    return(
      <View style={styles.loginView}>
        <Image source={require('../assets/img/logo.png')} style={{resizeMode:'contain',height:80,}} />
        <Text style={{marginTop:5,color:'#888'}}>데일리세탁 파트너</Text>
        <View style={styles.loginForm}>
          <TextInput 
            placeholder={'아이디'}
            style={[styles.inputBox,{marginBottom:10,}]}
          />
          <TextInput 
            placeholder={'비밀번호'}
            style={styles.inputBox}
            keyboardType={'visible-password'}
          />
          <TouchableHighlight
            style={{backgroundColor:'#01a1dd',height:50,borderRadius:5,marginTop:20,alignItems:'center',justifyContent:'center'}}
            underlayColor={'#0099D2'}
          >
            <Text style={{fontSize:15,color:'#fff',fontWeight:'bold'}}>로그인</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  },
  loginForm:{
    width:'100%',
    padding:50,
  },
  inputBox:{
    width:'100%',
    borderWidth:1,
    borderColor:'#c2c2c2',
    borderRadius:5,
    paddingHorizontal:10,
  }
})