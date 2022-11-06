import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.css';

function MainPage() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("")
    const removeSessionStorage = () => {
        window.sessionStorage.removeItem('user_email');
        window.sessionStorage.removeItem('user_password');
        navigate('/')
    };
    useEffect(() => {
        setUserEmail(JSON.parse(window.sessionStorage.getItem('user_email')))
    }, []);

    return (
        <div className="login-body text-white">
            <Container className="py-5">
                <h1>Hello {userEmail}</h1>
                <h1>This is the main page!</h1>
            </Container>
            <div className="login-container pt-5 bg-dark">
                <Button onClick={() => removeSessionStorage()} className="w-100 btn-secondary">
                    Logout
                </Button>
            </div>
        </div>
    );
}

export default MainPage;
