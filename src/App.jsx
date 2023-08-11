import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { VFXProvider } from "react-vfx";
const App = () => {

  return (
    <BrowserRouter>
      <VFXProvider>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      Glenn Pickett Portfolio
      </VFXProvider>
    </BrowserRouter>
  )
}

export default App
