import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Alert, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

// Assuming you have a logo image in your assets folder
import logoImage from '../../assets/images/logo.png';

const FormField = ({ title, value, handleChangeText, keyboardType = "default", secureTextEntry = false }) => (
  <View className="mb-4">
    <Text className="text-gray-300 mb-2 font-semibold">{title}</Text>
    <TextInput
      className="bg-secondary border border-gray-600 text-white p-4 rounded-lg"
      value={value}
      onChangeText={handleChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#a0a0a0"
    />
  </View>
);

const CustomButton = ({ title, handlePress, isLoading }) => (
  <TouchableOpacity
    className="bg-highlight py-4 rounded-lg items-center"
    onPress={handlePress}
    disabled={isLoading}
  >
    <Text className="text-white text-lg font-semibold">
      {isLoading ? "Loading..." : title}
    </Text>
  </TouchableOpacity>
);

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      // Simulating sign-in process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert("Success", "User signed in successfully");
      router.replace("/(tabs)/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-4 py-8">
        <View className="flex-1 justify-center">
    

          <Text className="text-2xl font-semibold text-white mb-8 text-center">
            Log in to PicCal
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            secureTextEntry
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-300 mr-1">
              Don't have an account?
            </Text>
            <Link href="/signup" className="text-highlight font-semibold">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;



