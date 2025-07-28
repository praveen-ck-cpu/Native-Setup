import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ContactScreen = () => {
const router = useRouter();

const handleBack = () => {
  router.back();
};

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-10">
      <Text className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact Us</Text>

      <Text className="text-base text-gray-700 mb-2">Full Name</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
      />

      <Text className="text-base text-gray-700 mb-2">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <Text className="text-base text-gray-700 mb-2">Message</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-6 h-32 text-start"
        placeholder="Your message..."
        placeholderTextColor="#aaa"
        multiline
      />

      <TouchableOpacity className="bg-blue-500 rounded-full py-4 shadow-md mb-10">
        <Text className="text-white text-center text-lg font-semibold">Send Message</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-full py-4 shadow-md mb-10">
        <Text onPress={handleBack} className="text-white text-center text-lg font-semibold">Send Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactScreen;
