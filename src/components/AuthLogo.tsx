import React, {FC} from 'react';
import {ImageBackground, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS, Icons, IMAGES} from '~constants';

interface Props {
  style?: ViewStyle;
}

const AuthLogo: FC<Props> = () => {
  return (
    <ImageBackground source={IMAGES.AuthHeader}>
      <View style={styles.container}>
        <Icons.Logo />
        <Text style={styles.title}>Let's Live</Text>
      </View>
    </ImageBackground>
  );
};

export default AuthLogo;

const styles = StyleSheet.create({
  container: {
    marginTop: 108,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    lineHeight: 33,
    color: COLORS.Primary,
    marginTop: 5,
  },
});
