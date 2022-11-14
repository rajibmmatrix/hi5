import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from 'types';
import {RootState, signup, useActions, useSelector} from '~app';
import {AuthInput, AuthLogo, Button, Container} from '~components';
import {COLORS, Icons} from '~constants';

export default function SignupScreen({
  route,
  navigation,
}: StackScreenProps<'Signup'>) {
  const dispatch = useActions();
  const {isLoading} = useSelector((state: RootState) => state.loading);
  const {mobile} = route.params!;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handelSubmit = () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
      return;
    }
    dispatch(signup({full_name: name, email}))
      .unwrap()
      .then(_ => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Tab'}],
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <Container showSpinner={isLoading}>
      <AuthLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Please enter your Name & Email to{'\n'}procced further
        </Text>
        <View style={styles.body}>
          <AuthInput
            Icon={Icons.Mobile}
            value={mobile}
            editable={false}
            textColor={COLORS.Primary_Link}
            hideBorder={true}
          />
          <AuthInput
            placeholder="Enter your Name"
            Icon={Icons.User}
            onChangeText={setName}
            value={name}
          />
          <AuthInput
            placeholder="Enter your Email"
            Icon={Icons.Unlock}
            onChangeText={setEmail}
            value={email}
          />
          <Button onPress={handelSubmit} title="sign up" />
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
  container: {
    flex: 1,
    backgroundColor: COLORS.Primary_Background,
  },
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
