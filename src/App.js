import logo from './logo.svg';
import './App.css';

import AppContext from "./context/AppContext";
import ListProduct from "./pages/product/list";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Home from './pages/home/home';
import Category from './pages/product/list/cate';
import CreateProduct from './pages/product/list/create'
import { Edit } from './pages/product/list/edit';


const globalState = [
    {
        name: 'IP12',
        price: 100
    },
    {
        name: 'IP13',
        price: 100
    }
]

function App() {
    return (
        <AppContext.Provider value={globalState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/product" element={<ListProduct />}/>
                    <Route path="/create" element={<CreateProduct/>}/>
                    <Route path="/edit/:index" element={<Edit />}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
