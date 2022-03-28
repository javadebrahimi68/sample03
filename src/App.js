
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import AdminLayout from './components/layout/adminLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
