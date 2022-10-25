import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '../../../components';
import {COLORS, ROUTES} from '../../../constants';

export default function SignupScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup Screen</Text>
      <TextInput style={styles.input} placeholder="Enter your Name" />
      <TextInput style={styles.input} placeholder="Enter your Email" />
      <Button
        onPress={() => navigation.navigate(ROUTES.Verify)}
        title="SIGN UP"
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
