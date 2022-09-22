import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import { useApp } from '../../context/app';
import Card from './Card';
import { debounce } from '../../helpers/utils';
import { Container, ContainerSearch, List } from './styles';

const Search = () => {
  const { listOriginal, valueSearch } = useApp();
  const [list, setList] = useState(listOriginal || []);

  const filterList = useCallback(() => {
    const filterByName = listOriginal.filter(item =>
      item.username.toLowerCase().includes(valueSearch.toLowerCase()),
    );
    setList(filterByName);
  }, [valueSearch]);

  const dispare = useCallback(debounce(filterList), [valueSearch]);

  useEffect(() => {
    dispare();
  }, [valueSearch]);

  const renderItem = useCallback(({ item }) => {
    return <Card item={item} />;
  }, []);

  return (
    <Container>
      <Header title="Pesquisar" />
      <Separator height={7} />
      <ContainerSearch>
        <List
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      </ContainerSearch>
    </Container>
  );
};

export default Search;
