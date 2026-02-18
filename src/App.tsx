import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ArtCategories from './components/ArtCategories'
import Gallery from './components/Gallery'
import Artists from './components/Artists'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <main>
        <Hero />
        <ArtCategories />
        <Gallery />
        <Artists />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App

