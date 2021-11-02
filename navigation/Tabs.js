import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';
  console.log(isDark);
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: isDark ? BLACK_COLOR : "white",
      },
      tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
      tabBarInactiveTintColor: isDark ? GRAY_COLOR : GRAY_COLOR,
      headerStyle: {
        backgroundColor: isDark ? BLACK_COLOR : "white",
      },
      headerTitleStyle: {
        color: isDark ? YELLOW_COLOR : BLACK_COLOR,
      }
    }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Tv" component={Tv} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarBadge: "5"
      }} />
    </Tab.Navigator>
  );

};

export default Tabs;
