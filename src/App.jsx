import React from "react";
import GlobalSytle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import { Switch, Route, useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalSytle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={MovieDetail} path="/work/:id" exact />
          <Route component={OurWork} path="/work" />
          <Route component={ContactUs} path="/contact" />
          <Route component={AboutUs} path="/" exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
