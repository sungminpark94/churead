import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Post from "./pages/Post";

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-auto h-screen " >
      <div className="max-w-[572px] mx-auto h-full " >
        <div className="h-full flex flex-col justify-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="post" element={<Post />}/>

            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
