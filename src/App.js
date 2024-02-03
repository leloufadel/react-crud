import React from 'react';
import './App.css';
function MyButton(){
  function HandleClick(){
    alert('You cliked me')
  }
  return(
    <button onClick={HandleClick}>
      Clik ma
    </button>
  )
}

const products = [
  {title:'pomme', isFruit: true, id: 1},
  {title:'Garlic', isFruit:false, id:2},
  {title: 'Apple', isFruit:true, id:3},
];
function ShoppingList() {
const listItems = products.map(product => 
  <li
   key={product.id}
    style={{
      color: product.isFruit ? 'Red' :'darkgreen'
    }}>    
    {product.title}
  </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}

export default function myApp() {  
 return (
    <>
<MyButton/> 

</>
 );
}


