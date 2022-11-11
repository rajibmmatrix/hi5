import React, {FC, memo} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '~constants';

const Spinner: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ActivityIndicator
          size="large"
          animating={true}
          color={COLORS.Primary}
        />
        <Text style={styles.title}>Loading...</Text>
      </View>
    </View>
  );
};

export default memo(Spinner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  body: {
    width: 150,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Light,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.Dark,
    marginTop: 10,
  },
});
