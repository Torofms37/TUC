import { ModalGlobal } from './ui/ModalGlobal'
import './App.css'
import { ButtonAuth } from './ui/ButtonAuth';
import { ContainerLanding } from './ui/ContainerLanding';

function App() {

  return (
    <div className="app">
      <ContainerLanding />
      <ButtonAuth />
      <ModalGlobal />
    </div>
  )
}

export default App;