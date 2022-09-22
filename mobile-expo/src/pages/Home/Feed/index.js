import React, { useState, useEffect, useCallback } from 'react';

import { Container, List } from './styles';
import ListFeed from '../../../ListFeed';
import { createList } from '../../../mocks/feedList';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const init = useCallback(async () => {
    const result = await createList();
    setFeed(result);
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <List
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({ item }) => <ListFeed data={item} />}
      />
    </Container>
  );
};

export default Feed;
