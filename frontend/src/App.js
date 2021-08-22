import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import MapScreen from './screens/MapScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '../node_modules/@fortawesome/free-solid-svg-icons/index';






function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
           Car Assistance
          </Link>
        </div>
        <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}>
                  
                </SearchBox>
                
              )}
            ></Route>
          </div>
         

        
        <div>
        <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
               
              </div>
            )}
          </div>
          </header>
        <main>
          
        <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
         
          
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
           <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
           <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}
 

export default App;
