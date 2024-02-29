import UpdatePassword from "../pages/UpdatePassword";
import Login from "../pages/login";
import PasswordReset from "../pages/passwordreset";
import Signup from "../pages/signup";

const AUTH_ROUTES = [
  {
    title: "Login",
    Component: Login,
    path: "/login",
  },
  {
    title: "Create Account",
    Component: Signup,
    path: "/signup",
  },
  {
    title: "ResetPassword",
    Component: PasswordReset,
    path: "/resetpassword",
  },
  {
    title: "newpassword",
    Component: UpdatePassword,
    path: "/newpassword",
  },
];
export { AUTH_ROUTES };