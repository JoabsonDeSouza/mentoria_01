import React from 'react';
import {
  Container,
  Image,
  ContainerData,
  Title,
  Text,
  ListAvatar,
  Item,
  ImageAvatar,
} from './styles';

const Card = ({ item }) => {
  return (
    <Container>
      <Image
        source={{
          uri: item.image,
        }}
      />
      <ContainerData>
        <Title>{item.username}</Title>
        <Text>{item.description}</Text>

        <ListAvatar
          data={item.listAvatar}
          horizontal
          keyExtractor={(item, index) => (index + item).toString()}
          renderItem={({ item, index }) => (
            <Item>
              <ImageAvatar source={{ uri: item }} />
            </Item>
          )}
        />
      </ContainerData>
    </Container>
  );
};

export default Card;
