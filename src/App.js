import './index.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
        <Header />
        <Nav />
        <Main />
        <footer className="footer">
            <p>copyright &copy; 2023. yogurrr. All Rights Reserved.</p>
        </footer>
    </div>
  );
}

export default App;
