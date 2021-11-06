import React, { useState } from "react";
import styled from "styled-components/native"

const Search = () => {
  const [query, setQuery] = useState("");
  const onChangeText = (text: string) => { setQuery(text); }
  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or TV Show"
        placeholderTextColor="gray"
        returnKeyType="search"
        onChangeText={onChangeText}
      />
    </Container>
  );
}

export default Search;

const Container = styled.ScrollView``;

const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
`;