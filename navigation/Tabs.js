import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator >
    <Tab.Screen name="Movies" component={Movies} />
    <Tab.Screen name="Tv" component={Tv} />
    <Tab.Screen name="Search" component={Search} options={{
      tabBarBadge: "5"
    }} />
  </Tab.Navigator>
);

export default Tabs;
