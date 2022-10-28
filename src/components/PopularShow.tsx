import React, {FC} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {COLORS, Icons} from '~constants';

interface Props {
  image: ImageSourcePropType;
  length?: string;
  runtime?: number;
}

const PopularShow: FC<Props> = ({image, length = '00:00', runtime = 0}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        imageStyle={styles.image}
        style={styles.imageContainer}>
        <View style={styles.item}>
          <Icons.Logo height={13} width={24} />
        </View>
        <View style={styles.item}>
          <Text style={styles.time}>{length}</Text>
        </View>
      </ImageBackground>
      {!!runtime && (
        <View style={styles.footer}>
          <View style={[styles.line, {width: `${runtime}%`}]} />
          <View style={[styles.finishLine, {width: `${100 - runtime}%`}]} />
        </View>
      )}
    </View>
  );
};

export default PopularShow;

const styles = StyleSheet.create({
  container: {
    width: 154,
    height: 86,
    margin: 10,
    marginLeft: 0,
    marginBottom: 20,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Light,
  },
  item: {
    backgroundColor: COLORS.Dark,
    paddingHorizontal: 5,
    marginRight: 5,
    marginVertical: 5,
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    height: 1,
    width: 140,
    position: 'absolute',
    bottom: 0,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  line: {
    height: 1,
    backgroundColor: COLORS.Primary,
  },
  finishLine: {
    height: 1,
    backgroundColor: COLORS.Light,
  },
});
