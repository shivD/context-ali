import React, {useState } from "react";
import './App.css';
import Users from './components/user';
import {UserProvider} from './context/userContext';

 
 
function App() {
 const [user, setuser] = useState({
   name:'shivraj',
   value:1
 })
 const listdata=[{
   name:'shivraj',
   age:32,
 },
 {
  name:'Reena',
  age:28,
}
]
 console.log(user);
const  Increment =  () =>  setuser({...user, value:user.value+1})
var userContextData={
  data:user,
  incrementEvent:Increment,
  listdata: listdata
}
  return (
    <UserProvider value={userContextData}>
     <Users />
   </UserProvider>
    ); 
}

export default App; 
