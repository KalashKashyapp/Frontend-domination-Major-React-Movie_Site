import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Store/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>

        <BrowserRouter future={{
            v7_relativeSplatPath: true, // Opt-in to the v7 behavior
        }}>

            <App />

        </BrowserRouter>

    </Provider>
)
