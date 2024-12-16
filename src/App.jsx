import Header from '../src/components/Header/Header.jsx';
import CORE_CONCEPTS_IMAGE from '../src/assets/react-core-concepts.png';

function CoreConcepts(props){
  return (
      <li>
        <img src={props.image} alt="Stylized atom" />
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
            title="Components" 
            description="The core UI building block - compose the user interface by combining multiple components."
            image={CORE_CONCEPTS_IMAGE}></CoreConcepts>
            <CoreConcepts></CoreConcepts>
            <CoreConcepts></CoreConcepts>
            <CoreConcepts></CoreConcepts>
            </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
