import './App.css';
import Background from './components/bg';
import RoomMenu from'./components/roomMenu';

function App() {

  return (
    <div className='h-screen w-screen relative overflow-hidden font-montserrat relative'>
      <Background />
      <RoomMenu />
    </div>
  )
}

export default App
