import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackScreenProps} from 'types';
import {AuthInput, AuthLogo, Button} from '~components';
import {COLORS, Icons} from '~constants';

export default function LoginScreen({navigation}: StackScreenProps<'Login'>) {
  const [mobile, setMobile] = useState('');

  return (
    <View style={styles.container}>
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
          <Button
            onPress={() => navigation.navigate('Signup')}
            title="submit"
          />
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
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </View>
      </ScrollView>
    </View>
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
    marginTop: 30,
    marginBottom: 45,
  },
  body: {
    paddingHorizontal: 45,
    alignItems: 'center',
  },
  footer: {
    marginTop: 40,
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
    marginLeft: 23,
  },
});
