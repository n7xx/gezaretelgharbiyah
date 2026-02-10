import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Categories from "./Categories/Categories";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";

import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "home",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          ),
        },
        {
          path: "login",
          element: (
            <AuthView>
              <Login />
            </AuthView>
          ),
        },
        {
          path: "register",
          element: (
            <AuthView>
              <Register />
            </AuthView>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          ),
        },
        {
          path: "contact",
          element: (
            <ProtectedRoutes>
              <Contact />
            </ProtectedRoutes>
          ),
        },

        {
          path: "*",
          element: (
            <ProtectedRoutes>
              <NotFound />
            </ProtectedRoutes>
          ),
        },

        // !Detalis Path
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />

      {/* git test  youssef elgendy test*/}
    </>
  );
}
export default App;
