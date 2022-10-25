import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Text>logo OR Text</Text>
      <View style={styles.headerRight}>
        <Text>Search</Text>
        <Text>Profile Pic</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
