import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.brand.primary[400],
        tabBarInactiveTintColor: Colors.brand.secondary[colorScheme === 'dark' ? '600' : '400'],
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: () => (
          <Image
            style={{
              flex: 1,
              backgroundColor: Colors.brand.secondary[colorScheme === 'dark' ? '900' : '600'],
            }}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
        },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: Colors.brand.secondary[colorScheme === 'dark' ? '900' : '100'],
          },
          default: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: Colors.brand.secondary,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="tv.fill" color={color} />,
        }}
      />
            <Tabs.Screen
        name="netflix"
        options={{
          title: '',
          tabBarIcon: () => (
            <Image
              source={require('@/assets/images/netflixIcon.png')}
              style={{ width: 35, height: 45, tintColor: "red" , marginTop: -20 }}
              accessibilityLabel="Netflix"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="film.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
