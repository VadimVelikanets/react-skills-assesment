import React, {useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import axios, {AxiosResponse} from 'axios';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import {connect, useDispatch} from "react-redux";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import {PopupBriefCase} from "./components/Popup/PopupBriefCase";
import {PopupAddBriefCase} from './components/Popup/PopupAddBriefCase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import {addCurrency} from "./store/actions/actionCurrencyCreater";
import {addNewBriefcase} from './store/actions/actionBriefcaseCreater'
import {hydrate} from "react-dom";


//interface cryptocurrency item

interface ICryptoCurrency {
    currencies: []
}

interface appProps {
    store: {};
    state: {
        currencies: [],
        briefcases: []
    }
}

const App: React.FC<appProps> = ({store, state}) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [isShowBriefcasePopup, setShowBriefcasePopup] = useState<boolean>(false)
  const [isShowAddBriefcasePopup, setShowAddBriefcasePopup] = useState<boolean>(false)
  const [currencyArr, setCurrencyArr] = useState<[]>([])
  const [selectedBriefCase, setSelectedBriefCase] = useState<number>(0)
  const [briefcases, setBriefcases] = useState<[]>([])
  const [apiUrl, setApiUrl] = useState<string>('https://api.coincap.io/v2/assets')

    useEffect(() => {
        axios.get<any>(apiUrl)
            .then(response => {

                dispatch(addCurrency({currencies: response.data.data}))

                setCurrencyArr(state.currencies)
                setBriefcases(state.briefcases)

            });
    }, []);

    useEffect(() => {
        setBriefcases(state.briefcases)
        console.log(state.briefcases);
    }, [])
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

    const briefcaseHandler = (currencyName: string | number, inputValue: number | string): any => {

        if(inputValue != ''){
            dispatch(addNewBriefcase(currencyName, inputValue))
            setShowAddBriefcasePopup(false)
            window.location.reload();

        }

    }
    const apiChangeUrl = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setApiUrl('https://api.coincap.io/v2/assets?limit=7')
     //   history.push('/');
    }
  return (
    <div className="App">
        {isShowBriefcasePopup &&
            <PopupBriefCase
                briefcases={briefcases}
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
                <a href="#" onClick={apiChangeUrl}>click</a>
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

// export default connect((null), { addNewBriefcase })(App);