import {Route, Routes} from 'react-router-dom'
import {Feed} from '../pages/Feed'
import { Profile } from '../pages/Profile'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Feed/>}/>
      <Route path='profile' element = { <Profile/> } />
    </Routes>
  )
}

export {AppRoutes}