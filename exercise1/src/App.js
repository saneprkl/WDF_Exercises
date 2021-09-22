
import './App.css';
import Header from './components/Header';
import Second_header from './components/SecondHeader';
import Notifications from './components/Notifications';

function App() {

  const notificationData = [
    {
      topic: 'PÄIVÄN TIMANTTI:',
      body: 'Monen perheen ruokapöytäkeskusteluja vaivaa ongelma, jonka vuoksi oikeat kuulumiset sivuutetaan kokonaan'
    },
    {
      topic: 'ULKOMAAT',
      body: 'Interfax: Suomi lähetti hävittäjiä saattamaan venäläisiä pommikoneita itämeren yllä'
    },
    {
      topic: 'MAINOS',
      body: 'Lunasta nyt kertaluontoinen etusi ja kokeile Hesaria 2 viikkoa maksutta!'
    }
  ];

  return (
    <div className="App">
      <Header />
      <Second_header />
      {
        notificationData.map(element => <Notifications topic={ element.topic } body={ element.body } /> )
      }
    </div>
  );
}

export default App;
