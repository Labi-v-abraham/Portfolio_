
import { ThemeProvider } from './components/ThemeProvider'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import SplashCursor  from './components/Cursor'





export default function App() {
  return (
    <ThemeProvider>
      <SplashCursor  SIM_RESOLUTION={96}
    DYE_RESOLUTION={2048}
    DENSITY_DISSIPATION={10}
    VELOCITY_DISSIPATION={2.5}
    PRESSURE={0}
    CURL={30}
    SPLAT_RADIUS={0.05}
    SPLAT_FORCE={1000}
    COLOR_UPDATE_SPEED={18}/>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}