// import { useState } from 'react'
import './App.css'
import Welcomer from './components/welcomer'
import Footer from './components/footer'
import Emibox from './components/emibox'
import SectionList from './components/section-list'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <Welcomer />
        <SectionList />
        <Footer />
    </>
  )
}

export default App
