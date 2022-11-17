import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS} from '~constants';
import {HeaderBack} from '~common';
import {
  EditProfileScreen,
  FMDetailsScreen,
  LoginScreen,
  LogoutScreen,
  ProfileScreen,
  SignupScreen,
  SplashScreen,
  TVDetailsScreen,
  VerifyScreen,
} from '~screens';
import {StackParamList} from 'types';
import TabNavigation from './TabNavigation';
import {navigation} from '~utils';

const Stack = createNativeStackNavigator<StackParamList>();

export default function Navigations() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigation.navigationRef}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerTitleAlign: 'center',
                headerTitle: 'Get Started',
                headerTransparent: true,
                headerTitleStyle: styles.title,
              }}
            />
            <Stack.Screen
              name="Verify"
              component={VerifyScreen}
              options={{
                headerTitleAlign: 'center',
                headerTitle: 'Sign Up',
                headerTransparent: true,
                headerTitleStyle: styles.title,
                headerLeft: HeaderBack,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
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
            name="Tab"
            component={TabNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TVDetails"
            component={TVDetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FMDetails"
            component={FMDetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Logout"
            component={LogoutScreen}
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
