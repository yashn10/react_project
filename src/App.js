import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import ProjectRoutes from "./routes/ProjectsRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginTableData, setLoginTableData] = useState([]);
  const addUserToTable = (user) => {
    setLoginTableData([...loginTableData, user]);
  };

  return (
    <div>
      {isLogin && <Navbar setIsLogin={setIsLogin} />}
      <Routes>
        <Route
          path="*"
          element={
            <MainRoutes
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              addUserToTable={addUserToTable}
              loginTableData={loginTableData}
            />
          }
        />
        <Route
          path="/projects/*"
          element={
            <ProjectRoutes
              loginTableData={loginTableData}
              setLoginTableData={setLoginTableData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
