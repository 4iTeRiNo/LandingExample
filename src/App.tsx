import './App.css';
import {GridContent} from './components/GridContent';
import {Header} from './components/Header';
import {HeaderTag} from './components/HeaderTag';
import {Main} from './components/Main';
import {Navigation} from './components/Navigation';

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <HeaderTag
          color='dark'
          size='big'
          tagName='h1'
          children='Теперь услуги дилерского центра Вы можете можете получить онлайн!'
        />
        <GridContent />
      </Main>
    </>
  );
}

export default App;
