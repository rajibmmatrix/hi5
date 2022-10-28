import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS, ROUTES} from '~constants';
import {HeaderBack} from '~common';
import {LoginScreen, SignupScreen, SplashScreen, VerifyScreen} from '~screens';
import TabNavigation from './TabNavigation';
import {navigation} from '~utils';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigation.navigationRef}>
        <Stack.Navigator initialRouteName={ROUTES.Splash}>
          <Stack.Screen
            name={ROUTES.Splash}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Group>
            <Stack.Screen
              name={ROUTES.Login}
              component={LoginScreen}
              options={{
                headerTitleAlign: 'center',
                headerTitle: 'Get Started',
                headerTransparent: true,
                headerTitleStyle: styles.title,
              }}
            />
            <Stack.Screen
              name={ROUTES.Signup}
              component={SignupScreen}
              options={{
                headerTitleAlign: 'center',
                headerTitle: 'Sign Up',
                headerTransparent: true,
                headerTitleStyle: styles.title,
                headerLeft: HeaderBack,
              }}
            />
            <Stack.Screen
              name={ROUTES.Verify}
              component={VerifyScreen}
              options={{
                headerTitleAlign: 'center',
                headerTitle: 'Sign Up',
                headerTransparent: true,
                headerTitleStyle: styles.title,
                headerLeft: HeaderBack,
              }}
            />
          </Stack.Group>
          <Stack.Screen
            name={ROUTES.Tab}
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.Light,
  },
});
