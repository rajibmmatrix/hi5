import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {COLORS} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
  Icon: FC<SvgProps>;
}

const MoreItem: FC<Props> = ({title, Icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon width={24} height={24} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MoreItem);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.Primary_Border,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    color: COLORS.Light,
    marginLeft: 20,
  },
});
