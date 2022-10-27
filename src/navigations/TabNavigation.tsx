import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, Icons, ROUTES} from '~constants';
import {FMScreen, HomeScreen, MoreScreen, NewsScreen, TVScreen} from '~screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.Primary_Link,
        tabBarInactiveTintColor: COLORS.Gray,
        tabBarStyle: {
          height: 50,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: COLORS.TabBar,
        },
      })}>
      <Tab.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.HomeActive /> : <Icons.Home />,
        }}
      />
      <Tab.Screen
        name={ROUTES.News}
        component={NewsScreen}
        options={{
          title: 'News',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.NewsActive /> : <Icons.News />,
        }}
      />
      <Tab.Screen
        name={ROUTES.TV}
        component={TVScreen}
        options={{
          title: 'TV',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.TVActive /> : <Icons.TV />,
        }}
      />
      <Tab.Screen
        name={ROUTES.FM}
        component={FMScreen}
        options={{
          title: 'FM',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.FMActive /> : <Icons.FM />,
        }}
      />
      <Tab.Screen
        name={ROUTES.More}
        component={MoreScreen}
        options={{
          title: 'More',
          tabBarIcon: ({focused}) =>
            focused ? <Icons.More /> : <Icons.More />,
        }}
      />
    </Tab.Navigator>
  );
}
