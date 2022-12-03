import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <main className='container'>
        <Counters></Counters>
      </main>
    </Fragment>
  );
}

export default App;
