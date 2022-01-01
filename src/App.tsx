import MainScreen from "./pages/MainScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteList from "./pages/FavoriteList";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/favoriteList" element={<FavoriteList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
