import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";

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

