import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";

import {Route,Routes} from 'react-router-dom'
import {AuthContextProvider} from './Context/AuthContext'



function App() {


  return (

  <div className="app">
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/logIn' element={<LogIn/>} />
      <Route path ='/signUp' element={<Signup/>} />
      <Route path ='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
      {/* <Route path ='/account' element={<Account/>} /> */}
    </Routes>
    </AuthContextProvider>

  </div>
  );
}

export default App;
