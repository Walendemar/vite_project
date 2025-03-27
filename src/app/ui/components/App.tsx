import '../css/App.css';
import RoutesRoot from './Routes.tsx';
import NavBar from '../../../widgets/navbar/NavBar.tsx';

const App = () => {
  return (
    <div className="flex vertical gap-lg">
      <NavBar />
      <RoutesRoot />
    </div>
  );
};

export default App;
