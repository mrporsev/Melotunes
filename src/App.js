import React from "react";
import "./App.css";
import Search from "./Components/search";
import Playlisten from "./Views/Playlisten";
import Show from "./show";
import atunesModel from "./atunesModel";
import Homepage from "./Views/homepage";
import fire from "./services/firebase";
import AboutUs from "./Views/homepageLogin";
import Reviews from "./Views/reviews"
import AllMyPlayLists from "./Views/AllMyPlaylists"

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
            <div className="nav-wrapper grey darken-3">
              <center>
                <a href="#homepage" className="brand-logo">
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
                  <a href="#playlist">Shop</a>
                </li>
                <li>
                  <a href="#myPlaylists">My Playlists</a>
                </li>
                <li>
                <a href="#reviews">Reviews</a>
                </li>
              </ul>
            </div>
          </nav>
          <div> 
          <Show hash="#homepage">
            <AboutUs />
          </Show>
          </div>
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
          <div>
            <Show hash="#myPlaylists">
              <AllMyPlayLists atunesModel={model} />{" "}
            </Show>
          </div>
          <div>
          <Show hash="#reviews">
              <Reviews />
            </Show>
          </div>
<footer className="page-footer" className="page-footer grey">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">MeloTunes</h5>
                <br></br>
                <p className="grey-text text-lighten-4"> Providing Tunes 4 u </p>
                
             <div></div>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#search">Search</a></li>
                  <li><a className="grey-text text-lighten-3" href="#playlist">Basket</a></li>
                  <li><a className="grey-text text-lighten-3" href="#myPlaylists">My Playlists</a></li>
                  <li><a className="grey-text text-lighten-3" href="#homepage">Learn more about us</a></li>
                  <li><a className="grey-text text-lighten-3" href="#reviews">Customer reviews</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright MeloTunes
            </div>
          </div>
        </footer>
        </div>
      ) : (
        <div>
          <nav>
            <div className="nav-wrapper grey darken-3">
              <center>
                <a href="#homepage" className="brand-logo">
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
                  <a href="#playlist">Shop</a>
                </li>
                <li className="disabled">
                  <a href="#myPlaylists">My Playlists</a>
                </li>
                <li>
                <a href="#reviews">Reviews</a>
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
          <div>
          <Show hash="#reviews">
              <Reviews />
            </Show>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
