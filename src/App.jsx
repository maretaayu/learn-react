// import "./App.css";
import { DetailUser } from "./components/ui/DetailUser";
import { Header } from "./components/ui/Header";
import { Homepage } from "./components/ui/Homepage";
import { Users } from "./components/ui/Users";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/ui/ProtectedRoutes";
import { HStack, Box, Button, Heading } from "@chakra-ui/react";

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
      <Button variant="outline">Button Teal</Button>
      <Box bgColor="red.100" md={{ bgColor: "blue.500" }}>
        <Heading as="h2">Chakra UI</Heading>
      </Box>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
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
