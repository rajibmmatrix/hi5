import React, {FC, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {COLORS} from '~constants';

interface Props {
  title: string;
  value?: string;
  Icon?: FC<SvgProps>;
}

const ProfileItem: FC<Props> = ({title, value, Icon}) => {
  return (
    <View style={styles.container}>
      {Icon ? <Icon height={20} width={20} /> : null}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{value}</Text>
      </View>
    </View>
  );
};

export default memo(ProfileItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 27,
  },
  content: {
    paddingLeft: 13,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Primary_Placeholder,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Light,
    marginTop: 2,
  },
});
