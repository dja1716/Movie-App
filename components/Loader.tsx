import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const Loader = () => (<Wrapper>
    <ActivityIndicator size="small" />
</Wrapper>);

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Loader;