import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: .5; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1);  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;

  position: relative;

  animation: ${fadeUp} 300ms ease-out;

  @media screen and (max-width: 900px) {
    width: 550px;
    height: 600px;
    flex-direction: column;
    justify-content: space-around;

    background-color: white;
  }
`;

export const PostMidia = styled.div`
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 450px;
    margin-top: 8px;
    overflow: hidden;
  }
`;

export const CommentsContainer = styled.div`
  width: 450px;
  height: 100%;

  padding: 8px;

  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    width: 500px;
    height: 300px;

    background-color: white;
  }
`;

export const CommentList = styled.div`
  display: flex;
  gap: 8px;

  flex: 1;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;

  border-radius: 50%;

  border: none;
  background-color: rgba(0, 0, 0, 0.6);

  color: white;

  position: absolute;
  right: -30px;
  top: -30px;

  &:hover svg {
    opacity: 0.8;
  }

  svg {
    opacity: 0.5;

    pointer-events: none;
    transition: opacity 300ms;
  }
`;
