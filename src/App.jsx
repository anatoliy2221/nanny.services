import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './pages/Home';
import Nannies from './pages/Nannies';
import NotFoundPage from './pages/NotFoundPage';
import NannyReviews from './components/nannyReviews/nannyReviews';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nannies" element={<Nannies />}>
          <Route path='/nannies/:nanniesId/reviews' element={<NannyReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
