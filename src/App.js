// import logo from './logo.svg';
import './App.css';
import {Home} from './pages/home/Home'
import {List} from './pages/list/List'
import {Hotels} from './pages/hotels/Hotels'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotelList' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotels/>}/>


      </Routes>
      </BrowserRouter>
  );
}

export default App;
