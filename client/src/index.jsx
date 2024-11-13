import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
        <Route>
            <App />
        </Route>
    </Routes>
</BrowserRouter>
);