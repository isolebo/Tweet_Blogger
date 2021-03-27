import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

//redux imports
import { Provider } from 'react-redux'
import store from './dataStore'

//components import
import UserList from './components/UserList';
import PostList from './components/PostList';
import CommentList from './components/CommentList';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Login from './components/Login';
import AddPost from './components/AddPost';





function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/users" component={UserList} />
            <Route path="/posts" component={PostList} />
            <Route path="/comments" component={CommentList} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddPost} />
        </Switch>
        </div>
        </Router>
    </Provider>
  );
}

export default App;
