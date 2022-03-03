import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Links from './pages/Links';
import Error from './pages/Error';

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Links" element={<Links />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp;