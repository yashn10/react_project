import React from "react";
import { Route, Routes } from "react-router-dom";
import HelloWorld from "../pages/project1/HelloWorld";
import Crud from "../pages/project2/Crud";

const ProjectsRoutes = ({ loginTableData, setLoginTableData }) => {
  return (
    <div>
      <Routes>
        <Route path="/hello_world" element={<HelloWorld />} />
        <Route
          path="/crud_operation"
          element={
            <Crud
              loginTableData={loginTableData}
              setLoginTableData={setLoginTableData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default ProjectsRoutes;
