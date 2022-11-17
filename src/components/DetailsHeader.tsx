import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HeaderBack} from '~common';
import {COLORS} from '~constants';

interface Props {
  title: string;
}

const DetailsHeader: FC<Props> = ({title}) => {
  return (
    <View style={styles.header}>
      <HeaderBack />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(DetailsHeader);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.Light,
    marginLeft: 5,
  },
});
