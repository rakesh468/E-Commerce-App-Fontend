import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

//screens//
import { Homescreen } from "./Screens/Homescreen";
import { Productscreen } from "./Screens/Productscreen";
import { Home } from "./components/Home";

//Navbar//
import { Navbar } from "./components/Navbar";
import { Backdrop } from "./components/Backdrop";
import { Sidedrawer } from "./components/Sidedrawer";

//user//
import { Login } from "./User/Login";
import { Resetpassword } from "./User/Resetpassword";
import { Forgotpassword } from "./User/Forgotpassword";
import { Signup } from "./User/Signup";
import { Addproduct } from "./User/Addproduct";
import { Editproduct } from "./User/Editproduct";

function App() {
  const [sidetoggle, setsidetoggle] = useState(false);
  return (
    <Router>
      <Navbar click={() => setsidetoggle(true)} />
      <Sidedrawer show={sidetoggle} click={() => setsidetoggle(false)} />
      <Backdrop show={sidetoggle} click={() => setsidetoggle(false)} />
      <main>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addproduct">
            <Addproduct />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/products">
            <Homescreen />
          </Route>
          <Route exact path="/products/:id">
            <Productscreen />
          </Route>
          <Route exact path="/edit/:id">
            <Editproduct />
          </Route>
          <Route exact path="/forgotpassword">
            <Forgotpassword />
          </Route>
          <Route exact path="/resetpassword">
            <Resetpassword />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
