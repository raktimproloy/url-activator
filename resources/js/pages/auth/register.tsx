import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SignUp = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create Your Account" description="Enter your details below to sign up">
            <Head title="Sign Up" />
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="mt-5">
                            <div className="card p-4">
                                <form className="d-flex flex-column gap-3" onSubmit={submit}>
                                    {/* <h4 className="text-center mb-3">Create Your Account</h4> */}
                                    {/* <InputGroup>
                                        <InputGroup.Text><i className="far fa-user"></i></InputGroup.Text>
                                        <Form.Control
                                            id="username"
                                            type="text"
                                            required
                                            autoComplete="username"
                                            value={data.username}
                                            onChange={(e) => setData('username', e.target.value)}
                                            disabled={processing}
                                            placeholder="Username"
                                        />
                                    </InputGroup>
                                    <InputError message={errors.username} /> */}

                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className="far fa-user"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            id="name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            disabled={processing}
                                            placeholder="Full Name"
                                        />
                                    </InputGroup>
                                    <InputError message={errors.name} />

                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className="far fa-envelope"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            id="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            disabled={processing}
                                            placeholder="Email Address"
                                        />
                                    </InputGroup>
                                    <InputError message={errors.email} />

                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className="far fa-lock"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            style={{ height: '100%' }}
                                            required
                                            autoComplete="new-password"
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            disabled={processing}
                                            placeholder="Password"
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            style={{ borderLeft: '0px', border: '1px solid #dbdfea' }}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showPassword ? <EyeOff /> : <Eye />}
                                        </Button>
                                    </InputGroup>
                                    <InputError message={errors.password} />

                                    <InputGroup>
                                        <InputGroup.Text>
                                            <i className="far fa-lock"></i>
                                        </InputGroup.Text>
                                        <Form.Control
                                            id="password_confirmation"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            style={{ height: '100%' }}
                                            required
                                            autoComplete="new-password"
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            disabled={processing}
                                            placeholder="Confirm Password"
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            style={{ borderLeft: '0px', border: '1px solid #dbdfea' }}
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                                        </Button>
                                    </InputGroup>
                                    <InputError message={errors.password_confirmation} />

                                    <Button type="submit" className="justify-content-center mt-2 w-100" disabled={processing}>
                                        {processing && <LoaderCircle className="me-2 h-4 w-4 animate-spin" />}
                                        Create Account
                                    </Button>

                                    <div className="text-muted mt-3 text-center">
                                        Already have an account? <TextLink href={route('login')}>Log in</TextLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
};

export default SignUp;
