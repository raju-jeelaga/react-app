 import { useState } from 'react'; 
import Header from '../src/components/Header/Header.jsx';
import { CORE_CONCEPTS } from '../src/data.jsx';
import CoreConcepts from '../src/components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';
import { EXAMPLES } from '../src/data.jsx';
import Tabs from './components/Tabs.jsx';
import { ANOTHERTABS } from '../src/data.jsx';
import TabsMenu from './components/TabsMenu.jsx';
import { TABSMENU } from '../src/data.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedItem, setselectedItem] = useState();
  const [selectMenu, setselectMenu] = useState()

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  
  function clickHandle(selectedTabName){
    setselectedItem(selectedTabName)
    console.log(selectedTabName);
  }

  function clickMenu(selectedTabMenu){
    setselectMenu(selectedTabMenu)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcepts 
             title={CORE_CONCEPTS[0].title} 
             description={CORE_CONCEPTS[0].description}
             image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
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
        <div>
          <h2>Another Examples</h2>
          <menu>
            <Tabs 
              isSelect={selectedItem === 'tabcomp'}
              onSelect={ () => clickHandle('tabcomp')}
              >
              Tab1
            </Tabs>
            <Tabs 
              isSelect={selectedItem === 'tabprop'}
              onSelect={ () => clickHandle('tabprop')}
              >
                Tab2
              </Tabs>
            <Tabs 
              isSelect={selectedItem === 'tabstate'}
              onSelect={ () => clickHandle('tabstate')}
              >
                Tab3
            </Tabs>
          </menu>
        </div>
        {!selectedItem && ( <p>Hello Click on Tab</p> ) }
        {selectedItem && (
          <div class="tab-content">
            <h3>{ANOTHERTABS[selectedItem].tit}</h3>
            <p>{ANOTHERTABS[selectedItem].desc}</p>
            <pre>
              <code>{ANOTHERTABS[selectedItem].cod}</code>
            </pre>
          </div>
        )}
        <div class="tabs-menu">
          <menu>
          <TabsMenu 
            isSelectt={selectMenu === 'tabmenucomp'}
            onSelect={() => clickMenu('tabmenucomp')}
          >
            Menu1
          </TabsMenu>
          <TabsMenu 
            isSelectt={selectMenu === 'tabmenuprop'}
            onSelect={() => clickMenu('tabmenuprop')}
          >
              Menu2
            </TabsMenu>
          <TabsMenu 
            isSelectt={selectMenu === 'tabmenustate'}
            onSelect={() => clickMenu('tabmenustate')}
          >
              Menu3
          </TabsMenu>
          </menu>
          {!selectMenu && ( <p>Please select Menu</p> ) }
          {selectMenu && (
            <div class="dynamic-menu">
              <h3>{TABSMENU[selectMenu].tilt}</h3>
              <p>{TABSMENU[selectMenu].desce}</p>
              <pre>{TABSMENU[selectMenu].codee}</pre>
              </div>
          )}
        </div>
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
