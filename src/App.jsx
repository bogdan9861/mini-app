import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";

function Layout({ children }) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Main />
      </Layout>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
