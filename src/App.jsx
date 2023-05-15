import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Rating from './pages/Rating'
import Main from './pages/Main'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import RatingCompletion from './pages/RatingCompletion'
import File from './pages/File'
import Feed from './pages/Feed'
import FeedMain from './Feed/FeedMain'
import MoviesNews from './Feed/MoviesNews'
import MoviesPreview from './Feed/MoviesPreview'
import Protected from './utils/Protected'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route element={<Protected></Protected>}>
          <Route path='/' element={<Header></Header>}>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="rating" element={<Rating></Rating>}></Route>
            <Route path="rating-completion" element={<RatingCompletion></RatingCompletion>}></Route>
            <Route path="file" element={<File></File>}></Route>
            <Route path="feed" element={<Feed></Feed>}>
              <Route index element={<FeedMain></FeedMain>}></Route>
              <Route path='news' element={<MoviesNews></MoviesNews>}></Route>
              <Route path='preview' element={<MoviesPreview></MoviesPreview>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App