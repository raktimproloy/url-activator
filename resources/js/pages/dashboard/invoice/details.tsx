import AppLayout from '@/layouts/app-layout';
import { faArrowLeft, faCalendar, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { usePage } from '@inertiajs/react';

export default function Details({ subscription, price }) {
    const user = usePage().props.auth.user;

    return (
        <AppLayout>
            <div className="nk-content">
                <div className="container-fluid">
                    <div className="nk-content-inner">
                        <div className="nk-content-body">
                            {/* Header Section */}
                            <div className="nk-block-head">
                                <div className="nk-block-between g-3">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title page-title">
                                            Invoice <strong className="text-primary small">#{subscription.invoice_id}</strong>
                                        </h3>
                                        <div className="nk-block-des text-soft">
                                            <ul className="list-inline">
                                                <li>
                                                    <FontAwesomeIcon icon={faCalendar} className="me-1" />
                                                    Created At:{' '}
                                                    <span className="text-base">{new Date(subscription.created_at).toLocaleDateString()}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="nk-block-head-content">
                                        <a href={route('dashboard.invoice')} className="btn btn-outline-light d-none d-sm-inline-flex bg-white">
                                            <FontAwesomeIcon icon={faArrowLeft} className="me-1" />
                                            <span>Back</span>
                                        </a>
                                        <a href="/dashboard/invoice/list" className="btn btn-icon btn-outline-light d-inline-flex d-sm-none bg-white">
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Invoice Section */}
                            <div className="nk-block">
                                <div className="invoice">
                                    {/* Print Button */}
                                    <div className="invoice-action">
                                        <a
                                            className="btn btn-icon btn-lg btn-white btn-dim btn-outline-primary"
                                            href={`/dashboard/invoice/${subscription.id}/print`}
                                            target="_blank"
                                        >
                                            <FontAwesomeIcon icon={faPrint} />
                                        </a>
                                    </div>

                                    {/* Invoice Content */}
                                    <div className="invoice-wrap">
                                        {/* Brand Logo */}
                                        <div className="invoice-brand text-center">
                                            <img src="/images/logo-dark.png" srcSet="/images/logo-dark2x.png 2x" alt="Brand Logo" />
                                        </div>

                                        {/* Invoice Head */}
                                        <div className="invoice-head">
                                            {/* Invoice To */}
                                            <div className="invoice-contact">
                                                <span className="overline-title">Invoice To</span>
                                                <div className="invoice-contact-info">
                                                    <h4 className="title">{user.name}</h4>
                                                    <ul className="list-plain">
                                                        <li>
                                                            <FontAwesomeIcon icon={faEnvelope} className="me-1" />
                                                            Email: <span>{user.email}</span>
                                                        </li>
                                                        <li>
                                                            <FontAwesomeIcon icon={faPhone} className="me-1" />
                                                            Phone: <span>{user.phone || 'N/A'}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Invoice Details */}
                                            <div className="invoice-desc">
                                                <h3 className="title">Invoice</h3>
                                                <ul className="list-plain">
                                                    <li className="invoice-id">
                                                        <span>Invoice ID</span>: <span>{subscription.invoice_id}</span>
                                                    </li>
                                                    <li className="invoice-date">
                                                        <span>Date</span>: <span>{new Date(subscription.created_at).toLocaleDateString()}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Invoice Table */}
                                        <div className="invoice-bills">
                                            <div className="table-responsive">
                                                <table className="table-striped table">
                                                    <thead>
                                                        <tr>
                                                            <th className="w-30">Package Name</th>
                                                            <th className="w-30">Time Duration</th>
                                                            <th className="w-60">Payment Type</th>
                                                            <th>Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{price.title}</td>
                                                            <td>{price.duration === 'monthly' ? '1 Month Subscription' : '1 Year Subscription'}</td>
                                                            <td>{subscription.payment_method}</td>
                                                            <td>${subscription.stripe_price}</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan={2}></td>
                                                            <td colSpan={1}>Total</td>
                                                            <td>${subscription.stripe_price}</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                                <div className="nk-notes ff-italic fs-12px text-soft">
                                                    Invoice was created on a computer and is valid without the signature and seal.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
