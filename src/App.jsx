import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}/>
      </Routes>
    </div>
  )
}

export default App
