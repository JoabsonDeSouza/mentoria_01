import React from 'react';

import Header from './Header';
import StoriesList from '../../components/StoriesList';
import { stories } from '../../mocks/stories';
import Feed from './Feed';
import { ContainerParent, Container } from './styles';

const Home = () => {
  return (
    <ContainerParent>
      <Container
        data={[]}
        keyExtractor={item => item.toString()}
        renderItem={undefined}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Header />}
        ListFooterComponent={() => (
          <>
            <StoriesList data={stories} />
            <Feed />
          </>
        )}
        ListFooterComponentStyle={{
          flex: 1,
        }}
      />
    </ContainerParent>
  );
};

export default Home;
