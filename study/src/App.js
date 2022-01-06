import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from './pages/Top';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/watch" element={<Watch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
