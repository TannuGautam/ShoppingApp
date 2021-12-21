import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';
import App from '../App';
import DetailsPage from './DetailsPage';

const Rout = () => {
    return (
        <div>
            <Router>
                <Routes>
                   
                    <Route exact path='/' element={< App />}></Route>
                    <Route exact path='/detailspage' element={< DetailsPage />}></Route>
                  
                </Routes>
            </Router>
        </div>
    )
}

export default Rout
