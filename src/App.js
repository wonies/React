/* eslint-disable */

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Advertise from './Fix/Advertise.js';
import QR from './MapGuide/QrPage.js';
import SearchBar from './SearchMenu/SearchBar';
import SearchLine from './SearchMenu/SearchLine';
import SearchList from './SearchMenu/SearchList';
import Blog from './BlogPage/BlogPage';
import SearchMenu from './SearchMenu/SearchMenu.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/menu" element={<SearchMenu />} />

          {/* <Route path="/store/:id" element={<StoreDetail />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
