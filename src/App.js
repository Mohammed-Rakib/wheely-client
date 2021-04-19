import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddServices from "./Components/Admin/Admin/AddServices/AddServices";
import Admin from "./Components/Admin/Admin/Admin";
import BookService from "./Components/Dashboard/BookService/BookService";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Review from "./Components/Dashboard/Review/Review";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import PrivetRoute from "./Components/Login/PrivetRoute/PrivetRoute";


 export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    
     <UserContext.Provider value={[loggedInUser , setLoggedInUser]}> 
       <Router>
       <Switch>
         <Route path="/login">
           <Login></Login>
         </Route>
         <PrivetRoute path="/service/:id">
           <BookService></BookService>
         </PrivetRoute>
         <Route path="/book/:id">
           <BookService></BookService>
         </Route>
         <PrivetRoute path="/dashboard">
           <Dashboard></Dashboard>
         </PrivetRoute>
         <PrivetRoute path="/admin">
           <Admin></Admin>
         </PrivetRoute>
         <Route path="/review">
           <Review></Review>
         </Route>
         <Route path="/addServices">
           <AddServices></AddServices>
         </Route>
         <Route path="/">
           <Home></Home>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>

  );
}

export default App;
