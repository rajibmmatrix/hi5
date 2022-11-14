import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Splash from 'react-native-splash-screen';
import {StackScreenProps} from 'types';
import {checkLogin, useActions} from '~app';
import {COLORS, IMAGES} from '~constants';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}: StackScreenProps<'Splash'>) {
  const dispatch = useActions();

  useEffect(() => {
    dispatch(checkLogin())
      .unwrap()
      .then(data => {
        if (!data.isLogin) {
          navigation.replace('Login');
        } else {
          navigation.replace('Tab');
        }
      })
      .catch(() => navigation.replace('Logout'))
      .finally(() => Splash.hide());
    return () => {};
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      <Image source={IMAGES.Splash} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Dark,
  },
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
});
