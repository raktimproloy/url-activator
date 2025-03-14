// Components
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Spinner } from 'react-bootstrap';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <AuthLayout title="Forgot Password" description="Enter your email to receive a password reset link">
            <Head title="Forgot Password" />

            {status && <div className="alert alert-success text-center">{status}</div>}

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="">
                        <form onSubmit={submit} className="card p-4 shadow-sm">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    autoComplete="off"
                                    value={data.email}
                                    autoFocus
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="email@example.com"
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="d-grid mb-3">
                                <button type="submit" className="btn btn-primary" disabled={processing}>
                                    {processing && <Spinner animation="border" size="sm" className="me-2" />}
                                    Email password reset link
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-3">
                            <span>Or, return to </span>
                            <a href={route('login')} className="text-decoration-none">log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}