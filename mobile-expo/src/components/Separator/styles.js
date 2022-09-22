import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${({ height }) => height || 3}px;
  background-color: #efefef;
`;
