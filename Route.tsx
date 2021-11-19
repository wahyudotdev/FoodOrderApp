import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/features/login/presentation/screen/WelcomeScreen';
import MenuScreen from './src/features/menu/presentation/screen/MenuScreen';
import LoginScreen from './src/features/login/presentation/screen/LoginScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
