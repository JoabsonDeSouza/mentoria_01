import React, { useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, Input } from './styles';
import { useApp } from '../../context/app';

const Search = () => {
  const { valueSearch, updateValueSearch } = useApp();

  const handleChange = text => {
    updateValueSearch(text);
  };

  return (
    <Container>
      <Input value={valueSearch} onChangeText={handleChange} />
      <Ionicons name="search" size={23} color="gray" />
    </Container>
  );
};

export default Search;
