import React, {useEffect} from 'react';
import {Image, StyleSheet} from 'react-native';
import {ROUTES} from '../../constants';

export default function SplashScreen({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTES.Login);
    }, 2000);
    return () => {};
  }, [navigation]);

  return (
    <Image
      source={require('../../assets/images/splash.png')}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
