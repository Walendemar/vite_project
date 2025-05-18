import '@app/ui/css/App.scss';
import RoutesRoot from '@app/ui/components/Routes';
import NavBar from '@widgets/navbar/NavBar.tsx';

const App = () => {
  return (
    <div className="flex vertical gap-lg">
      <NavBar />
      <RoutesRoot />
    </div>
  );
};

export default App;
