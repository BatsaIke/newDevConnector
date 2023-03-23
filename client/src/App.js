import "./App.css";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/layout/Navbar.js";
import Landing from "./component/layout/Landing.js";
import Login from "./component/auth/Login.js";
import Register from "./component/auth/Register.js";
import Alert from "./component/layout/Alert.js";
import { loadUser } from "./actions/authActions.js";
import { useEffect } from "react";
import store from "./store.js";
import setAuthToken from "./utils/setAuthToken.js";
import Dashboard from "./component/dasboard/Dashboard.js";
import PrivateRoute from "./component/routes/PrivateRoute.js";
import CreateProfile from "./component/profile-form/CreateProfile.js";
import AddExperience from "./component/profile-form/AddExperience.js";
import AddEducation from "./component/profile-form/AddEducation.js";
import Profiles from "./component/profiles/Profiles.js";
import Profile from "./component/profile/Profile.js";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <>
      <Navbar />
      <Alert />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/profiles' element={<Profiles />} />
        <Route path='/:id' element={<Profile />} />

        <Route
          path='dashboard'
          element={<PrivateRoute component={Dashboard} />}
        />

        <Route
          path='create-profile'
          element={<PrivateRoute component={CreateProfile} />}
        />
        
        <Route
          path='add-experience'
          element={<PrivateRoute component={AddExperience} />}
        />
        <Route
          path='add-education'
          element={<PrivateRoute component={AddEducation} />}
        />
      </Routes>
    </>
  );
}

export default App;
