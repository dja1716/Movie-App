import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";
import { tvApi } from "../api";

const Tv = () => {
  const { isLoading: todayLoading, data: todayData } = useQuery(["tv", "today"], tvApi.airingToday);
  const { isLoading: topLoading, data: topData } = useQuery(["tv", "top"], tvApi.topRated);
  const { isLoading: trendingLoading, data: trendingData } = useQuery(["tv", "trending"], tvApi.trending);


  const loading = todayLoading || topLoading || trendingLoading;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>tv</Text>
    </View>);
};

export default Tv;
