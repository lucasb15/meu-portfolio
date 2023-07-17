import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Projetos from './Components/Projetos';
import Experiencia from './Components/Experiencia';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Sobre />
      <Projetos />
      <Experiencia />
      <Footer />
    </>
  );
}

export default App;
