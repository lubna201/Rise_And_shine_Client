import './App.css';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import BuyNow from './Components/BuyNow/BuyNow';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddProduct from './Components/AddProduct/AddProduct';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name :{loggedInUser.name}</p>
      <p>Email : {loggedInUser.email}</p>
      <Router>
        <Header></Header>
        <h4>{loggedInUser.name}</h4>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/buy/:_id">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/addProducts">
            <AddProduct></AddProduct>
            </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
