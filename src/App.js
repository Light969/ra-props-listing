import './css/main.css'
import Listing from './react-component/Listing';
import data from './data/etsy.json';

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;