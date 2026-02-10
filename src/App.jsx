import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
      

import LayOut from "./Components/LayOut/LayOut";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Offers from "./Components/Offers/Offers";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import NotFound from "./Components/NotFound/NotFound";

/* Following are the components used in the Home page sections: */
import HeroSection from "./Components/Home/HeroSection/HeroSection";
import FeaturesSection from "./Components/Home/FeaturesSection/FeaturesSection";
import OffersSection from "./Components/Home/OffersSection/OffersSection";
import ProductsPreview from "./Components/Home/ProductsPreview/ProductsPreview";
import DeliverySection from "./Components/Home/DeliverySection/DeliverySection";
import CTASection from "./Components/Home/CtaSection/CtaSection";
import TestimonialsSection from "./Components/Home/TestimonialsSection/TestimonialsSection";





function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: (
            
              <Home />
          
          ),
        },
        {
          path: "cart",
          element: (
            
              <Cart />
          
          ),
        },
        {
          path: "products",
          element: (
            
              <Products />
          
          ),
        },
        {
          path: "offers",
          element: (
            
              <Offers />
          
          ),
        },
        {
          path: "about",
          element: (
            
              <About />
          
          ),
        },
        {
          path: "contactUs",
          element: (
            
              <ContactUs />
          
          ),
        },

        {
          path: "*",
          element: (
            
              <NotFound />
          
          ),
        },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />


  
      {/* git test  youssef elgendy test  */}
    </>
  );
}
export default App;
