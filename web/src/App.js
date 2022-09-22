import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import defaultColors from './styles/colors';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultColors}>
      <GlobalStyles />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
