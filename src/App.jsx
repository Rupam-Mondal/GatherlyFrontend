import { Button } from "@/components/ui/button"
import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth"
import SignUpCard from "./components/organisms/SingnUpcard"
import SignInCard from "./components/organisms/Signincard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Notfound } from "./pages/Nofoundpage"
import Home from "./pages/Home/Home"
import { AppcontextProvider } from "./context/AppContext"
import { ProtectedRoute } from "./components/molecules/ProtectedRoutes"
import { Toaster } from "./components/ui/toaster"
import Modals from "./components/molecules/Modals"
function App() {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <AppcontextProvider>
        <Routes>
          <Route path="/auth/signup" element={<Auth><SignUpCard /></Auth>} />
          <Route path="/auth/signin" element={<Auth><SignInCard /></Auth>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Toaster/>
        <Modals/>
        </AppcontextProvider>
      </QueryClientProvider>
  )
}

export default App
