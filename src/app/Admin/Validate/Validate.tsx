import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import './Validate.css';
import { Button } from 'react-bootstrap';
import { getFile } from '../server';

interface StatusState {
    key: string;
    value: string;
}

interface Organization {
    key: string;
    name: string;
    reportID: string;
    description: string;
    status: string;
}

// Define a functional component for the tab bar menu
const TabBarMenu: React.FC<{ onSelectTab: (tab: string) => void }> = ({ onSelectTab }) => {
    return (
        <div className="tab-bar-menu">
            <button onClick={() => onSelectTab('organization')}>Organization</button>
            <button onClick={() => onSelectTab('donor')}>Donor</button>
        </div>
    );
};

const Validate: React.FC = () => {
    const openPdf = async (name: string) => {

        const pdfFile = await getFile(name);
        const pdfBytes = new Uint8Array(atob(pdfFile).split('').map(char => char.charCodeAt(0)))

        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        URL.revokeObjectURL(url);
    }

    const viewPdf = async (name: string) => {

        const pdfFile = await getFile(name);
        const pdfBytes = new Uint8Array(atob(pdfFile).split('').map(char => char.charCodeAt(0)))

        const blob = new Blob([pdfBytes], { type: 'application/pdf' });

        const fileURL =
            window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = name;
        alink.click();
    }

    const [showTable, setShowTable] = useState<boolean>(true);
    const [selectedUser, setSelectedUser] = useState<string>('');
    const [statusStates, setStatusStates] = useState<{ organization: StatusState[], donor: StatusState[] }>({
        organization: [
            {
                key: '98',
                value: 'Pending'
            },
            {
                key: '38',
                value: 'Pending'
            },
            {
                key: '23',
                value: 'Pending'
            }
        ],
        donor: [
            {
                key: '1',
                value: 'Pending'
            },
            {
                key: '2',
                value: 'Pending'
            },
            {
                key: '3',
                value: 'Pending'
            }
        ]
    });

    // Define a union type for the possible values of tab
    type TabType = 'organization' | 'donor';

    // Function to update status
    const updateStatus = (tab: TabType, reportID: string, handleValue: string) => {
        setStatusStates(prevState => {
            return {
                ...prevState,
                [tab]: prevState[tab].map(item => item.key === reportID ? { ...item, value: handleValue } : item)
            };
        });
        console.log(statusStates);
    };

    const organizationColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Organization ID',
            dataIndex: 'reportID',
            key: 'reportID',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Organization) => (
                <span>
                    <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => updateStatus('organization', record.reportID, 'Accepted')}>Accept</a> /{' '}
                    <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}onClick={() => updateStatus('organization', record.reportID, 'Rejected')}>Reject</a>
                </span>
            ),
        },
        {
            title: 'Submitted Details',
            key: 'viewDownload',
            render: (_: any, record: Organization) => (
                <span className="space-x-2">
                    <Button onClick={(e) => openPdf("SE M2.pdf")}>Open PDF</Button>
                    <Button onClick={(e) => viewPdf("SE M2.pdf")}>Download PDF</Button>
                </span>
            ),
        },
    ];
    const organizationData: Organization[] = [
        {
            key: '1',
            name: 'Resala',
            reportID: '98',
            description: 'Organization',
            status: statusStates.organization[0].value
        },
        {
            key: '2',
            name: 'Egyptian Food Bank',
            reportID: '38',
            description: 'Organization',
            status: statusStates.organization[1].value
        },
        {
            key: '3',
            name: 'Dar El-Orman',
            reportID: '23',
            description: 'Organization',
            status: statusStates.organization[2].value
        },
    ];
    const donorColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Donor ID',
            dataIndex: 'reportID',
            key: 'reportID',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: Organization) => (
                <span>
                    <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}onClick={() => updateStatus('donor', record.reportID, 'Accepted')}>Accept</a> /{' '}
                    <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}onClick={() => updateStatus('donor', record.reportID, 'Rejected')}>Reject</a>
                </span>
            ),
        },
        {
            title: 'View & Download',
            key: 'viewDownload',
            render: (_: any, record: Organization) => (
                <span className="space-x-2">
                    <Button onClick={(e) => openPdf("SE M2.pdf")}>Open PDF</Button>
                    <Button onClick={(e) => viewPdf("SE M2.pdf")}>Download PDF</Button>
                </span>
            ),
        },
    ];

    const donorData: Organization[] = [
        {
            key: '1',
            name: 'Ali Osama',
            reportID: '1',
            description: 'Doctor',
            status: statusStates.donor[0].value
        },
        {
            key: '2',
            name: 'Adham Hosny',
            reportID: '2',
            description: 'Teacher',
            status: statusStates.donor[1].value
        },
        {
            key: '3',
            name: 'Omar Ali',
            reportID: '3',
            description: 'Teacher',
            status: statusStates.donor[2].value
        },
    ];

    const [selectedTab, setSelectedTab] = useState<string>('organization'); // State to track the selected tab

    return (
        <div className="validate">
            <h1 className="header">Organization & Donor Request Details </h1>
            <TabBarMenu onSelectTab={setSelectedTab} />
            {selectedTab === 'organization' && (
                <Table columns={organizationColumns} dataSource={organizationData} />
            )}
            {selectedTab === 'donor' && (
                <Table columns={donorColumns} dataSource={donorData} />
            )}
        </div>
    );
};

export default Validate;
