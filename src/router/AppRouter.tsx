import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import About from '../pages/About'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/writeups" element/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}