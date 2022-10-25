import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {Button} from '../../../components';
import {COLORS, ROUTES} from '../../../constants';

export default function VerifyScreen({navigation}: any) {
  const handelVerify = () => {
    navigation.navigate(ROUTES.Tab);
    /* navigation.reset({
      index: 0,
      routes: [{name: ROUTES.Tab}],
    }); */
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Screen</Text>
      <View style={styles.inputContainer}>
        <OtpInputs
          autofillFromClipboard
          numberOfInputs={6}
          handleChange={code => console.log(code)}
          style={styles.otpContainer}
          inputContainerStyles={styles.otpBox}
          inputStyles={styles.otpText}
          focusStyles={styles.oTpFocus}
        />
      </View>
      <Button onPress={handelVerify} title="VERIFY" />
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
  inputContainer: {
    width: '100%',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
  otpBox: {
    height: 50,
    width: '12%',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: COLORS.activeTab,
  },
  otpText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  oTpFocus: {
    backgroundColor: '#f0f0f0',
    borderColor: COLORS.inActiveTab,
  },
});
