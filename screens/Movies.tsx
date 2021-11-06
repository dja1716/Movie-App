import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";
import { ActivityIndicator, Dimensions, View, FlatList } from "react-native";
import Slide from "../components/Slide";
import Poster from "../components/Poster";
import VMedia from "../components/VMedia";
import HMedia from "../components/HMedia";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { moviesApi, MovieResponse, Movie } from "../api";

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const queryClient = useQueryClient();
  const {
    isLoading: nowPlayingLoading,
    data: nowPlayingData,
    isRefetching: isRefetchingNowPlaying,
  } = useQuery<MovieResponse>(["movies", "nowPlaying"], moviesApi.nowPlaying);
  const {
    isLoading: upcomingLoading,
    data: upcomingData,
    isRefetching: isRefetchinUpcoming,
  } = useQuery<MovieResponse>(["movies", "nowPlaying"], moviesApi.upcoming);
  const {
    isLoading: trendingLoading,
    data: trendingData,
    isRefetching: isRefetchingTrending,
  } = useQuery<MovieResponse>(["movies", "nowPlaying"], moviesApi.trending);

  const onRefresh = async () => {
    queryClient.refetchQueries(["movies"]);
  };

  const movieKeyExtractor = (item: Movie) => item.id + "";
  const loading = nowPlayingLoading || upcomingLoading || trendingLoading;
  const refreshing =
    isRefetchinUpcoming || isRefetchingNowPlaying || isRefetchingTrending;
  return loading ? (
    <Loader>
      <ActivityIndicator size="small" />
    </Loader>
  ) : upcomingData ? (
    <FlatList
      onRefresh={onRefresh}
      refreshing={refreshing}
      ListHeaderComponent={
        <>
          <Swiper
            loop
            horizontal
            autoplay
            autoplayTimeout={3.5}
            showsButtons={false}
            showsPagination={false}
            containerStyle={{
              width: "100%",
              height: SCREEN_HEIGHT / 4,
              marginBottom: 30,
            }}
          >
            {nowPlayingData?.results.map((movie) => (
              <Slide
                key={movie.id}
                backdropPath={movie.backdrop_path || ""}
                posterPath={movie.poster_path || ""}
                originalTitle={movie.original_title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
              />
            ))}
          </Swiper>
          <ListContainer>
            <ListTitle>Trending Movies</ListTitle>
            {trendingData ? (
              <FlatList
                style={{ marginTop: 20 }}
                contentContainerStyle={{ paddingHorizontal: 30 }}
                horizontal
                keyExtractor={(item) => item.id + ""}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={VSeparator}
                data={trendingData.results}
                renderItem={({ item }) => (
                  <VMedia
                    posterPath={item.poster_path || ""}
                    originalTitle={item.original_title}
                    voteAverage={item.vote_average}
                  />
                )}
              />
            ) : null}
          </ListContainer>
          <ComingSoonTitle>Coming Soon</ComingSoonTitle>
        </>
      }
      data={upcomingData.results}
      keyExtractor={movieKeyExtractor}
      ItemSeparatorComponent={HSeperator}
      renderItem={({ item }) => (
        <HMedia
          posterPath={item.poster_path || "null"}
          originalTitle={item.original_title}
          overview={item.overview}
          releaseDate={item.release_date}
        />
      )}
    />
  ) : null;
};

export default Movies;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

const TrendingScroll = styled.FlatList`
  margin-top: 20px;
`;

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

const ComingSoonTitle = styled(ListTitle)`
  margin-bottom: 20px;
`;

const VSeparator = styled.View`
  width: 20px;
`;
const HSeperator = styled.View`
  height: 20px;
`;
