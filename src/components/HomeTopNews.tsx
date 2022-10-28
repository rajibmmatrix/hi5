import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  title: string;
  image: ImageSourcePropType;
}

const HomeTopNews: FC<Props> = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HomeTopNews;

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: 170,
    borderRadius: 10,
    backgroundColor: COLORS.Primary_Background,
    margin: 10,
    marginLeft: 0,
    marginBottom: 20,
    paddingBottom: 10,
    shadowColor: COLORS.Dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  image: {
    width: 170,
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.Light,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 9,
  },
});
