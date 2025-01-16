import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { COLORS } from '@/constants';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import AccountCircleSvg from '../../components/SVGS/AccountCircleSvg' ;
import GlockSvg from '../../components/SVGS/GlockSvg' ;

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.green ,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'start',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingLeft: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <AccountCircleSvg />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingRight: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <GlockSvg />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'maps',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingLeft: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <AccountCircleSvg />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingRight: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <GlockSvg />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsTab"
        options={{
          title: 'settings',
          tabBarIcon: ({ color }) => <TabBarIcon name="navicon" color={color} />,
          headerLeft: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingLeft: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <AccountCircleSvg />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{paddingRight: 20, paddingBottom: 5}}>
                {({ pressed }) => (
                  <GlockSvg />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
