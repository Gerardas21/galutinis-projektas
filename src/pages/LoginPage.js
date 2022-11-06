import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const [details, setDetails] = useState({ email: '', password: '' });

    const LoginFunction = (details) => {
        const { email, password } = details;

        const email_from_session = JSON.parse(window.sessionStorage.getItem('user_email', JSON.stringify(email)));
        const password_from_session = JSON.parse(window.sessionStorage.getItem('user_password', JSON.stringify(password)));
        if (email === email_from_session && password === password_from_session) {
            navigate('/main')
        }
        else {
            // TBD
            // return (
            //     <h1 className="text-center">Bad login details</h1>
            // )
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        LoginFunction(details);
    };

    return (
        <div className="login-body d-flex flex-column">
            <div className="login-container pt-5 text-white bg-dark">
                <div className="d-flex mx-auto flex-column py-4 title-container">
                    <h1 className="text-center">Welcome to my web page</h1>
                    <span className="form-label text-center">Login with email address</span>
                </div>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="form-group" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g., name@gmail.com"
                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                            value={details.email}
                        />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                            value={details.password}
                        />
                    </Form.Group>
                    <Form.Group className="form-group py-4">
                        <Button type="submit" className="w-100 btn-secondary">
                            Login
                        </Button>
                    </Form.Group>
                </Form>
                <Button onClick={() => navigate('/register')} className="w-100 btn-secondary">
                    Register Here
                </Button>
            </div>
        </div>
    );
}

export default LoginPage;
