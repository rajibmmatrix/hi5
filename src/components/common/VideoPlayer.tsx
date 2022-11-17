import React, {FC, memo} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, Icons, IMAGES} from '~constants';

interface Props {}

const VideoPlayer: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.TVshows}
        imageStyle={styles.image}
        style={styles.thumbImg}>
        <TouchableOpacity>
          <Icons.VideoPlay />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default memo(VideoPlayer);

const styles = StyleSheet.create({
  container: {
    height: 224,
    width: '100%',
  },
  image: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.Primary_Border,
  },
  thumbImg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
