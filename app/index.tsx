
import { Stack } from "expo-router";
import './global.css'
import HomeScreen from "./(tabs)/home";

export default function RootLayout() {
  return <Stack />;


  
  <Stack screenOptions={{ headerShown: false }} >
  <Stack.Screen name="home"  />
  <Stack.Screen name="contact"/>
  <Stack.Screen name="about" />
  </Stack>
}
