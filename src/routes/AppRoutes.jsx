import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";

function AppRoutes(){
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={ <Navigate to="/resume-analyzer" />}/>
          <Route path="/resume-analyzer" element={<ResumeAnalyzer/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
export default AppRoutes;