import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../../../../Route';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../../home/presentation/screen/Home';
import ProfileScreen from '../../../profile/presentation/screen/ProfileScreen';
import {IconButton} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    color: 'white',
  },
  bottom_nav_bar: {
    backgroundColor: 'white',
  },
  icon: {
    backgroundColor: '#12947CFF',
    marginTop: -5,
  },
});
type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;

const MenuScreen = () => (
  <View style={styles.screen}>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#12947CFF"
      inactiveColor="gray"
      barStyle={styles.bottom_nav_bar}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton
              icon="home-variant"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton
              icon="history"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton
              icon="bookmark"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton
              icon="account-circle"
              color={color}
              size={26}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </View>
);

export default MenuScreen;
