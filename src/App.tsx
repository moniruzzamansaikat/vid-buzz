import Videos from './components/Videos';
import Header from './components/Header';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SingleVideo from './components/SingleVideo';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path={`/`}
          element={
            <div>
              <Videos />
              <Pagination
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          }
        />
        <Route path="/videos/:id" element={<SingleVideo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
