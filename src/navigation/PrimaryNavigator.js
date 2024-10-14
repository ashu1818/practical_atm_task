import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ATMScreen from '../screens/ATMScreen/ATMScreen';

const Stack = createNativeStackNavigator();

const PrimaryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ATMScreen" component={ATMScreen} />
    </Stack.Navigator>
  );
};

export default PrimaryNavigator;
