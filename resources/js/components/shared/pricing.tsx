import { Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Auth {
    packageManagers: PackageManager[];
}

interface PackageManager {
    status: string;
    priority: number;
    url_count: number;
}

interface Pricing {
    id: number;
    tag: string;
    amount: number;
    currency: string;
    duration: string;
    theme_color: string;
    include: string[];
    slug: string;
    priority: number;
    url_count: number;
}

interface PageProps {
    auth: Auth;
}

export default function Pricing() {
    const { auth } = usePage().props as PageProps;
    const [pricingsData, setPricingsData] = useState<Pricing[]>([]);
    const [filteredPricings, setFilteredPricings] = useState<Pricing[]>([]);
    const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT'); // Default to BDT
    const [pricingPeriod, setPricingPeriod] = useState<'monthly' | 'yearly'>('monthly'); // Default to monthly
    const [packageManager, setPackageManager] = useState<PackageManager | {}>({});
    useEffect(() => {
        if (auth && auth.packageManagers && auth.packageManagers.length > 0 && auth.packageManagers[0].status === '1') {
            setPackageManager(auth.packageManagers[0]);
        }
    }, [auth]);

    useEffect(() => {
        fetchPricings();
        checkCurrency();
    }, []);

    useEffect(() => {
        filterPricings();
    }, [currency, pricingPeriod, pricingsData]);

    const fetchPricings = async () => {
        try {
            const response = await axios.get<{ data: Pricing[] }>('/api/pricing');
            setPricingsData(response.data.data);
        } catch (error) {
            console.error('Error fetching pricings', error);
        }
    };

    const checkCurrency = () => {
        const storedCurrency = localStorage.getItem('currency') as 'BDT' | 'USD' | null;
        if (storedCurrency) {
            setCurrency(storedCurrency);
        }
    };

    const handleCurrencyToggle = () => {
        const newCurrency = currency === 'BDT' ? 'USD' : 'BDT';
        setCurrency(newCurrency);
        localStorage.setItem('currency', newCurrency);
    };

    const handlePricingPeriodToggle = (period: 'monthly' | 'yearly') => {
        setPricingPeriod(period);
    };

    const filterPricings = () => {
        const filtered = pricingsData.filter(
            (price) => price.currency.toLowerCase() === currency.toLowerCase() && price.duration === pricingPeriod
        );
        setFilteredPricings(filtered);
    };

    return (
        <section className="pricing-section p-t-130 p-b-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="common-heading tagline-boxed-two title-line m-b-70 text-center">
                            <span className="tagline">Our Pricing Plan</span>
                            <h2 className="title">Choose Your Plan & Stay Live!</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 m-b-30 text-center">
                        <button
                            className={`btn me-3 ${pricingPeriod === 'monthly' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => handlePricingPeriodToggle('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`btn ${pricingPeriod === 'yearly' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => handlePricingPeriodToggle('yearly')}
                        >
                            Yearly
                        </button>
                    </div>
                    <div className="col-12 m-b-30 text-center">
                        <button className="btn btn-toggle-currency" onClick={handleCurrencyToggle}>
                            {currency === 'USD' ? 'Show in BDT' : 'Show in USD'}
                        </button>
                    </div>
                    {filteredPricings.map((price) => (
                        <div className="col-lg-4 col-md-6 col-sm-8" key={price.id}>
                            <div className={`pricing-table m-t-30 ${price.theme_color === 'theme1' ? 'pricing-secondary-1' : ''}`}>
                                <div className="plan-title-area">
                                    <h5 className="plan-name">{price.tag}</h5>
                                    <img src="assets/img/pricing/plan-icon.png" alt="Plan icon" className="plan-icon" />
                                </div>
                                <div className="plan-cost">
                                    <span className="currency">{currency === 'USD' ? '$' : '৳'}</span>
                                    <span className="price">{price.amount}</span>
                                    <span className="plan-type">/ {pricingPeriod.charAt(0).toUpperCase() + pricingPeriod.slice(1)}</span>
                                </div>
                                <ul className="plan-feature">{price.include && price.include.map((item, index) => <li key={index}>{item}</li>)}</ul>
                                <Link
                                    href={`/details/${price.slug}`}
                                    className="template-btn"
                                    style={{
                                        pointerEvents: `${Object.keys(packageManager).length > 0 && (packageManager as PackageManager).priority === price.priority && (packageManager as PackageManager).url_count === price.url_count ? 'none' : 'auto'}`,
                                    }}
                                >
                                    {Object.keys(packageManager).length > 0 &&
                                    (packageManager as PackageManager).priority === price.priority &&
                                    (packageManager as PackageManager).url_count === price.url_count
                                        ? 'Active'
                                        : price.tag.toLowerCase() === 'free'
                                          ? 'Claim Free'
                                          : 'Select Plan'}
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}