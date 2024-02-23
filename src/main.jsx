import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Conection Farebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  
  apiKey: "AIzaSyCojyn1ecxcDRAZovb6R56ydws464hUXvM",
  authDomain: "testfirebase01-f075c.firebaseapp.com",
  projectId: "testfirebase01-f075c",
  storageBucket: "testfirebase01-f075c.appspot.com",
  messagingSenderId: "862285839515",
  appId: "1:862285839515:web:386c1c8bd65f8647e35a3e",
  measurementId: "G-29HHTD7RM4"
  
  /*
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROYECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID
  */
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container">
    <div className="row">
      <main>
        <section className="home">
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        </section>
      </main>
    </div>
  </div>
)