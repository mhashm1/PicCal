import React from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from '../app/styles';

const StepItem = ({ number, title, description, imageSource }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: number * 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.stepItem, { opacity: fadeAnim }]}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
      <Image source={imageSource} style={styles.stepImage} />
    </Animated.View>
  );
};

const HowItWorksSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>How It Works</Text>
      <View style={styles.stepsContainer}>
        <StepItem
          number={1}
          title="Take a photo"
          description="Snap a picture of your meal using your device's camera."
          imageSource={require('../assets/images/take.jpg')}
        />
        <StepItem
          number={2}
          title="Analyze with AI"
          description="Our AI processes the image to identify food items and portion sizes."
          imageSource={require('../assets/images/analyze.png')}
        />
        <StepItem
          number={3}
          title="Get calorie estimation"
          description="Receive accurate calorie and nutritional information for your meal."
          imageSource={require('../assets/images/calorie.png')}
        />
      </View>
    </View>
  );
};

export default HowItWorksSection;