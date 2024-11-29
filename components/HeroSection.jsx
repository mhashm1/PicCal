import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Dimensions, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router } from 'expo-router'

const { width, height } = Dimensions.get('window');

const Button = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={icon} style={styles.buttonIcon} />
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default function HeroSection() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleAppStore = () => {
    Linking.openURL('https://apps.apple.com/us/app');
  };

  const handleGooglePlay = () => {
    Linking.openURL('https://play.google.com/store/apps?hl=en_US');
  };

  const handleGetStarted = () => {
    router.push('/sign-in');
  };

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#0f3460']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>PicCal</Text>
        <Text style={styles.tagline}>Track and Estimate Calories with AI</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="App Store"
            icon={require('../assets/images/app-store-icon.png')}
            onPress={handleAppStore}
          />
          <Button
            title="Google Play"
            icon={require('../assets/images/google-play-icon.png')}
            onPress={handleGooglePlay}
          />
        </View>
        
        <Animated.View style={{ opacity: fadeAnim }}>
          <TouchableOpacity style={styles.ctaButton} onPress={handleGetStarted}>
            <Text style={styles.ctaButtonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.8,
  },
  content: {
    alignItems: 'center',
    padding: 24,
    width: '90%',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 18,
    color: '#a0a0a0',
    marginBottom: 36,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 8,
    width: 140,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  ctaButton: {
    backgroundColor: '#e94560',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});