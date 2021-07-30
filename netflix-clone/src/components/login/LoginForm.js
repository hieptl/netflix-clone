/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import react.
import { useState } from "react";
// import firebase authentication.
import { firebaseAuth } from "../../firebase/firebase";
/**
 * create LoginForm component.
 */
function LoginForm() {
  // create email and password state to store user's credentials.
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  /**
   * handle event when the user clicks on "Login" button.
   */
  const login = () => {
    // call firebase authentication service.
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(`signed in user`);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * update email state when the user inputs the email field.
   * @param {*} e - synthetic event to get the latest email's value.
   */
  const onEmailChanged = (e) => {
    // get email value.
    const updatedEmail = e.target.value;
    // update email state.
    setEmail(() => updatedEmail);
  };

  /**
   * update password state when the user input the password field.
   * @param {*} e - synthetic event to get the latest password's value.
   */
  const onPasswordChanged = (e) => {
    // get password value.
    const updatedPassword = e.target.value;
    // update password state.
    setPassword(() => updatedPassword);
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Sign In</h1>
        <div className="login-body__input mb-16">
          <input
            type="text"
            placeholder="Email or phone number"
            onChange={onEmailChanged}
          />
        </div>
        <div className="login-body__input">
          <input
            type="password"
            placeholder="Password"
            onChange={onPasswordChanged}
          />
        </div>
        <button className="login-body__submit-btn" onClick={login}>
          Sign In
        </button>
        <div className="login-body__options">
          <span>Remember me</span>
          <span className="login-body__need-help">Need help?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              alt="fb"
            />
            <span>Login with Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>New to Netflix ?</span>
            <span className="login-body__sign-up">Sign up now.</span>
          </div>
          <div className="login-body__google_captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <span className="login-body__learn-more">Learn more.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
// export LoginForm component.
export default LoginForm;
