import { Route, Routes } from "react-router-dom";
import PersonalLandingPage from "./pages/PersonalLandingPage.tsx";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<PersonalLandingPage />} />
  </Routes>
);

export default AppRoutes;
