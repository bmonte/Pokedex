import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PokemonProvider from './context/Pokemon';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
