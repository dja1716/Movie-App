import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    await Font.loadAsync(Ionicons.font);
    await Asset.loadAsync(require("./dummy.jpeg")); // local filesystem
    await Image.prefetch(
      "https://res.cloudinary.com/sitereq-production/image/upload/PostContentImage/565x380/Android%20Studio0716201912541712252019083500"
    ); // on the app
    // load everything here;
    // video, database - preload
    await new Promise((resolve) => setTimeout(resolve, 10000));
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>eeeeeeeewe are done loading</Text>;
}
