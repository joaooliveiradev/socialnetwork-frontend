import { Homepage } from 'pages/homepage'
import { Routes, Route } from 'react-router-dom'
import { Login } from 'shared/login'
import { SignUp } from 'shared/signup'
import { Forgot } from 'shared/forgot'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage formElement={<Login />} />} />
      <Route path="/signup" element={<Homepage formElement={<SignUp />} />} />
      <Route path="/forgot" element={<Homepage formElement={<Forgot />} />} />|
    </Routes>
  )
}
export { App }
