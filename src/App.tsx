import { useState } from 'react'
import './App.css'
import Welcomer from './components/welcomer'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Welcomer />
        <Footer />
    </>
  )
}

export default App
