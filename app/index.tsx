import React from 'react';
import "expo-router/entry";
import { ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Redirect, router } from 'expo-router'
import HeroSection from '../components/HeroSection';
import AppFeaturesSection from '../components/AppFeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import {Link} from 'expo-router';


export default function App() {

  return (
    <ScrollView className="flex-grow">
    <SafeAreaView className="flex-1 bg-primary">
    
    <StatusBar barStyle="default" />
      <View className="mb-5">
        <HeroSection />
      </View>
      <View className="mb-5">
        <AppFeaturesSection />
      </View>
      <View className="mb-5">
        <HowItWorksSection />
        <Link href="/(tabs)/home" style={{ color: 'blue' }}>go to home</Link>
      </View>
  </SafeAreaView>
  </ScrollView>
  
);
}

