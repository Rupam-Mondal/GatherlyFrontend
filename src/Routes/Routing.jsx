import { ProtectedRoute } from "@/components/molecules/ProtectedRoutes";
import SignInCard from "@/components/organisms/Signincard";
import SignUpCard from "@/components/organisms/SingnUpcard";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home/Home";
import Joinpage from "@/pages/Joinpage/Joinpage";
import { Notfound } from "@/pages/Nofoundpage";
import Workspacepage from "@/pages/Workspace/Workspace";
import { Route, Routes } from "react-router-dom";

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/auth/signup" element={<Auth><SignUpCard /></Auth>} />
                <Route path="/auth/signin" element={<Auth><SignInCard /></Auth>} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path='/home/workspace/:workspaceId' element={<ProtectedRoute><Workspacepage /></ProtectedRoute>} />
                <Route path="/home/workspace/:workspaceId/join/:joincode" element={<ProtectedRoute><Joinpage /></ProtectedRoute>} />
                <Route path="/*" element={<Notfound />} />
            </Routes>
        </>
    )
}

export default Routing;