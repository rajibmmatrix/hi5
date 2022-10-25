import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Filters, Header} from '../../components';

export default function FMScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Filters />
      <View style={styles.content}>
        <Text style={styles.title}>FM Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
