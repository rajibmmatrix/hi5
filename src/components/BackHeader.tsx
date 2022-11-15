import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {HeaderBack} from '~common';
import {COLORS} from '~constants';

interface Props {
  title: string;
  Icon?: FC<SvgProps>;
  onRightPress?: () => void;
}

const BackHeader: FC<Props> = ({title, Icon, onRightPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        <HeaderBack />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity disabled={!Icon} onPress={onRightPress}>
        {Icon ? <Icon width={18} height={18} /> : null}
      </TouchableOpacity>
    </View>
  );
};

export default memo(BackHeader);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.Secondary_Background,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.Light,
    textAlign: 'center',
  },
});
