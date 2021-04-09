import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//redux imports
import { Provider } from 'react-redux'
import store from './redux'

//components import
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import ReplyList from './components/ReplyList';
import ReplyDetails from './components/ReplyDetails';
import TweetList from './components/TweetList';
import TweetDetails from './components/TweetDetails';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import AddNewTweet from './components/AddNewTweet';



function App() {
  return (
    <Provider store={store}>
      <Router>
          <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/users" component={UserList} />
            <Route  path="/user/:id" component={UserDetails}/>
            <Route path="/reply" component={ReplyList} />
            <Route  path="/reply/:id" component={ReplyDetails} />
            <Route path="/tweets" component={TweetList} />
            <Route  path="/tweet/:id" component={TweetDetails}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/add" component={AddNewTweet} />
        </Switch>
        </div>
        </Router>
    </Provider>
  );
}

export default App;
