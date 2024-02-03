import React from 'react';
import './App.css';

const products = [
  {title:'pomme', isFruit: true, id: 1},
  {title:'Garlic', isFruit:false, id:2},
  {title: 'Apple', isFruit:true, id:3},
];
export default function ShoppingList() {
const listItems = products.map(product => 
  <li
   key={product.id}
    style={{
      color: product.isFruit ? 'Black' :'darkgreen'
    }}>    
    {product.title}
  </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}
// export default function myApp() {  
//   return (
//    <>
//     <h1> {user.name}</h1>
//     <img
//         className="avatar"
//        src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//         width:user.imageSize,
//         height:user.imageSize,
//         }}
//       />
//    </>
//   );
// }


