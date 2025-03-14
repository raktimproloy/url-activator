import AppLayout from '@/layouts/app-layout';
import { faChevronRight, faPrint } from '@fortawesome/free-solid-svg-icons'; // Import required icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';

interface Subscription {
    id: number;
    order_id: string;
    amount: number;
    status: string;
    created_at: string;
    stripe_price: number; // Ensure this matches your data
    stripe_status: string; // Ensure this matches your data
    payment_status: string; // Ensure this matches your data
}

interface Props {
    subscriptions: {
        data: Subscription[];
        links: Array<{ url: string | null; label: string; active: boolean }>;
    };
}

export default function List({ subscriptions }: Props) {
    const handlePagination = (url: string | null) => {
        if (url) {
            Inertia.visit(url);
        }
    };

    return (
        <AppLayout>
            <div className="nk-content">
                <div className="container-fluid">
                    <div className="nk-content-inner">
                        <div className="nk-content-body">
                            <div className="nk-block-head">
                                <div className="nk-block-between g-3">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title page-title">Invoices</h3>
                                        <div className="nk-block-des text-soft">
                                            <p>You have total {subscriptions.data.length} invoices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-block">
                                <div className="card card-bordered card-stretch">
                                    <div className="card-inner-group">
                                        <div className="card-inner">
                                            <div className="card-title-group">
                                                <div className="card-title">
                                                    <h5 className="title">All Invoices</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner p-0">
                                            <table className="table-orders table">
                                                <thead className="tb-odr-head">
                                                    <tr className="tb-odr-item">
                                                        <th className="tb-odr-info">
                                                            <span className="tb-odr-id">Order ID</span>
                                                            <span className="tb-odr-date d-none d-md-inline-block">Date</span>
                                                        </th>
                                                        <th className="tb-odr-amount">
                                                            <span className="tb-odr-total">Amount</span>
                                                            <span className="tb-odr-status d-none d-md-inline-block">Status</span>
                                                        </th>
                                                        <th className="tb-odr-action">&nbsp;</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="tb-odr-body">
                                                    {subscriptions.data.map((subscription) => (
                                                        <tr key={subscription.id} className="tb-odr-item">
                                                            <td className="tb-odr-info">
                                                                <span className="tb-odr-id">
                                                                    <Link href={`/dashboard/invoice/${subscription.id}`}>
                                                                        #{subscription.order_id}
                                                                    </Link>
                                                                </span>
                                                                <span className="tb-odr-date">
                                                                    {new Date(subscription.created_at).toLocaleDateString()}
                                                                </span>
                                                            </td>
                                                            <td className="tb-odr-amount">
                                                                <span className="tb-odr-total">
                                                                    <span className="amount">${subscription.stripe_price}</span>
                                                                </span>
                                                                <span className="tb-odr-status">
                                                                    <span
                                                                        className={`badge badge-dot ${subscription.stripe_status === 'complete' ? 'bg-success' : 'bg-warning'}`}
                                                                    >
                                                                        {subscription.payment_status}
                                                                    </span>
                                                                </span>
                                                            </td>
                                                            <td className="tb-odr-action">
                                                                <div className="tb-odr-btns d-none d-sm-inline">
                                                                    <Link
                                                                        href={`/dashboard/invoice/${subscription.invoice_id}/print`}
                                                                        target="_blank"
                                                                        className="btn btn-icon btn-white btn-dim btn-sm btn-primary"
                                                                    >
                                                                        <FontAwesomeIcon icon={faPrint} /> {/* FontAwesome Print Icon */}
                                                                    </Link>
                                                                    <Link
                                                                        href={route('dashboard.invoice.view', { id: subscription.invoice_id })}
                                                                        className="btn btn-dim btn-sm btn-primary"
                                                                    >
                                                                        View
                                                                    </Link>
                                                                </div>
                                                                <Link
                                                                    href={route('dashboard.invoice.view', { id: subscription.invoice_id })}
                                                                    className="btn btn-pd-auto d-sm-none"
                                                                >
                                                                    <FontAwesomeIcon icon={faChevronRight} /> {/* FontAwesome Chevron Right Icon */}
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card-inner">
                                            <ul className="pagination justify-content-center justify-content-md-start">
                                                {subscriptions.links.map((link, index) => (
                                                    <li
                                                        key={index}
                                                        className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                                    >
                                                        <button
                                                            className="page-link"
                                                            onClick={() => handlePagination(link.url)}
                                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
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
