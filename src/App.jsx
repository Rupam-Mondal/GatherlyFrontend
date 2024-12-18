import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth"
import SignUpCard from "./components/organisms/SingnUpcard"
import SignInCard from "./components/organisms/Signincard"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth/signup" element={<Auth><SignUpCard/></Auth>}/>
        <Route path="/auth/signin" element={<Auth><SignInCard /></Auth>} />
      </Routes>
    </div>
  )
}

export default App
