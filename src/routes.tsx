import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import ListUsersPage from './pages/ListUsers'
import DetailsPage from './pages/Details'


const Application: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list_users" element={<ListUsersPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
