import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Rating from './pages/Rating'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header></Header>}>
          <Route path="rating" element={<Rating></Rating>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
