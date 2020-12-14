import React from "react";
import "./App.css";
import Search from "./Components/search";
import Playlisten from "./Playlisten";
import Show from "./show";
import atunesModel from "./atunesModel";
import Homepage from "./Components/homepage";
import fire from "./services/firebase";

function App() {
  const model = new atunesModel();

  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "autth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  function testing(user) {
    if (user) {
      clearInputs();
      setUser(user);
      //model.setUser(user.uid);
      // model.setUser("aaa");
      //console.log("I app js");
      //console.log(model.userID);
    } else {
      setUser("");
    }
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => testing(user));
  };

  /*
const authListener = () => {
	fire.auth().onAuthStateChanged((user) => {
	if (user) {
    console.log(user)
    clearInputs();
    setUser(user);
    //model.setUser(user.uid);
    model.setUser("aaa");
    console.log("I app js");
    console.log(model.userID);
    console.log(user)
	} else {
		setUser("");
	}
	});
}; */

  React.useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          {alert("Welcome you are now logged in!")}
          <nav>
            <div className="nav-wrapper grey">
              <center>
                <a href="#" className="brand-logo">
                  MeloTunes
                </a>
              </center>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#homepage" onClick={() => handleLogout()}>
                    Logout
                  </a>
                </li>
                <li>
                  <a href="#search">Search</a>
                </li>
                <li>
                  <a href="#playlist">Playlist</a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Show hash="#search">
              <Search atunesModel={model} />{" "}
            </Show>
          </div>
          <div>
            <Show hash="#playlist">
              <Playlisten atunesModel={model} />{" "}
            </Show>
          </div>
        </div>
      ) : (
        <div>
          <nav>
            <div className="nav-wrapper grey">
              <center>
                <a href="#" className="brand-logo">
                  MeloTunes
                </a>
              </center>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#homepage">Homepage</a>
                </li>
                <li className="disabled">
                  <a href="#search">Search</a>
                </li>
                <li className="disabled">
                  <a href="#playlist">Playlist</a>
                </li>
              </ul>
            </div>
          </nav>
          <Show hash="#homepage">
            <Homepage
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}
            />{" "}
          </Show>
        </div>
      )}
    </div>
  );
}

export default App;
