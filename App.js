import React, { useState } from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
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
  return <Text>we are done loading</Text>;
}
