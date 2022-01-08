import { Homepage } from 'pages/homepage'
import { Routes, Route } from 'react-router-dom'
import { Login } from 'shared/login'
import { SignUp } from 'shared/signup'
import { Forgot } from 'shared/forgot'
import { Reset } from 'shared/reset'
import { Verification } from 'shared/verification'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage formElement={<Login />} />} />
      <Route path="/signup" element={<Homepage formElement={<SignUp />} />} />
      <Route path="/forgot" element={<Homepage formElement={<Forgot />} />} />
      <Route path="/verification" element={<Homepage formElement={<Verification />} />} />
      <Route path="/reset" element={<Homepage formElement={<Reset />} />} />
    </Routes>
  )
}
export { App }
