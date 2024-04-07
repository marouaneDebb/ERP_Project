import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const { userLoggedIn } = useAuth();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
            }
            setIsRegistering(false);
        }
    };

    return (
        <>
            {userLoggedIn && <Redirect to="/ERP_Project/dashBoard" replace={true} />}

            <main className="container d-flex align-items-center justify-content-center min-vh-100">
                <div className="w-70 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create a New Account</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="form-floating">
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-floating">
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="form-floating">
                            <input
                                id="confirmPassword"
                                type="password"
                                autoComplete="off"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>

                        {errorMessage && <span className="text-danger">{errorMessage}</span>}

                        <button
                            type="submit"
                            disabled={isRegistering}
                            className={`btn btn-primary ${isRegistering ? 'disabled' : ''}`}
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="text-center">
                            Already have an account? {'   '}
                            <Link to="/ERP_Project/logIn" className="text-sm font-bold">
                                Continue
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
