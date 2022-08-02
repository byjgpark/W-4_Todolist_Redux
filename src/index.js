import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Route
import { BrowserRouter,Routes,Route} from "react-router-dom";
import DPage from "./routes/DPage";

// Redux Package
import { Provider } from 'react-redux';
import store from './redux/config/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="DPage/:id" element={<DPage />} />  
    </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
