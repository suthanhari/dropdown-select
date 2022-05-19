import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Editlist from './componrnt/Editlist';
import Home from './componrnt/Home';


function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<Editlist />} />
          </Routes>

        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
