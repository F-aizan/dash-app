import React from 'react';
import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import dash_board from './components/dash';
import {Create} from './components/create_contact';
import maps from './components/charts_maps';
import Contacts from './components/contact';
import { Edit } from './components/edit_contact';



function App() {
  
  return (
  
    <div className="App">
      <header className="App-header">
        {dash_board()}
        <Routes>
          
          <Route path='/edit' element={Edit()} />
          <Route path="/contacts" element={Contacts()} />
          <Route path='/create_contact' element={Create()}/>
          <Route path='/charts_maps' element={maps()}/>
        </Routes>
      </header>
    </div>
 
  );
}

export default App;
function Delete(): React.ReactNode {
  throw new Error('Function not implemented.');
}

