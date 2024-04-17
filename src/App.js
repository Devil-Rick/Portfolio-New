
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  return (
    <>
      {/* Creating Routes */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
