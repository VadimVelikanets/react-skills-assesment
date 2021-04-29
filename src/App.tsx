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
import {PopupAddBriefCase} from './components/Popup/PopupAddBriefCase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {addCurrency} from "./store/actions/actionCreater";


//interface cryptocurrency item

interface ICryptoCurrency {
    currencies: []
}

interface appProps {
    store: {};
    state: {
        currencies: []
    }
}

const App: React.FC<appProps> = ({store, state}) => {
  const dispatch = useDispatch()
  const [isShowBriefcasePopup, setShowBriefcasePopup] = useState<boolean>(false)
  const [isShowAddBriefcasePopup, setShowAddBriefcasePopup] = useState<boolean>(false)
  const [currencyArr, setCurrencyArr] = useState<[]>([])
  const [selectedBriefCase, setSelectedBriefCase] = useState<number>(0)

    useEffect(() => {
        axios.get<any>('https://api.coincap.io/v2/assets')
            .then(response => {

                dispatch(addCurrency({currencies: response.data.data}))
                console.log(state);
                setCurrencyArr(state.currencies)
            });
    }, []);

  //Show briefcase popup handler
  const showBriefcasePopup = (e: React.MouseEvent<HTMLAnchorElement>) =>{
    setShowBriefcasePopup(true)
  }

    const hideBriefcasePopup = (e: React.MouseEvent) => {
        setShowBriefcasePopup(false)
        setShowAddBriefcasePopup(false)
    };

    const addBriefcasePopup = (value: number ): any => {
        setSelectedBriefCase( value)
        setShowAddBriefcasePopup(true)
    };

    const briefcaseHandler = (currencyItem: object, inputValue: number | string): any => {
        console.log(currencyItem, inputValue)
        setShowAddBriefcasePopup(false)
    }

  return (
    <div className="App">
        {isShowBriefcasePopup &&
            <PopupBriefCase
                hideBriefcasePopupHandler={(e) => hideBriefcasePopup(e)}/>
        }
        {isShowAddBriefcasePopup &&
            <PopupAddBriefCase
                briefcaseHandler={briefcaseHandler}
                currencies={currencyArr}
                selectedBriefCase={selectedBriefCase}
                hideBriefcasePopupHandler={(e) => hideBriefcasePopup(e)}/>
        }
     <Router>
         <Header currencies={currencyArr}/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <MainPage
                            addBriefcaseHandler={ addBriefcasePopup}
                            currencies={currencyArr} />
                    </Route>
                    <Route path="/:id" >
                        <DetailPage currencies={currencyArr}  />
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
