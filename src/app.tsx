import { Homepage } from 'pages/homepage'
import { Routes, Route } from 'react-router-dom'
import { Login } from 'shared/login'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage formElement={<Login />} />} />
    </Routes>
  )
}
export { App }
