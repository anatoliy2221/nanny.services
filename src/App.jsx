import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './pages/Home';
import { Nannies } from './pages/Nannies';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
      </Routes>
    </>
  );
};

export default App;
