import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Cms/Home';
import Header from './Layout/Header';
import Items from './Cms/Items';
import Search from './Cms/Search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Items/>}/>
        <Route path="/search/:id" element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
