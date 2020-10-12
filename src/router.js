import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './views/Main';
import OrderDetail from './views/OrderDetail'
import OrderList from './views/OrderList'
import Login from './views/Login';
import MainSubMenu from './components/MainSubMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = props => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={props => <MainSubMenu {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={Main}
      />
      <Drawer.Screen
        name="orderList"
        component={OrderList}
      />
    </Drawer.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="DrawerHome"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, // 헤더 보이기 설정
          }}
        />
        <Stack.Screen
          name="DrawerHome"
          component={DrawerHome}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="orderDetail"
          component={OrderDetail}
          options={{
            headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
