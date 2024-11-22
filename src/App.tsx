// import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppRouter />
  )
}

export default App
