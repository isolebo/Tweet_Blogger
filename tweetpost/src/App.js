import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

//redux imports
import { Provider } from 'react-redux'
import store from './redux'

//components import
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import AddTweet from './components/AddTweet';






function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/users" component={UserList} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddTweet} />


        </Switch>
        </div>
        </Router>
    </Provider>
  );
}

export default App;
