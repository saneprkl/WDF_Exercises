
import './App.css';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Notifications from './components/Notifications';
import MainNews from './components/MainNews';
import './icons/css/all.css';

function App() {

  const notificationData = [
    {
      topic: 'PÄIVÄN TIMANTTI:',
      body: '"Maut ovat Helsingin parhaimmistoa" - pitkään suljettuna ollut klassikkoravintola hurmasi kriitikon'
    },
    {
      topic: 'ULKOMAAT:',
      body: 'Interfax: Suomi lähetti hävittäjiä saattamaan venäläisiä pommikoneita itämeren yllä'
    }
  ];
  
  return (
    <div className="App">
      <Header />
      <SecondHeader />
      {
        notificationData.map(element => <Notifications topic={ element.topic } body={ element.body } />)
      }
      <MainNews />
    </div>
  );
}

export default App;
