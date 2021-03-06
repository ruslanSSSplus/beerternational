import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";
import {HashRouter} from 'react-router-dom'

ReactDOM.render(<React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
</React.StrictMode>, document.getElementById('root'));

reportWebVitals();
