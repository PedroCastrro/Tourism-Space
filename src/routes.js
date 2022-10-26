import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Destination" element={<Destination />} />
            <Route path="/Crew" element={<Crew />} />
            <Route path="/Technology" element={<Technology />} />
        </Routes>
    );
}