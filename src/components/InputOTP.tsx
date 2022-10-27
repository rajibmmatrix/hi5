import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {COLORS} from '~constants';

interface Props {
  onChangeText: (e: string) => void;
}

const InputOTP: FC<Props> = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <OtpInputs
        autofillFromClipboard
        numberOfInputs={6}
        style={styles.content}
        inputContainerStyles={styles.box}
        inputStyles={styles.text}
        focusStyles={styles.focus}
        handleChange={onChangeText}
      />
    </View>
  );
};

export default memo(InputOTP);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  box: {
    height: 50,
    width: '12%',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: COLORS.Primary_Link,
    backgroundColor: COLORS.Primary_Background,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.Primary_Link,
    textAlign: 'center',
  },
  focus: {
    backgroundColor: COLORS.Gray,
    borderColor: COLORS.Primary_Link,
  },
});
