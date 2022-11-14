import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {StackScreenProps} from 'types';
import {AuthInput, AuthLogo, Button, Container, InputOTP} from '~components';
import {COLORS, Icons} from '~constants';
import {RootState, useActions, useSelector, verify} from '~app';

export default function VerifyScreen({
  route,
  navigation,
}: StackScreenProps<'Verify'>) {
  const dispatch = useActions();
  const {isLoading} = useSelector((state: RootState) => state.loading);
  const {user} = useSelector((state: RootState) => state.auth);
  const {mobile} = route.params!;
  let otp = '';

  const handelVerify = async () => {
    if (otp.length !== 6) {
      return;
    }
    const params = {
      otp: otp,
      phone_no: mobile,
      device_id: await DeviceInfo.getUniqueId(),
      device_model: await DeviceInfo.getDeviceName(),
      device_type: DeviceInfo.getSystemName(),
    };
    dispatch(verify(params))
      .unwrap()
      .then((data: any) => {
        if (data?.profile_completed) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Tab'}],
          });
        } else {
          navigation.replace('Signup', {mobile});
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Container showSpinner={isLoading}>
      <AuthLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          OTP has been sent to you on your{'\n'}mobile number.
          {user?.otp}
        </Text>
        <View style={styles.body}>
          <AuthInput
            Icon={Icons.Mobile}
            value={mobile}
            editable={false}
            textColor={COLORS.Primary_Link}
            hideBorder={true}
            containerStyle={styles.emailInput}
          />
          <InputOTP
            onChangeText={e => {
              otp = e;
            }}
          />
          <Text style={styles.timer}>Resend OTP after 60 sec</Text>
          <Button onPress={handelVerify} title="verify" />
        </View>
        <View style={styles.footer}>
          <Icons.Rectangle width={20} />
          <Text style={styles.footerTitle}>I agree to the</Text>
          <Text style={styles.footerLink}>Terms & Conditions</Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Secondary_Text,
    alignSelf: 'center',
    marginTop: 110,
    marginBottom: 45,
  },
  body: {
    paddingHorizontal: 45,
    alignItems: 'center',
  },
  emailInput: {
    marginBottom: 25,
  },
  timer: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Other_Text,
    textAlign: 'center',
    marginBottom: 35,
  },
  footer: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Secondary_Link,
    marginLeft: 10,
  },
  footerLink: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Primary_Link,
    marginLeft: 5,
  },
});
