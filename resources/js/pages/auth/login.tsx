import AuthLayout from '@/layouts/auth-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 mt-5">
                            <div className="card p-4">
                                <form onSubmit={submit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="far fa-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Email address"
                                                required
                                                autoFocus
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="far fa-lock"></i>
                                            </span>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                placeholder="Password"
                                                required
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <button
                                                className="btn btn-outline-secondary"
                                                style={{ borderLeft: '0px', border: '1px solid #dbdfea' }}
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                            >
                                                <i className={showPassword ? 'far fa-eye-slash' : 'far fa-eye'}></i>
                                            </button>
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember"
                                            checked={data.remember}
                                            onChange={() => setData('remember', !data.remember)}
                                        />
                                        <label className="form-check-label" htmlFor="remember">
                                            {' '}
                                            Remember me{' '}
                                        </label>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary" disabled={processing}>
                                            {processing && <span className="spinner-border spinner-border-sm me-2"></span>}
                                            Log In
                                        </button>
                                    </div>
                                </form>
                                {canResetPassword && (
                                    <div className="mt-3 text-center">
                                        <a href={route('password.request')}>Forgot your password?</a>
                                    </div>
                                )}
                                <div className="mt-3 text-center">
                                    <p>
                                        Don't have an account? <Link href="/register">Sign Up</Link>
                                    </p>
                                </div>
                                {status && <div className="alert alert-success mt-3 text-center">{status}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
};

export default Login;
