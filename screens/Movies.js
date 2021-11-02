import React from "react";
import styled from "styled-components/native";

const Movies = ({ navigation: { navigate } }) => (
  <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
    <Title>Movies</Title>
  </Btn>
);

export default Movies;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Header = styled.View``;

const Column = styled.View``;

const Footer = styled.View``;
