import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ResultsPage } from './views';
import {
  CustomLoader,
  VideoResults,
  NewsResults,
  ImagesResults,
  SearchResults,
  CustomAppBar,
} from './components';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route element={<ResultsPage />}>
          <Route path='search' element={<SearchResults />} />
          <Route path='image' element={<ImagesResults />} />
          <Route path='news' element={<NewsResults />} />
          <Route path='videos' element={<VideoResults />} />
        </Route>

        {/* 404 route */}
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
