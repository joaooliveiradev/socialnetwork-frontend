import { Homepage } from 'pages/homepage'
import { Routes, Route } from 'react-router-dom'
import { Login } from 'shared/login'
import { SignUp } from 'shared/signup'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage formElement={<Login />} />} />
      <Route path="/signup" element={<Homepage formElement={<SignUp />} />} />
    </Routes>
  )
}
export { App }
