import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '~constants';
import {FMScreen, HomeScreen, MoreScreen, NewsScreen, TVScreen} from '~screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.activeTab,
        tabBarInactiveTintColor: COLORS.inActiveTab,
        tabBarStyle: {
          height: 50,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: COLORS.tabBar,
        },
      })}>
      <Tab.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.News}
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.TV}
        component={TVScreen}
        options={{
          title: 'TV',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-tv" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FM}
        component={FMScreen}
        options={{
          title: 'FM',
          tabBarIcon: ({color, size}) => (
            <Entypo name="radio" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.More}
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-grid" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
