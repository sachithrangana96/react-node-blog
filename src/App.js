/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BrowserRouter ,  Routes, Route, Switch } from 'react-router-dom';
import routes from './components/routes';
import Home from './components/Home/Home';
import DefaultLayout from './components/Layouts/subContent';
import './App.css';

const Homes = DefaultLayout(Home);  
function App() {
  return (
    <BrowserRouter>
    <Routes>
     
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {/* <Route
              path="/"
              element={<Homes/>}
            /> */}
        </Routes> 
  </BrowserRouter>

      // <div>  
      //   <h2>HOC Example</h2>  
      //   JavaTpoint provides best CS tutorials.  
      //   <Homes />
      // </div>  
  );
}

// App = DefaultLayout(App);  
export default App;