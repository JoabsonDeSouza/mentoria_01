import React, { useState, useCallback } from 'react';
import logo from '../../assets/logo.png';
import { menu } from './menu';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  Container,
  Separator,
  ContainerData,
  ContainerLogo,
  ContainerSearch,
  ContainerIcons,
  Image,
  Search,
  IconContainer,
  Input,
} from './styles';

const Header = () => {
  const [listMenu, setListMenu] = useState(menu);

  const onPressIcon = useCallback(
    value => {
      const currentMenu = listMenu.find(item => item.name === value);
      if (currentMenu.selected) {
        return;
      }
      const updateList = listMenu.map(item => {
        if (item.name === value) {
          return {
            ...item,
            selected: true,
          };
        }
        return {
          ...item,
          selected: false,
        };
      });
      setListMenu(updateList);
    },
    [listMenu],
  );

  return (
    <Container>
      <ContainerData>
        <ContainerLogo>
          <Image src={logo} alt="image" />
        </ContainerLogo>
        <ContainerSearch>
          <Search>
            <AiOutlineSearch size={30} color="white" />
            <Input placeholder="PESQUISAR" />
          </Search>
        </ContainerSearch>
        <ContainerIcons>
          {listMenu.map((item, index) => (
            <IconContainer key={index} onClick={() => onPressIcon(item.name)}>
              {item.selected ? item.icon1 : item.icon2}
            </IconContainer>
          ))}
        </ContainerIcons>
      </ContainerData>
      <Separator />
    </Container>
  );
};

export default Header;
