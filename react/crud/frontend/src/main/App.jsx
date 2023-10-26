import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react";
import './App.css';
import Logo from "../components/templates/Logo";
import Footer from "../components/templates/Footer";
import Nav from "../components/templates/Nav";
import { BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>