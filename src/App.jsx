import Header from '../src/components/Header/Header.jsx';
//import CORE_CONCEPTS_IMAGE from '../src/assets/react-core-concepts.png';
import { CORE_CONCEPTS } from '../src/data.jsx';

function CoreConcepts(props){
  return (
      <li>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
  );
}
function App() {
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
            <CoreConcepts 
             title={CORE_CONCEPTS[1].title} 
             description={CORE_CONCEPTS[1].description}
             image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts 
             title={CORE_CONCEPTS[2].title} 
             description={CORE_CONCEPTS[2].description}
             image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts 
             title={CORE_CONCEPTS[3].title} 
             description={CORE_CONCEPTS[3].description}
             image={CORE_CONCEPTS[3].image}
            />
            </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
