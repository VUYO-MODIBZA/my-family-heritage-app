// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ChildrenList from './pages/ChildrenList';
import GrandchildrenList from './pages/GrandChildrenList';
import GreatGrandchildrenList from './pages/GreatGrandChildrenList';
import GreatGreatGrandChildrenList from './pages/GreatGreatGrandChildrenList';
import GreatGreatGreatGrandChildrenList from './pages/GreatGreatGreatGrandChildrenList';
import ChildDetails from './pages/ChildDetails'; // Import ChildDetails component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/children" element={<ChildrenList />} />
          <Route path="/grandchildren" element={<GrandchildrenList />} />
          <Route path="/greatgrandchildren" element={<GreatGrandchildrenList />} />
          <Route path="/greatgreatgrandchildren" element={<GreatGreatGrandChildrenList />} />
          <Route path="/greatgreatgreatgrandchildren" element={<GreatGreatGreatGrandChildrenList />} />
          {/* Add dynamic route for ChildDetails */}
          <Route path="/children/:name_children" element={<ChildDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
