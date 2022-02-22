import Videos from './components/Videos';
import Header from './components/Header';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SingleVideo from './components/SingleVideo';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Videos />} />
        <Route path="/videos/:id" element={<SingleVideo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
