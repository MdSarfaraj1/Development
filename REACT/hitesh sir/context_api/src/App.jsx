import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContexProvider'


function App() {

  return (
    <UserContextProvider>
     <Login/>
     <Profile/> 
    </UserContextProvider>
  )
}

export default App
