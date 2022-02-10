import './App.css';
import {AppContext} from './Contexts/AppProvider/AppContext';
import {H1} from './components/App/H1/index';
import { CounterProvider } from './Contexts/CounterProvider/index';
import { Button } from './components/App/Button';


// App.jsx
function App() {
  return (
    <CounterProvider>
      <AppContext>
        <div>
          <H1 />
          <Button />
        </div>
      </AppContext>
    </CounterProvider>
  );
}

export default App;
