import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../../components';
import {COLORS, ROUTES} from '../../../constants';
import {Logo} from '../../../constants/icons';

export default function LoginScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Login Screen</Text>
      <TextInput style={styles.input} placeholder="Enter mobile number" />
      <Button
        onPress={() => navigation.navigate(ROUTES.Signup)}
        title="SUBMIT"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#170b00',
    padding: 5,
  },
});
