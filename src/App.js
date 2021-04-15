import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

    </div>
  );
}

export default App;
