import React from 'react';
//import {NativeModules} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NetError} from '~components';
import Navigations from './navigations';
import {store} from './app';

if (__DEV__) {
  //NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigations />
        <NetError />
      </Provider>
    </SafeAreaProvider>
  );
}
