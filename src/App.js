
import './App.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import BgImage from './assets/img/background/background.webp'

//components
import MyNavbar from "./components/navbar/myNavbar.component";
import MyCarousel from "./components/carousel/myCarousel.component";
import MyTitle from "./components/MainTitle/myTitle.component";
import SobreMi from "./pages/sobremi/sobremi.component";
import Herramientas from "./pages/herramientas/misHerramientas.component"
import Formacion from './pages/formacion/miFormacion.component';
import ProjectTimeline from './components/projects-timeline/projects-timeline.component'
import Contacto from './pages/contacto/contacto.component'
import Footer from './components/footer/footer.component'
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

const App= ()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
      
      <MyNavbar/>
      <MyCarousel/>
      <MyTitle />
      { <Particles className="particles particles-box" params={particlesOptions}/>}

      <div>
      <Parallax blur={{ min: -30, max: 30 }}bgImage={BgImage}bgImageAlt=""strength={-200}>
      <Container className="container-box rounded">
      <Fade duration={500}>
      <SobreMi />
      </Fade>
      </Container>
      </Parallax>
      </div>

      {/*Herramientas*/}
      <div>
      
      <Container className="container-box rounded">
         <Slide duration={500}>
           <Herramientas/>
         </Slide>
       </Container>
      </div>
      
      
      {/*Formacion*/}
      <div>
      
      <Container className="container-box rounded">
          <Fade duration={500}>
            <Formacion />
          </Fade>
      </Container>
      </div>

       {/*Proyectos*/}
       <div>
      
      <Container className="container-box rounded">
         <Slide duration={500}>
           <ProjectTimeline/>
         </Slide>
       </Container>
      </div>

      {/*Contacto*/}
      <div>
      
      <Container className="container-box rounded">
          <Fade duration={500}>
            <Contacto />
          </Fade>
      </Container>
      </div>

     {/*Footer*/}
     <div>
      
      <Container className="container-box rounded">
         <Slide duration={500}>
           <Footer/>
         </Slide>
       </Container>
      </div>


    </div>

    
  );
}

export default App;
