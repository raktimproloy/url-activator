import AppLayout from '@/layouts/app-layout';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Index() {
    const { auth } = usePage<SharedData>().props;

    // State for running services information
    const [servicesInfo, setServicesInfo] = useState({
        status: 0,
        start_at: '',
        end_at: '',
        priority: 3,
        totalUrls: 0,
        activeUrls: 0,
        inactiveUrls: 0,
    });

    // State for the table rows
    const [tableRows, setTableRows] = useState([]);
    // Effect to initialize tableRows and servicesInfo
    useEffect(() => {
        if (auth.packageManagers && auth.packageManagers.length > 0) {
            const packageManager = auth.packageManagers[0];
            setServicesInfo({
                status: packageManager.status,
                start_at: packageManager.started_at,
                end_at: packageManager.end_at,
                priority: packageManager.priority,
                totalUrls: packageManager.url_count,
                activeUrls: packageManager.urls.filter((url) => url.isActive).length,
                inactiveUrls: packageManager.urls.filter((url) => !url.isActive).length,
            });

            // Initialize tableRows based on packageManager.urls
            const initialTableRows = packageManager.urls.map((url, index) => ({
                id: index + 1,
                url: url.url,
                isEditable: false,
                isActive: url.isActive,
            }));
            setTableRows(initialTableRows);
        }
    }, [auth]);

    // Effect to update active/inactive counts when tableRows changes
    useEffect(() => {
        const activeUrlsCount = tableRows.filter((row) => row.isActive).length;
        const inactiveUrlsCount = tableRows.length - activeUrlsCount;

        setServicesInfo((prevInfo) => ({
            ...prevInfo,
            activeUrls: activeUrlsCount,
            inactiveUrls: inactiveUrlsCount,
        }));
    }, [tableRows]);

    // Function to handle editing a row
    const handleEdit = (id) => {
        setTableRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, isEditable: true } : row)));
    };

    // Function to handle updating a row
    const handleUpdate = (id, updatedUrl) => {
        setTableRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, url: updatedUrl, isEditable: false } : row)));
    };

    // Function to toggle active/inactive status
    const toggleActive = (id) => {
        setTableRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, isActive: !row.isActive } : row)));
    };

    // Function to add a new row
    const addNewRow = () => {
        // Maximum limit of 20 URLs
        if (tableRows.length >= 20) {
            alert('You cannot add more than 20 URLs.');
            return;
        }

        const newRow = {
            id: tableRows.length + 1,
            url: '',
            isEditable: true,
            isActive: true,
        };
        setTableRows([...tableRows, newRow]);
    };

    // Function to delete a row
    const handleDelete = (id) => {
        const updatedRows = tableRows.filter((row) => row.id !== id);
        setTableRows(updatedRows);
    };

    // Function to update URLs
    const updateUrls = async () => {
        // Check if the status is active (1)
        if (servicesInfo.status != 1) {
            alert('Your package is not active. Please activate your package before updating URLs.');
            return;
        }

        // Check if the end date is greater than the current timestamp
        const currentTimestamp = new Date().getTime();
        const endAtTimestamp = new Date(servicesInfo.end_at).getTime();
        if (endAtTimestamp <= currentTimestamp) {
            alert('Your package has expired. Please renew your package before updating URLs.');
            return;
        }

        // Check if all URLs are non-empty and valid
        const invalidUrls = tableRows.filter((row) => {
            const url = row.url.trim();
            return !url || !isValidUrl(url);
        });

        if (invalidUrls.length > 0) {
            alert('One or more URLs are empty or invalid. Please check and correct them before updating.');
            return;
        }

        // Check if the number of active URLs is within the limit
        const activeUrlsCount = tableRows.filter((row) => row.isActive).length;
        if (activeUrlsCount > servicesInfo.totalUrls) {
            alert(`You can only have ${servicesInfo.totalUrls} active URLs. Please deactivate some URLs before updating.`);
            return;
        }

        // Prepare the updated URLs for the API request
        const updatedUrls = tableRows.map((row) => ({
            url: row.url.trim(),
            isActive: row.isActive,
        }));

        try {
            // Send the updated URLs to the server
            const response = await axios.put(
                '/api/update_urls',
                {
                    urls: updatedUrls,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            // Handle the response
            if (response.status === 200) {
                alert('URLs updated successfully!');
            }
        } catch (error) {
            console.error('Error updating URLs:', error);
            alert('Failed to update URLs. Please try again.');
        }
    };

    // Helper function to validate URLs
    const isValidUrl = (url) => {
        try {
            // Use the URL constructor to validate the URL
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <AppLayout>
            <div className="container-fluid py-4">
                {/* Information Table */}
                <div className="card mb-4">
                    <div className="card-header">
                        <h5 className="card-title mb-0">Running Services Information</h5>
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            {/* Priority Level Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor:
                                            servicesInfo.priority === 1 ? '#ffcccc' : servicesInfo.priority === 2 ? '#fff3cd' : '#d4edda',
                                        color: servicesInfo.priority === 1 ? '#dc3545' : servicesInfo.priority === 2 ? '#856404' : '#155724',
                                    }}
                                >
                                    <h6>Priority Level</h6>
                                    <p className="h4">{servicesInfo.priority === 1 ? 'High' : servicesInfo.priority === 2 ? 'Medium' : 'Low'}</p>
                                </div>
                            </div>

                            {/* Package Status Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: servicesInfo.status == 1 ? '#d4edda' : '#ffcccc',
                                        color: servicesInfo.status == 1 ? '#155724' : '#dc3545',
                                    }}
                                >
                                    <h6>Package Status</h6>
                                    <p className="h4">{servicesInfo.status == 1 ? 'Active' : 'Inactive'}</p>
                                </div>
                            </div>

                            {/* Start Date Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: '#e2f0ff',
                                        color: '#004085',
                                    }}
                                >
                                    <h6>Start Date</h6>
                                    <p className="h4">
                                        {new Date(servicesInfo.start_at).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* End Date Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: '#fff3cd',
                                        color: '#856404',
                                    }}
                                >
                                    <h6>End Date</h6>
                                    <p className="h4">
                                        {new Date(servicesInfo.end_at).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </p>
                                </div>
                            </div>

                            {/* Total URLs Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: '#f8f9fa',
                                        color: '#343a40',
                                    }}
                                >
                                    <h6>Total URLs</h6>
                                    <p className="h4">{servicesInfo.totalUrls}</p>
                                </div>
                            </div>

                            {/* Active URLs Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: '#d4edda',
                                        color: '#155724',
                                    }}
                                >
                                    <h6>Active URLs</h6>
                                    <p className="h4">{servicesInfo.activeUrls}</p>
                                </div>
                            </div>

                            {/* Inactive URLs Card */}
                            <div className="col-md-3">
                                <div
                                    className="border p-3"
                                    style={{
                                        backgroundColor: '#ffcccc',
                                        color: '#dc3545',
                                    }}
                                >
                                    <h6>Inactive URLs</h6>
                                    <p className="h4">{servicesInfo.inactiveUrls}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Editable Table */}
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0">URL Management</h5>
                        <div>
                            <button className="btn btn-primary me-2" onClick={addNewRow}>
                                Add New URL
                            </button>
                            <button className="btn btn-success" onClick={updateUrls}>
                                Update URLs
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className="table-bordered table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>URL</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="https://www.example.com"
                                                value={row.url}
                                                disabled={!row.isEditable}
                                                onChange={(e) =>
                                                    setTableRows((prevRows) =>
                                                        prevRows.map((r) => (r.id === row.id ? { ...r, url: e.target.value } : r)),
                                                    )
                                                }
                                            />
                                        </td>
                                        <td>
                                            {row.isEditable ? (
                                                <button className="btn btn-success btn-sm me-2" onClick={() => handleUpdate(row.id, row.url)}>
                                                    Update
                                                </button>
                                            ) : (
                                                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(row.id)}>
                                                    Edit
                                                </button>
                                            )}
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row.id)}>
                                                Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className={`btn btn-sm ${row.isActive ? 'btn-success' : 'btn-danger'}`}
                                                onClick={() => toggleActive(row.id)}
                                            >
                                                {row.isActive ? 'Active' : 'Inactive'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
