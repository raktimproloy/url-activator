import Layouts from '@/src/layouts/Layouts';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import { useState } from 'react';

export default function Details({ price }) {
    const [selectedPayment, setSelectedPayment] = useState(price.currency === 'bdt' ? 'bikash' : 'stripe');
    const [loading, setLoading] = useState(false); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors

    // Function to handle the "Claim For Free" button click
    const handleClaimForFree = async () => {
        setLoading(true);
        setError(null);

        try {
            // Make the API call to activate the free package
            const response = await axios.put('/api/active_free', {
                slug: price.slug,
            });

            if (response.status === 200) {
                // Handle success (e.g., show a success message or redirect)
                // alert('Package claimed successfully!');
                // Optionally, you can redirect the user or update the UI
                Inertia.visit('/dashboard/url-management');
            } else {
                setError('Failed to claim the package. Please try again.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layouts pageTitle="Price Checkout">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {/* Left Side - Package Details */}
                    <div className="col-lg-4 col-md-6 col-sm-8">
                        <div className={`pricing-table m-t-30 ${price.theme_color === 'theme1' ? 'pricing-secondary-1' : ''}`}>
                            <div className="plan-title-area">
                                <h5 className="plan-name">{price?.tag}</h5>
                                <img src="assets/img/pricing/plan-icon.png" alt="Plan icon" className="plan-icon" />
                                <svg className="plan-shape">
                                    <path
                                        className="blob"
                                        d="M675.762,6280.79c27.519-33.95,38.271-67.86,19.8-107.55-44.452-95.53-192.815-73.8-213.55-32.81-19.531,38.6,77.819,48.49,80.344,152.05C563.555,6341.55,636.194,6329.6,675.762,6280.79Z"
                                        transform="translate(-479.406 -6105.56)"
                                    />
                                </svg>
                            </div>
                            <div className="plan-cost">
                                <span className="currency">{price.currency === 'usd' ? '$' : '৳'}</span>
                                <span className="price">{price.amount}</span>
                                <span className="plan-type">/ {price.duration === 'monthly' ? 'Monthly' : 'Yearly'}</span>
                            </div>
                            <ul className="plan-feature">
                                {price.include && price.include.length > 0 && price.include.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Payment Section */}
                    <div className="col-md-6">
                        <div className={`pricing-table m-t-30 ${price.theme_color === 'theme1' ? 'pricing-secondary-1' : ''}`}>
                            <h5 className="mb-3">Select Payment Method</h5>

                            <div className="d-flex gap-3">
                                {price.currency === 'bdt' ? (
                                    <label className={`w-50 rounded border p-3 text-center ${selectedPayment === 'bikash' ? 'border-primary' : ''}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="bikash"
                                            checked={selectedPayment === 'bikash'}
                                            onChange={() => setSelectedPayment('bikash')}
                                            className="d-none"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/3e/BKash-Logo.wine.svg"
                                            alt="Bkash"
                                            className="img-fluid"
                                            style={{ height: '50px' }}
                                        />
                                    </label>
                                ) : price.tag.toLowerCase() === 'free' ? (
                                    ''
                                ) : (
                                    <label className={`w-50 rounded border p-3 text-center ${selectedPayment === 'stripe' ? 'border-primary' : ''}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="stripe"
                                            checked={selectedPayment === 'stripe'}
                                            onChange={() => setSelectedPayment('stripe')}
                                            className="d-none"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Stripe_Logo%2C_revised_2016.svg"
                                            alt="Stripe"
                                            className="img-fluid"
                                            style={{ height: '50px' }}
                                        />
                                    </label>
                                )}
                            </div>

                            {price.tag.toLowerCase() === 'free' ? (
                                <div className="mt-4">
                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={handleClaimForFree}
                                        disabled={loading} // Disable the button while loading
                                    >
                                        {loading ? 'Claiming...' : 'Claim For Free'}
                                    </button>
                                    {error && <div className="text-danger mt-2">{error}</div>}
                                </div>
                            ) : (
                                <div className="mt-4">
                                    <button className="btn btn-primary w-100">
                                        <a href={`/payment/${price.slug}`}>Proceed to Payment</a>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
