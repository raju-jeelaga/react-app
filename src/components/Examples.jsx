import { useState } from "react";
import { EXAMPLES } from "../data.jsx";
import TabButtons from "./TabButtons.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

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
      //console.log(selectedButton);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                <TabButtons 
                isSelected={selectedTopic === 'components'}
                onClick={() => handleClick('components')}
                >
                    Components
                </TabButtons>
                <TabButtons 
                isSelected={selectedTopic === 'jsx'}
                onClick={() => handleClick('jsx')}
                >
                    JSX
                </TabButtons>
                <TabButtons 
                isSelected={selectedTopic === 'props'}
                onClick={() => handleClick('props')}
                >
                    Props
                </TabButtons>
                <TabButtons 
                isSelected={selectedTopic === 'state'}
                onClick={() => handleClick('state')}
                >
                State
                </TabButtons>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
        
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