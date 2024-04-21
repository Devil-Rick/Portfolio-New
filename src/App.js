
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import Layout from './Components/Layout/layout';
import About from './Components/About/about';
import Home from './Components/Home/home'
import Contact from './Components/Contact/contact';

function App() {
  return (
    <>
      {/* Creating Routes */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
