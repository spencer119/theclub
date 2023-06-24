import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import './App.css';
import { getFirestore, connectFirestoreEmulator, addDoc, collection } from 'firebase/firestore';
import { NextUIProvider } from '@nextui-org/react';
import SwimTeam from './components/SwimTeam';
import SwimLessons from './components/SwimLessons';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
const firebaseConfig = {
  apiKey: 'AIzaSyAFh9v1fwhfq1l5aR3z7wiKzycvfUoaRaM',
  authDomain: 'the-club-a7a51.firebaseapp.com',
  projectId: 'the-club-a7a51',
  storageBucket: 'the-club-a7a51.appspot.com',
  messagingSenderId: '652245206951',
  appId: '1:652245206951:web:e34cef62b8f3e322ee1882',
  measurementId: 'G-6MHD6QQTMS',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
connectFirestoreEmulator(db, '127.0.0.1', 8080);

const analytics = getAnalytics(app);

export const addSignup = async (type, swimmer, parent) => {
  return console.log(type, swimmer, parent);
  switch (type) {
    case 'swim-team':
      await addDoc(collection(db, 'swim-team'), {
        firstName: swimmer.firstName,
        lastName: swimmer.lastName,
        age: parseInt(swimmer.age),
        parentFirstName: parent.firstName,
        parentLastName: parent.lastName,
        email: parent.email,
        phone: parent.phone,
        futureEmails: parent.futureEmails,
      });
      break;
    case 'swim-lessons':
      await addDoc(collection(db, 'swim-team'), {
        firstName: swimmer.firstName,
        lastName: swimmer.lastName,
        ability: swimmer.ability,
        parentFirstName: parent.firstName,
        parentLastName: parent.lastName,
        email: parent.email,
        phone: parent.phone,
        futureEmails: parent.futureEmails,
      });
      break;
    default:
      break;
  }
};

function App() {
  return (
    <NextUIProvider>
      <div className='app-container'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/swimteam'>
              <SwimTeam addSignup={addSignup} />
            </Route>
            <Route exact path='/swimlessons'>
              <SwimLessons />
            </Route>
            <Route exact path='/swimlesson'>
              <SwimLessons />
            </Route>
          </Switch>
        </Router>
      </div>
    </NextUIProvider>
  );
}

export default App;
