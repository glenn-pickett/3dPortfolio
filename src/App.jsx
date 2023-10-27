import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Video from "./components/Video";
//import { VFXProvider } from "react-vfx";
const App = () => {
  let useAllEffects = !true;
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About useAllEffects={useAllEffects} />
        <Experience useAllEffects={useAllEffects} />
        <Tech />
        <Works />
        <Video />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      Glenn Pickett Portfolio
    </BrowserRouter>
  )
}

export default App
