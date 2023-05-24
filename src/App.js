import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Framework from './page/Layout/Layout';
import Login from './page/Login/Login'
import Homes from './page/Home/Home';
import H5 from './page/H5/H5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/layout' element={<Framework />} >
          <Route path='/layout/home' element={<Homes />} />
          <Route path='/layout/h5' element={<H5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
