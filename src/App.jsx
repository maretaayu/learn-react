// import "./App.css";
import { DetailUser } from "./components/ui/DetailUser";
import { Header } from "./components/ui/Header";
import { Homepage } from "./components/ui/Homepage";
import { Users } from "./components/ui/Users";
import { Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { ProtectedRoutes } from "./components/ui/ProtectedRoutes";
function App() {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Homepage />,
  //   },
  //   {
  //     path: "/profile",
  //     element: <p>ini halaman profile</p>,
  //   },
  //   {
  //     path: "/users",
  //     element: <Users />,
  //     children: [
  //       {
  //         path: "levi",
  //         element: <p>ini halaman levi</p>,
  //       },
  //       {
  //         path: "mareta",
  //         element: <p>ini halaman mareta</p>,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      <Header />
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="users" element={<Users />}>
          <Route path=":username" element={<DetailUser />} />
          {/* <Route path="levi" element={<p>ini halaman levi</p>} /> */}
          {/* <Route path="mareta" element={<p>ini halaman mareta</p>} /> */}
        </Route>
        <Route
          path="profile"
          element={
            <ProtectedRoutes>
              <p>ini halaman profile</p>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
