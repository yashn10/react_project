import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";

const MainRoutes = ({
  isLogin,
  setIsLogin,
  addUserToTable,
  loginTableData,
}) => {
  return (
    <div>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route
            path="/"
            element={
              <Login
                setIsLogin={setIsLogin}
                addUserToTable={addUserToTable}
                loginTableData={loginTableData}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
};

export default MainRoutes;
