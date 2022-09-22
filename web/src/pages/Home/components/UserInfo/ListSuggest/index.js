import React, { memo } from 'react';
import {
  Container,
  ContainerSide,
  ContainerText,
  ListContainer,
  ContainerButtons,
  ProfileText,
  ProfileDescription,
} from './style';

const ListSuggest = ({ users }) => {
  return (
    <ListContainer>
      {users.map((user, index) => (
        <li key={index}>
          <Container>
            <ContainerSide>
              <img src={user.image} alt="user profile" />
              <ContainerText>
                <ProfileText>{user.avatar}</ProfileText>
                <ProfileDescription>Segue Você</ProfileDescription>
              </ContainerText>
            </ContainerSide>
            <ContainerButtons>Seguir</ContainerButtons>
          </Container>
        </li>
      ))}
    </ListContainer>
  );
};

export default memo(ListSuggest);
