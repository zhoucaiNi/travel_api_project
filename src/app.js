import React, { useState } from 'react';
import './style.scss';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
// import Counter from './components/counter';
// import Controls from './components/controls';
import Map from './components/map/map';
import Header from './components/header/header';
import List from './components/list/list';

function App(props) {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </Router>
  );
}

function Welcome(props) {
  const [childClicked, setChildClicked] = useState(null);

  return (
    <div>
      <Header />
      <div className="main">
        <List childClicked={childClicked} className="list" />
        <Map setChildClicked={setChildClicked} className="map" />
      </div>
    </div>
  );
}

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

function FallBack(props) {
  return <div>URL Not Found</div>;
}

export default App;
