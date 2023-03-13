import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQVfHMuBK_HHfYEwuYev1JrmAfhjWE9aM",
  authDomain: "lynetteportfolio-85320.firebaseapp.com",
  projectId: "lynetteportfolio-85320",
  storageBucket: "lynetteportfolio-85320.appspot.com",
  messagingSenderId: "922686727349",
  appId: "1:922686727349:web:6aac7ca51c7e9d3fd34afc",
  measurementId: "G-LLHMHVB12P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

