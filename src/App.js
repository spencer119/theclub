import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import SwimTeam from './components/SwimTeam';
import SwimLessons from './components/SwimLessons';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAFh9v1fwhfq1l5aR3z7wiKzycvfUoaRaM",
  authDomain: "the-club-a7a51.firebaseapp.com",
  projectId: "the-club-a7a51",
  storageBucket: "the-club-a7a51.appspot.com",
  messagingSenderId: "652245206951",
  appId: "1:652245206951:web:e34cef62b8f3e322ee1882",
  measurementId: "G-6MHD6QQTMS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);
function App() {
  return (
    <NextUIProvider>
      <SwimLessons db={db} />
      {/* <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/swimteam'>
            <SwimTeam />
          </Route>
          <Route exact path='/swimlessons'>
            <SwimLessons />
          </Route>
          <Route exact path='/swimlesson'>
            <SwimLessons />
          </Route>
        </Switch>
      </Router> */}
    </NextUIProvider>
  );
}

export default App;
