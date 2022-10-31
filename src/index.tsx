import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import {NetError} from '~components';
import {store} from './app/store';
import Navigations from './navigations';

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigations />
        <NetError connected={isConnected} />
      </SafeAreaProvider>
    </Provider>
  );
}
