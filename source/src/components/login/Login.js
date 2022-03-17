/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import custom components.
import Nav from "../nav/Nav";
import LoginForm from "./LoginForm";
/**
 * create Login component.
 */
function Login() {
  return (
    <div className="main">
      {/* Nav */}
      <Nav />
      {/* End Nav */}
      {/* Login Form */}
      <LoginForm />
      {/* End Login Form */}
    </div>
  );
}
// export Login component.
export default Login;
