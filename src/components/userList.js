import React from "react";
import {UserConsumer} from '../context/userContext';


const UserList =()=>{
  return (
    <UserConsumer>
      {({data, incrementEvent, listdata}) =>(
        <>
         <h3>{data.name}</h3>
         <h4>{data.value}</h4>
         <button onClick={incrementEvent}>Increase</button>
         {listdata.map(item=>(
           <div key={item.age}>{item.name} {item.age}</div>
         ))}
         </>
         )}
    </UserConsumer>
  );
}
export default UserList; 
