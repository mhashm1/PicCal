import React from 'react';
import { View, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = ({ name, color, focused }) => {
  return (
    <View className={`items-center justify-center ${focused ? 'opacity-100' : 'opacity-50'}`}>
      <Ionicons name={name} size={24} color={color} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e94560',
        tabBarInactiveTintColor: '#a0a0a0',
        tabBarStyle: { backgroundColor: '#16213e' },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="logFood"
        options={{
          title: 'Log Food',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="add-circle-outline" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="person-outline" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;