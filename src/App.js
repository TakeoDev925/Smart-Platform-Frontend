import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tourism from './screens/pages/tourism';
import Home from './screens/pages/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tourism">
            <Route index element={<Tourism />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
