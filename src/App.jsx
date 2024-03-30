import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contacto" component={Contact} />
            <Route path="/dentista/:id" component={Detail} />
            <Route path="/favs" component={Favs} />
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;
