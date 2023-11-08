import './App.css';

import Heading from './components/Heading';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='React counter app' classValue='gray' />
      </header>
      <Counter counterInitValue={20} />
      <Counter counterInitValue={108} />
    </div>
  );
}

export default App;
