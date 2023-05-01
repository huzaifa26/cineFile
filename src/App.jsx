import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Rating from './pages/Rating'
import Main from './pages/Main'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/' element={<Header></Header>}>
          <Route path="rating" element={<Rating></Rating>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App