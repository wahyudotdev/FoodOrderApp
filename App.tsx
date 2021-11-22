import Route from 'config/Route';
import {AuthContext} from 'core/context/AuthProvider';
import {User} from 'features/login/data/entities/LoginResponse';
import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

const App = () => {
  let [user, setUser] = useState<User>({});
  return (
    <AuthContext.Provider
      value={{
        user: user,
        fn: setUser,
      }}>
      <SafeAreaView style={style.safeArea}>
        <StatusBar hidden={true} />
        <Route />
      </SafeAreaView>
    </AuthContext.Provider>
  );
};

export default App;
