import { Inertia } from '@inertiajs/inertia';
import { useEffect, useState } from 'react';

export default function Success({ session }) {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {

        // Countdown timer for automatic redirection
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    Inertia.visit(`/dashbaord/invoice/view/${session.invoice}`);
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, [session]);

    return (
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="card mx-auto p-4 text-center shadow-lg" style={{ maxWidth: '500px' }}>
                    <h1 className="text-success mb-4">🎉 Payment Successful!</h1>
                    <p className="lead">Thank you for your purchase.</p>
                    <p className="text-muted">You will be redirected to your invoice in {countdown} seconds.</p>

                    <div className="d-grid mt-4 gap-3">
                        <button className="btn btn-primary" onClick={() => Inertia.visit('/dashboard')}>
                            Go to Dashboard
                        </button>
                        <button className="btn btn-outline-success" onClick={() => Inertia.visit(`/dashbaord/invoice/view/${session.invoice}`)}>
                            View Invoice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
