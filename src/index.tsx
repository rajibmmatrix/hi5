import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './app/store';
import Navigations from './navigations';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigations />
      </SafeAreaProvider>
    </Provider>
  );
}
