import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
          name="akademi"
          options={{
            title: 'Akademi',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="school" color={color} />,
          }}
        />
        <Tabs.Screen
          name="reels"
          options={{
            title: 'Reels',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="videocam" color={color} />,
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: 'News',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="newspaper" color={color} />,
          }}
        />
        <Tabs.Screen
          name="membership"
          options={{
            title: 'Membership',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="people" color={color} />,
          }}
        />
    </Tabs>
  );
}
