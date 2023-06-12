import { Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Main } from "./pages/main";
import  User  from "./pages/user";
import Login from "./pages/login";
import SignIn from "./pages/signIn";

const App = () => (
  <>
    <Routes>
      <Route element={<Main />} path='/' />
      <Route element={<User />} path='/user'/>
      <Route element={<Login />} path='/login'/>
      <Route element={<SignIn />} path='/signin'/>
    </Routes>
    <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        transition={Slide}
    />
  </>

)

export default App;
