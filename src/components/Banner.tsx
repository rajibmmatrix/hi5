import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';
import {DataType} from 'react-native-image-slider-banner/src/PropsTypes';
import {COLORS} from '~constants';

interface Props {
  data: Array<DataType>;
  isLocal?: boolean;
}

const Banner: FC<Props> = ({data, isLocal = true}) => {
  return (
    <View style={styles.container}>
      <ImageSlider
        data={data}
        preview={false}
        showHeader={false}
        autoPlay={true}
        localImg={isLocal}
        caroselImageStyle={styles.image}
        indicatorContainerStyle={styles.footer}
        activeIndicatorStyle={styles.active}
        inActiveIndicatorStyle={styles.inActive}
      />
    </View>
  );
};

export default memo(Banner);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 25,
  },
  image: {
    height: 215,
    resizeMode: 'cover',
  },
  footer: {
    bottom: -45,
  },
  active: {
    backgroundColor: COLORS.Primary,
    height: 10,
    width: 30,
  },
  inActive: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.Primary_Placeholder,
  },
});
