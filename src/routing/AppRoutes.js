import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PageNotFoundPage from '../pages/PageNotFoundPage';
import MainPage from '../pages/MainPage';

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
