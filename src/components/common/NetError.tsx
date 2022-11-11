import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {COLORS} from '~constants';

const NetError: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (isConnected) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No connection</Text>
    </View>
  );
};

export default NetError;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: COLORS.Primary_Background,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Light,
    textAlign: 'center',
  },
});
