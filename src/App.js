import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EmailListItem from './components/EmailListItem';

function App() {
  return (
    
      <div>
          <Header />
          <Sidebar />
          <EmailList />
        
    </div>
   
    
  );
}

export default App;
