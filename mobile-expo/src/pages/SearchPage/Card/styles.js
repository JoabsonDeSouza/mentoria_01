import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 150px;
  flex-direction: row;
  padding: 10px;
`;

export const ContainerData = styled.View`
  width: 60%;
  height: 100%;
  padding: 10px;
`;

export const Image = styled.Image`
  height: 100%;
  width: 40%;
  border-radius: 16px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Text = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  margin-bottom: 14px;
`;

export const ListAvatar = styled(FlatList)``;

export const Item = styled.View`
  /* position: absolute; */
  z-index: ${({ zIndex }) => zIndex || 3};
  top: 0px;
  left: ${({ left }) => left || 3}px;
`;

export const ImageAvatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`;
