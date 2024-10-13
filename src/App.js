import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
