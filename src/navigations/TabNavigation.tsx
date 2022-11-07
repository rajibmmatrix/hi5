import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, Icons} from '~constants';
import {FMScreen, HomeScreen, MoreScreen, NewsScreen, TVScreen} from '~screens';
import {TabParamList} from 'types';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.Primary_Link,
        tabBarInactiveTintColor: COLORS.Gray,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: COLORS.TabBar,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.HomeActive /> : <Icons.Home />,
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.NewsActive /> : <Icons.News />,
        }}
      />
      <Tab.Screen
        name="TV"
        component={TVScreen}
        options={{
          title: 'TV',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.TVActive /> : <Icons.TV />,
        }}
      />
      <Tab.Screen
        name="FM"
        component={FMScreen}
        options={{
          title: 'FM',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.FMActive /> : <Icons.FM />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.MoreActive /> : <Icons.More />,
        }}
      />
    </Tab.Navigator>
  );
}
