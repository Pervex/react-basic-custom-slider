import Home from './pages/Home';
import Description from './pages/Description';
import CarouselLibrary from './pages/CarouselLibrary';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{margin:240}}>
    <Router>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/library" element={<CarouselLibrary />} />
      <Route path="/:id" element={<Description />} />
    </Routes>
  </Router>,
    </div>
  );
}

export default App;
