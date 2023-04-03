import React from "react";
import Helmet from "react-helmet";
import { ToastContainer } from "react-toastify";
import Routers from "../routes";
const App = () => {
  return (
    <>
      <Helmet>
        <title>life-care</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ToastContainer
        autoClose={3000}
        pauseOnHover={false}
        position="top-center"
      />
      <Routers />
    </>
  );
};

export default App;
