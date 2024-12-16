 import { useState } from 'react'; 
import Header from '../src/components/Header/Header.jsx';
import { CORE_CONCEPTS } from '../src/data.jsx';
import CoreConcepts from '../src/components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from '../src/data.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
             title={CORE_CONCEPTS[0].title} 
             description={CORE_CONCEPTS[0].description}
             image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons 
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleClick('components')}
            >
              Components
            </TabButtons>
            <TabButtons 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleClick('jsx')}
            >
              JSX
              </TabButtons>
            <TabButtons 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleClick('props')}
            >
              Props
              </TabButtons>
            <TabButtons 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleClick('state')}
            >
              State
            </TabButtons>
          </menu>
        </section>
        {!selectedTopic && ( <p>Please select a topic</p> ) }
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        
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
