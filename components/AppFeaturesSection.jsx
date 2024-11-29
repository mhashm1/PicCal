import React from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from '../app/styles';

const FeatureCard = ({ title, description, icon }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      <Animated.View style={[styles.featureCard, { transform: [{ scale: scaleAnim }] }]}>
        <Feather name={icon} size={24} color="#007AFF" style={styles.featureIcon} />
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const AppFeaturesSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>App Features</Text>
      <View style={styles.featuresContainer}>
        <FeatureCard className="justify-center"
          title="AI-Powered Calorie Estimation"
          description="Accurately estimate calories in your meals using advanced AI technology."
          icon="cpu"
        />
        <FeatureCard className="justify-center"
          title="Nutritionix API Integration"
          description="Access a vast database of nutritional information for precise tracking."
          icon="database"
        />
        <FeatureCard className="justify-center"
          title="Cross-Platform Support"
          description="Use PicCal seamlessly on both iOS and Android devices."
          icon="smartphone"
        />
      </View>
    </View>
  );
};

export default AppFeaturesSection;