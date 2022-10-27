import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '~common';
import {COLORS, IMAGES} from '~constants';

interface Props {
  title: string;
  description?: string;
  onPress: () => void;
}

const NewsPaper: FC<Props> = ({title, description, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.UttarerNews} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="Read NewsPaper" onPress={onPress} style={styles.button} />
    </View>
  );
};

export default NewsPaper;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.Primary_Card,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    height: 60,
    width: 262,
    marginVertical: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: COLORS.Dark,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: COLORS.Dark,
    marginTop: 5,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    margin: 0,
    marginTop: 10,
  },
});
