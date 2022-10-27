import React from "react";
import './App.css';
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Employees />
            <Footer />
        </div>
        );
    }
}

export default App;