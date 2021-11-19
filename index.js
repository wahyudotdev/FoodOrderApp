import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    default: 'Poppins-Regular',
  }),
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
