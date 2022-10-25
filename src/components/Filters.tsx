import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DropDown} from './common';

const Filters = () => {
  return (
    <View style={styles.container}>
      <View>
        <DropDown />
      </View>
      <View>
        <DropDown />
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
