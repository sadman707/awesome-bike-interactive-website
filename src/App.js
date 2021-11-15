import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import Register from './components/Register/Register';
import ProductDetails from './components/ProductDetails/ProductDetails';
import MyBookings from './components/MyBookings/MyBookings';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

import MangeOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Coming from './components/Coming/Coming';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/services/:serviceId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/addServices">
              <AddService></AddService>
            </Route>
            <Route path="/manageOrders">
              <MangeOrder></MangeOrder>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/myOrder">
              <MyBookings></MyBookings>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute >
            <PrivateRoute path="/coming">
              <Coming></Coming>
            </PrivateRoute >
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
