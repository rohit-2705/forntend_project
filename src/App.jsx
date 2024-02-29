
import { Routes, Route, matchRoutes } from "react-router-dom";
import signup from "./pages/signup";
import login from "./pages/login";
import resetpassword from "./pages/resetpassword";
import newpassword from "./pages/newpassword";
import { useAuthContext } from "./Context/Authcontext";
import { AUTH_ROUTES } from "./configs/routes";
import home from "./pages/home";

function App() {
  //const { isLoggedIn, decodedToken = {} } = useAuthContext();
  return (
    
   //{//AUTH_ROUTESUTH_ROUTES.map(routes)}
    //{//isLoggedIn && }
   // {//isLoggedIn && }
    <Routes>
    <Route Component={login} path="/" />
    <Route Component={home} path="/home" />
    <Route Component={signup} path="/signup" />
    <Route Component={resetpassword} path="/resetpassword" />
    <Route Component={newpassword} path="/newpassword" />
    </Routes>
  );
}

export default App;