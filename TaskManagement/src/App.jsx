import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function DashboardRoute({ darkMode, setDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage =
    location.pathname === "/team" ? "team" : "overview";

  const handleNavigate = (page) => {
    const path = page === "overview" ? "/" : `/${page}`;
    navigate(path);
  };

  return (
    <Dashboard
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      activePage={activePage}
      onNavigate={handleNavigate}
    />
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardRoute
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route
            path="/team"
            element={
              <DashboardRoute
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;