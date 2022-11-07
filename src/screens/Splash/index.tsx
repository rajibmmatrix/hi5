import React, {useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Splash from 'react-native-splash-screen';
import {StackScreenProps} from 'types';
import {COLORS, IMAGES} from '~constants';

const {width, height} = Dimensions.get('window');

export default function SplashScreen({navigation}: StackScreenProps<'Splash'>) {
  useEffect(() => {
    Splash.hide();
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => {};
  }, [navigation]);

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
