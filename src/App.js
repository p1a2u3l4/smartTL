import React, { useCallback } from 'react';
import './App.css';
import User from './components/user'


function App() {

let Users = [
  {idt:1, name: "John", age: 45, country: "USA", phone: 123456, mail: "John@Gmail.com", ChangeChecked:false},
  {idt:2, name: "Paul", age: 22, country: "Russia", phone: 79520, mail: "Paul@Gmail.com", ChangeChecked:false},
  {idt:3, name: "Steve", age: 37, country: "Australia", phone: 232323, mail: "Steve@Gmail.com", ChangeChecked:false}
]


let delClick = false; //кнопка нажатия удаления
  return (  
    <div className="App">        
      { Users.map( usr => { 
          return <User userdata={usr} isClicked={delClick} />                              
        })}   
    </div>       
  );  
}

export default App;