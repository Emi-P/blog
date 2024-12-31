import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Blog from '../pages/Blog'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/writeups/" element={<Blog/>}/>
            <Route path="/writeups/:postName" element={<Blog/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    )
}