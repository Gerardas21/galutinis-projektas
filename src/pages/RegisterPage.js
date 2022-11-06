import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';

function RegisterPage() {
    const navigate = useNavigate();
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is mandatory'),
        password: Yup.string()
            .required('Password is mandatory')
            .min(3, 'Password must be atleast 3 char long'),
        confirmPassword: Yup.string()
            .required('Password is mandatory')
            .oneOf([Yup.ref('password')], 'Passwords do not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    const Register = (details) => {
        const { email, password } = details;
        window.sessionStorage.setItem('user_email', JSON.stringify(email));
        window.sessionStorage.setItem('user_password', JSON.stringify(password));;
        navigate('/')
    };
    return (
        <div className="login-body d-flex flex-column">
            <div className="login-container pt-5 text-white bg-dark">
                <div className="d-flex mx-auto flex-column py-4 title-container">
                    <h1 className="text-center">Register using your email address</h1>
                </div>
                <Form onSubmit={handleSubmit(Register)}>
                    <Form.Group className="form-group" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="e.g., name@gmail.com"
                            {...register('email')}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        />
                    </Form.Group>
                    <Form.Group className="form-group" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            {...register('password')}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </Form.Group>
                    <Form.Group className="form-group" controlId="verifyPassword">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control
                            name="confirmPassword"
                            type="password"
                            {...register('confirmPassword')}
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        />
                        <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                    </Form.Group>
                    <Form.Group className="form-group py-4">
                        <Button type="submit" className="w-100 btn-secondary">
                            Register
                        </Button>
                    </Form.Group>
                </Form>
                <Button onClick={() => navigate('/')} className="w-100 btn-secondary">
                    Back
                </Button>
            </div>
        </div>
    );
}

export default RegisterPage;
