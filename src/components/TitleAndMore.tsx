import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, Icons} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
}

const TitleAndMore: FC<Props> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.right}>
        <Text style={styles.desc}>More</Text>
        <Icons.ArrowRight width={18} height={18} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(TitleAndMore);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.Light,
    lineHeight: 24,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  desc: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.Primary_Link,
    lineHeight: 18,
  },
});
