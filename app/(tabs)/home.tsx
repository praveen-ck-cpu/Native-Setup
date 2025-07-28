import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const router = useRouter(); 

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-blue-600 mb-4">Welcome to MyApp</Text>
      <Text className="text-base text-gray-600 mb-6 text-center px-4">
        This is the home page of your React Native application. Use the buttons below to navigate.
      </Text>
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-full shadow-md"
        onPress={() => router.back()} 
      >
        <Text className="text-white text-base font-semibold">Go Back</Text>
        
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3  mt-5  rounded-full shadow-md"
        onPress={() => router.push('/contact')} 
      >
        <Text className="text-white text-base font-semibold"> Next Page</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
