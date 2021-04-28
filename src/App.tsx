import React, {useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import axios, {AxiosResponse} from 'axios';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import {useDispatch} from "react-redux";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import {PopupBriefCase} from "./components/Popup/PopupBriefCase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {addCurrency} from "./store/actions/actionCreater";


//interface cryptocurrency item

interface ICryptoCurrency {
    currencies: []
}

interface appProps {
    store: {};
}

const App: React.FC<appProps> = ({store}) => {
  const dispatch = useDispatch()
  const [isShowBriefcasePopup, setShowBriefcasePopup] = useState<boolean>(false)
    useEffect(() => {

        axios.get<any>('https://api.coincap.io/v2/assets')
            .then(response => {
                console.log(response.data.data);
                dispatch(addCurrency({currencies: response.data.data}))
            });


    }, []);

  //Show briefcase popup handler
  const showBriefcasePopup = (e: React.MouseEvent<HTMLAnchorElement>) =>{
    setShowBriefcasePopup(true)
  }

    const hideBriefcasePopup = (e: React.MouseEvent) => {
        setShowBriefcasePopup(false)
    };

  return (
    <div className="App">
        {isShowBriefcasePopup &&
            <PopupBriefCase hideBriefcasePopupHandler={(e) => hideBriefcasePopup(e)}/>
        }
     <Router>
         <Header/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/detail" >
                        <DetailPage />
                    </Route>
                </Switch>
                <a href="#"
                   className='btn-briefcase'
                   onClick={showBriefcasePopup}
                >
                    <FontAwesomeIcon icon={faBriefcase}/>
                </a>
            </main>


         <Footer/>
    </Router>
    </div>
  );
}

export default App;
