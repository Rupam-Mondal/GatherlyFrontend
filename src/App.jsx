import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AppcontextProvider } from "./context/AppContext"
import { Toaster } from "./components/ui/toaster"
import Modals from "./components/molecules/Modals"
import Routing from "./Routes/Routing"
import UpdateChannelModal from "./components/molecules/UpdateChannelModal"
function App() {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
        <AppcontextProvider>
        <Routing/>
        <Toaster/>
        <Modals/>
        </AppcontextProvider>
      </QueryClientProvider>
  )
}

export default App
