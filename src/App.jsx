// import "./App.css";
import { Header } from "./components/ui/Header";
import { Homepage } from "./components/ui/Homepage";
import { Users } from "./components/ui/Users";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="users" element={<Users />}>
          <Route path="levi" element={<p>ini halaman levi</p>} />
          <Route path="mareta" element={<p>ini halaman mareta</p>} />
        </Route>
        <Route path="profile" element={<p>ini halaman profile</p>} />
      </Routes>
    </>
  );
}

export default App;
