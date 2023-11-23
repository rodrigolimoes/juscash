import { lazy, Suspense } from "react";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
const Login = lazy(() => import("./pages/Login/Login"));
const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <Suspense>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route element={<RequireAuth />}>
                  <Route path="/" element={<Home />} />
                </Route>
              </Routes>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
