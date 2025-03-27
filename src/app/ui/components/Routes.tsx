import { Route, Routes } from 'react-router';
import Settings from '../../../pages/settings/Settings.tsx';
import Main from '../../../pages/main/Main.tsx';

const RoutesRoot = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default RoutesRoot;
