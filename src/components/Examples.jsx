import { useState } from "react";
import { EXAMPLES } from "../data.jsx";
import TabButtons from "./TabButtons.jsx";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = 'Please select a Tab';
    if(selectedTopic){
        tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )
    }

    function handleClick(selectedButton){
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
    }

    return (
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
          {tabContent}
        </section>
        
        // {!selectedTopic && ( <p>Please select a topic</p> ) }
        // {selectedTopic && (
        // <div id="tab-content">
        //     <h3>{EXAMPLES[selectedTopic].title}</h3>
        //     <p>{EXAMPLES[selectedTopic].description}</p>
        //     <pre>
        //     <code>{EXAMPLES[selectedTopic].code}</code>
        //     </pre>
        // </div>
        // )}
    )
}