import Demo from './components/Demo'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app min-h-screen'>
          <Hero />
          <Demo />
          <Footer />
        </div>
    </main>
  )
}

export default App
