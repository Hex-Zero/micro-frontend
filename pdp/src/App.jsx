import Footer from "home/Footer";
import Header from "home/Header";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
