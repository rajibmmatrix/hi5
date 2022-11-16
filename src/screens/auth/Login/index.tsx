import React, {useState} from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthInput, AuthLogo, Button, Container} from '~components';
import {COLORS, Icons} from '~constants';
import {login, RootState, useActions, useSelector} from '~app';
import {StackScreenProps} from 'types';
import config from '~config';

export default function LoginScreen({navigation}: StackScreenProps<'Login'>) {
  const dispatch = useActions();
  const {isLoading} = useSelector((state: RootState) => state.loading);
  const [mobile, setMobile] = useState('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    if (mobile.trim().length !== 10) {
      return;
    }
    dispatch(login({phone_no: mobile}))
      .unwrap()
      .then(_ => {
        navigation.navigate('Verify', {mobile});
      })
      .catch(err => console.log(err));
  };

  const handlePolicy = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <Container showSpinner={isLoading}>
      <AuthLogo />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>
          Please enter your mobile number to{'\n'}procced further
        </Text>
        <View style={styles.body}>
          <AuthInput
            label="Mobile Number"
            placeholder="Enter your Mobile"
            Icon={Icons.Mobile}
            isMobile={true}
            onChangeText={setMobile}
            value={mobile}
          />
          <Button onPress={handleSubmit} title="submit" />
          <TouchableOpacity onPress={() => navigation.replace('Tab')}>
            <Text style={styles.footerLink}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>App</Text>
          <View style={styles.footerItem}>
            <Icons.TickCircle width={18} />
            <Text style={styles.footerDesc}>
              Does not sell or trade your data.
            </Text>
          </View>
          <View style={styles.footerItem}>
            <Icons.TickCircle width={18} />
            <Text style={styles.footerDesc}>
              Is ISO 27001 certified for information security.
            </Text>
          </View>
          <View style={styles.footerItem}>
            <Icons.TickCircle width={18} />
            <Text style={styles.footerDesc}>
              Encrypts and secures your data.
            </Text>
          </View>
          <View style={styles.footerItem}>
            <Icons.TickCircle width={18} />
            <Text style={styles.footerDesc}>
              Is certified GDPR ready, the gold standard in{'\n'}data privacy.
            </Text>
          </View>
          <View style={styles.footerBottom}>
            <TouchableOpacity onPress={() => setIsChecked(prev => !prev)}>
              {isChecked ? (
                <Icons.Checkbox width={20} />
              ) : (
                <Icons.Rectangle width={20} />
              )}
            </TouchableOpacity>
            <Text style={[styles.footerTitle, styles.footerText]}>
              {'  '}I agree to the{' '}
            </Text>
            <TouchableOpacity onPress={() => handlePolicy(config.policyURL)}>
              <Text style={[styles.footerLink, styles.footerText]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <Text style={[styles.footerTitle, styles.footerText]}> and</Text>
          </View>
          <TouchableOpacity onPress={() => handlePolicy(config.termsURL)}>
            <Text style={[styles.footerLink, styles.tms]}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
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
    marginTop: 30,
    marginBottom: 45,
  },
  body: {
    paddingHorizontal: 45,
    alignItems: 'center',
  },
  footer: {
    //marginTop: 40,
    paddingHorizontal: 45,
  },
  footerTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Secondary_Text,
    marginBottom: 5,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  footerDesc: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Secondary_Text,
    marginLeft: 5,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Primary_Link,
    marginVertical: 15,
    //marginLeft: 23,
  },
  footerBottom: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    marginTop: 20,
  },
  footerText: {
    marginTop: 0,
    marginBottom: 0,
  },
  tms: {
    marginTop: 5,
    paddingLeft: 22,
    paddingBottom: 20,
    alignSelf: 'center',
  },
});
