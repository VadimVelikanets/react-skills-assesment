import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import {Button} from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
         <Header/>
             <Switch>
                 <Route path="/" exact>
                     <MainPage/>
                 </Route>
                 <Route path="/detail" >
                     <DetailPage />
                 </Route>
             </Switch>

         <Footer/>
    </Router>
    </div>
  );
}

export default App;
