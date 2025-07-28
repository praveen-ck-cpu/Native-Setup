import { Text, View } from "react-native";
import './global.css'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
      }}
    >
      <Text className='text-white text-3xl'>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
