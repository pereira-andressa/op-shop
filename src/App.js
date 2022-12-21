import { Toaster } from 'react-hot-toast';
import Home from './componentes/home';

function App() {
  return (
    <div className="App">
      <div>
        <Toaster />
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
