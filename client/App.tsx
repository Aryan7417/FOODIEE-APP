import "./global.css";

import { View, Text,Button } from 'react-native'
import React from 'react'
import Navigation from './navigation.js'

import HomeScreen from "./src/app/screens/HomeScreen.js"


export default function App() {
  return <Navigation />;
}

// import { View, Text } from "react-native";
// import "./global.css";
// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-red-500">
//       <Text className="text-red-700 text-6xl">
//         NativeWind Test
//       </Text>
//     </View>
//   );
// }
