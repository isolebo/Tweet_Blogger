import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import UserList from './components/UserList';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Login from './components/Login';
import AddPost from './components/AddPost';



function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddPost} />


          


          
        
      </Switch>
      </div>
    </Router>
  );
}

export default App;
