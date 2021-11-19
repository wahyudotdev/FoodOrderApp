import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Route from './Route';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

const App = () => (
  <SafeAreaView style={style.safeArea}>
    <StatusBar hidden={true} />
    <Route />
  </SafeAreaView>
);

export default App;
