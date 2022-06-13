import React from "react";
import  ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import reducers from './reducers'

import App from './components/App'

const store = createStore(reducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)