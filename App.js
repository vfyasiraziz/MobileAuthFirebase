import * as React from 'react';
import { TextInput, Animated, Text, View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store/index';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
    }} >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="edit_profile"
        component={EditProfile}
        options={{ title: 'Edit Profile' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
