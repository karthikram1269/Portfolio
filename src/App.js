import React from 'react';
import Header from './components/Header';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './Styles/styles.css'; 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Header />}/>
                <Route exact path='*' element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
