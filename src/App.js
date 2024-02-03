import React from 'react';
import {useState} from 'react';

import './App.css';
// export default function MyApp() {  
//   const[count, setcount] = useState(0);
//   function HandleClick() {
//     setcount(count + 1);
//   }
//  return (
//     <>
// <MyButton />
// <MyButton />

// </>
//  );
//  }
// function MyButton({count, HandleClick}){
//   return(
//   <button onClick={HandleClick}>
//     Cliked {count} times
//   </button>
//   );
// }

function MyButton({ }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
   clik{count} times
    </button>
  )
  }
export default function MyApp() {
  
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton/>
      <MyButton/>
    </div>
  );
}


