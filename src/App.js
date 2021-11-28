import Home from './pages/Home';
import Description from './pages/Description';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  // Router,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{margin:240}}>
    <Router>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/:id" element={<Description />} />
    </Routes>
  </Router>,
    </div>
  );
}

export default App;
