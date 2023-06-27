import React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Header from "./CommonCompo/Header";
import Header from "./CommonComponent/HeaderComponent";
import Footer from "./CommonComponent/FooterComponent";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PropartyPage from "./Pages/PropartyPage.jsx";
import Testimonial from "./Pages/Testimonial";
// import Contact from "./Pages/Contact";

// const AdminUser = React.lazy(() => import("./Admin/AdminRouter.jsx"))

const MainRouter = createBrowserRouter([

  // {
  //   path: "/",
  //   element: (
  //     <>
  //       <Header />
  //       {/* <Home /> */}
  //     </>
  //   ),
  // },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />

      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/proparty",
    element: (
      <>
        <Header />
        <PropartyPage />
        <Footer />
      </>
    ),
  }, {
    path: "/testimonial",
    element: (
      <>
        <Header />
        <Testimonial />
        <Footer />
      </>
    ),
  }
  // , {
  //   path: "/contact",
  //   element: (
  //     <>
  //       <Header />
  //       <Contact />
  //       <Footer />
  //     </>
  //   ),
  // }
]);

export default MainRouter;
