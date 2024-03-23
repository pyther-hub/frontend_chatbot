import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ChatArea from './components/chatarea';
import Initial from './components/initial';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      {/* <Initial feeds={feeds}/> */}
      <ChatArea/>
    </div>
  );
}

export default App;
