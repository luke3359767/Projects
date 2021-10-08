import React from "react";
// import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"

function App() {

  const contacts = [
    {
      id: "1",
      name: "Dinish",
      email: "3359767@gmail.com",
    },
    {
      id: "1",
      name: "Shinid",
      email: "7679533@gmail.com",
    },
  ];

  return (
   <div className="ui container">
     <Header/>
     <AddContact/>
     <ContactList contacts={contacts}/>
   </div>
  )
}

export default App;
