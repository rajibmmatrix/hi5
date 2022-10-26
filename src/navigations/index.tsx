import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '~constants';
import {LoginScreen, SignupScreen, SplashScreen, VerifyScreen} from '~screens';
import TabNavigation from './TabNavigation';
import {navigation} from '~utils';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
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
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name={ROUTES.Signup}
            component={SignupScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Sign Up',
              headerTransparent: true,
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name={ROUTES.Verify}
            component={VerifyScreen}
            options={{
              headerTitleAlign: 'center',
              headerTitle: 'Sign Up',
              headerTransparent: true,
              headerTintColor: '#FFFFFF',
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
  );
}
