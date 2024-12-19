import { useState } from 'react'; 
import Header from '../src/components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />

      </main>
    </div>
  );
}

export default App;

// Task 1
// export default function App() {
//   const [selectPrice, setselectPrice] = useState('$100');
  
//   function handleClick(DiscountPrice){
//       setselectPrice(DiscountPrice);
//   }
//  return (
//      <div>
//          <p data-testid="price">{selectPrice}</p>
//          <button onClick={() => handleClick('$75')}>Apply Discount</button>
//      </div>
//  );
// }
