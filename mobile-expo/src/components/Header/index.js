import React from 'react';
import Icon from '../Icon';

import { useNavigation } from '@react-navigation/native';
import Search from '../Search';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerIcons,
  ContainerComponent,
} from './styles';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerIcons>
        <Icon onPress={() => navigation.goBack()} iconName="arrow-back" />
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
        <Icon onPress={() => {}} iconName="notifications" />
      </ContainerIcons>

      <ContainerComponent>
        <Search />
      </ContainerComponent>
    </Container>
  );
};

export default Header;
