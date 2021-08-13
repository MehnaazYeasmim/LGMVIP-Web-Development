
import Srdata from './components/Srdata';
import './App.css';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [clicked, setclicked] = useState(false);
  const [data, setData] = useState(null);
  


  const fetchUsers = () => {
    

    Axios.get("https://reqres.in/api/users?page=1").then(
      (response) => {
        console.log("Page 1 Fetched");
        setData(response.data.data);
      }
    )
  }
 
  
  useEffect(() => {
    clicked && fetchUsers();
  })

  return (
    <div className="App">
      <Navbar buttonclicked={setclicked}/>
      
      <div className="allcards">
        {data && data.map((item) => {
          return <Card id={item.id} fname={item.first_name} lname={item.last_name} email={item.email} image={item.avatar}/>
        })}
      </div>
    </div>
  );
}

export default App;