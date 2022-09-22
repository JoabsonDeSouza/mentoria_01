import React, { useEffect, useState, useCallback } from 'react';
import { createUser, createList } from '../../../../mocks/suggestList';
import ListSuggestions from './ListSuggest';
import {
  Container,
  ContainerSide,
  ContainerText,
  ContainerSuggest,
  ContainerButtons,
  ProfileText,
  ProfileDescription,
  SuggestText,
} from './style';

export default function UserInfo() {
  const [user, setUser] = useState();
  const [suggests, setSuggests] = useState([]);

  const init = useCallback(async () => {
    const resultUser = await createUser();
    const resultSuggest = await createList();
    setUser(resultUser);
    setSuggests(resultSuggest);
  }, []);

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <>
      <div>
        <Container>
          <ContainerSide>
            <img src={user.image || ''} alt="user profile" />
            <ContainerText>
              <ProfileText>{user.avatar || ''}</ProfileText>
              <ProfileDescription>{user.username || ''}</ProfileDescription>
            </ContainerText>
          </ContainerSide>
          <ContainerButtons>Mudar</ContainerButtons>
        </Container>
        <div>
          <ContainerSuggest>
            <SuggestText>Sugestões para você</SuggestText>
            <span>Ver tudo</span>
          </ContainerSuggest>
          {suggests && <ListSuggestions users={suggests} />}
        </div>
      </div>
    </>
  );
}
