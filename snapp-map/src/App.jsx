import Map from './components/map';
import StatusPanel from "./components/StatusPanel";

function App() {
  return (
    <div className="h-screen relative font-iran-sans">
      <Map />
      <StatusPanel />
    </div>
    
  );
}

export default App;