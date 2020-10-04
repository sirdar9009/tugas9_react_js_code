import React from 'react';
import './css/bootstrap.min.css';
import Atas from './komponen/Atas';
import Isi from './komponen/Isi';
import Bawah from './komponen/Bawah';

function App() {
  return (
    <div>    
      <Atas/>
      <Isi/>
      <Bawah/>
    </div>
  );
}

export default App;
