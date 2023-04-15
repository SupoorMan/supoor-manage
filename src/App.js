import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/reset.css';
import './App.css';
import Layout from './page/Layout/Layout';
import Login from './page/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/layout' element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
