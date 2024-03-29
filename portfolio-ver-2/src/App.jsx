import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Work.jsx'

function App() {
  return (
    <div className="App">
      <Home/>
      <Projects/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;