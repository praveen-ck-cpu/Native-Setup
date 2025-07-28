import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10">
      <Text className="text-3xl font-bold text-blue-600 mb-4 text-center">About Us</Text>

      <Text className="text-base text-gray-700 leading-7 mb-4 text-justify">
        Welcome to MyApp! We are committed to building high-quality mobile applications
        using the latest technology like React Native and Expo. Our mission is to create
        fast, accessible, and beautiful apps that users love to use.
      </Text>

      <Text className="text-base text-gray-700 leading-7 mb-4 text-justify">
        This app demonstrates navigation using expo-router, styling with Tailwind CSS via
        NativeWind, and a clean UI design. As you explore the app, you’ll find well-structured
        screens, tab navigation, and reusable components.
      </Text>

      <Text className="text-base text-gray-700 leading-7 mb-4 text-justify">
        We hope this project helps you learn and grow in your journey as a mobile developer.
        Happy coding! 🚀
      </Text>
    </ScrollView>
  );
}
