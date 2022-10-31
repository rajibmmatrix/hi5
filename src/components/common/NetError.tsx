import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  connected?: boolean;
}

const NetError: FC<Props> = ({connected}) => {
  if (connected) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>No connection</Text>
    </View>
  );
};

export default NetError;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: COLORS.Primary_Background,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Light,
    textAlign: 'center',
  },
});
