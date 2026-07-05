import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/layout/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Browse } from './pages/Browse/Browse';
import { PetDetail } from './pages/PetDetail/PetDetail';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { Profile } from './pages/Profile/Profile';

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/pet/:petIdentifier" element={<PetDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
