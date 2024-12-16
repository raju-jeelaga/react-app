import Header from '../src/components/Header/Header.jsx';
import { CORE_CONCEPTS } from '../src/data.jsx';
import CoreConcepts from '../src/components/CoreConcepts.jsx';

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
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
            </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
