import React, { useState } from "react";
import { ScrollView, FlatList, RefreshControl } from "react-native";
import { useQuery, useQueryClient } from "react-query";
import { tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";
import VMedia from '../components/VMedia';
import styled from 'styled-components/native';

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading: todayLoading, data: todayData, isRefetching: todayRefetching } = useQuery(["tv", "today"], tvApi.airingToday);
  const { isLoading: topLoading, data: topData, isRefetching: topRefetching } = useQuery(["tv", "top"], tvApi.topRated);
  const { isLoading: trendingLoading, data: trendingData, isRefetching: trendingRefetching } = useQuery(["tv", "trending"], tvApi.trending);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tv"]);
    setRefreshing(false);
  }

  const loading = todayLoading || topLoading || trendingLoading;
  if (loading) {
    return <Loader />
  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 30 }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <HList title="Trending TV" data={trendingData.results} />
      <HList title="Airing Today" data={todayData.results} />
      <HList title="Top Rated Tv" data={topData.results} />
    </ScrollView>);
};

export default Tv;


export const HListSeparator = styled.View`
  width: 20px;
`;