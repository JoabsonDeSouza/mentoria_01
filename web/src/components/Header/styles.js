import styled from 'styled-components';

export const heightHeader = 55;

export const Container = styled.div`
  width: 100vw;
  height: ${heightHeader}px;
  background-color: white;
  position: fixed;
  z-index: 1000;
  align-items: center;
  justify-content: center;
`;

export const ContainerData = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;

export const ContainerLogo = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContainerSearch = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerIcons = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const Image = styled.img`
  height: 50%;
  margin-right: 20%;
`;

export const Search = styled.div`
  height: 80%;
  width: 70%;
  background-color: ${({ theme }) => theme.BACKGROUND_ICONS};
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Input = styled.input`
  margin-left: 5px;
  height: 80%;
  width: 80%;
  background-color: ${({ theme }) => theme.BACKGROUND_ICONS};
  border-radius: 0px;
  border: none;
  color: white;
  padding-left: 5px;
  font-size: 16px;

  ::placeholder {
    color: white;
    font-size: 16px;
    border: none;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;
