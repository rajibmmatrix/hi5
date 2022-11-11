import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {NetError} from '~components';
import {store} from './app/store';
import Navigations from './navigations';

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
