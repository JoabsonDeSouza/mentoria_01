import { Aside, Container, MainContainer, MainContent } from './styles';
import UserInfoComponent from './components/UserInfo';
import Feed from './components/Feed';

const Home = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <MainContent>
            <Feed />
          </MainContent>
          <Aside>
            <UserInfoComponent />
          </Aside>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
