import logo from './logo.svg';
import './App.css';
import CustomerAdd from './CustomerAdd';
import {Provider} from 'react-redux'
import { store } from './Store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CustomerAdd></CustomerAdd>
   
    </div>
    </Provider>
  );
}

export default App;
