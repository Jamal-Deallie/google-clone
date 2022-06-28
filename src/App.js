import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ResultsPage } from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<ResultsPage />} />

        {/* 404 route */}
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
