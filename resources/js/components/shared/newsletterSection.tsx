import axios from 'axios';
import React, { useState } from 'react';

export default function NewsletterSection() {
    const [formData, setFormData] = useState({
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/newsletter', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Message sent successfully!');
                // Optionally, reset the form
                setFormData({
                    email: '',
                });
            }
        } catch (error) {
            console.error('There was an error sending the message!', error);
            alert('Failed to send message. Please try again.');
        }
    };
    return (
        <div className="container">
            <div className="seo-score-box wow fadeInDown">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-md-10 col-11">
                        <div className="score-box-content">
                            <h2 className="score-box-title">
                            Stay Updated, Stay Live!
                            </h2>
                            <p> Subscribe to get the latest updates and keep your free hosting active without interruptions! </p>
                        </div>
                        <form className="score-box-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="emailAddress"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                />
                                <button type="submit" name="submit" className="template-btn secondary-bg">
                                    Subscribe <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="seo-images"></div>
            </div>
        </div>
    );
}
