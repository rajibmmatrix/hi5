import React, {FC} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '~common';
import {COLORS, IMAGES} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
}

const NewsLive: FC<Props> = ({title, onPress}) => {
  return (
    <LinearGradient colors={COLORS.Secondary_Card} style={styles.container}>
      <Image source={IMAGES.HighNews} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Button
        title="Watch High News live streaming"
        onPress={onPress}
        style={styles.button}
      />
    </LinearGradient>
  );
};

export default NewsLive;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    height: 144,
    width: '100%',
    marginVertical: 10,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: COLORS.Light,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    margin: 0,
    marginTop: 10,
  },
});
