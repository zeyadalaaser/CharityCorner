import React, { useState } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import './Delete.css';

interface DataItem {
    key: string;
    name: string;
    reportID: string;
    description: string;
    status: string;
}

const Delete: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('organization');
    const [organizationData, setOrganizationData] = useState<DataItem[]>([
        {
            key: '1',
            name: 'Resala',
            reportID: '98',
            description: 'Organization',
            status: 'Registered'
        },
        {
            key: '2',
            name: 'Egyptian Food Bank',
            reportID: '38',
            description: 'Organization',
            status: 'Registered'
        },
        {
            key: '3',
            name: 'Dar El-Orman',
            reportID: '23',
            description: 'Organization',
            status: 'Registered'
        },
    ]);

    const [donorData, setDonorData] = useState<DataItem[]>([
        {
            key: '1',
            name: 'Ali Osama',
            reportID: '1',
            description: 'Doctor',
            status: 'Registered'
        },
        {
            key: '2',
            name: 'Adham Hosny',
            reportID: '2',
            description: 'Teacher',
            status: 'Registered'
        },
        {
            key: '3',
            name: 'Omar Ali',
            reportID: '3',
            description: 'Teacher',
            status: 'Registered'
        },
    ]);

    const handleDelete = (record: DataItem, dataSource: DataItem[], setDataSource: React.Dispatch<React.SetStateAction<DataItem[]>>) => {
        const newData = dataSource.filter(item => item.key !== record.key);
        setDataSource(newData);
    };

    const organizationColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Report ID',
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
            render: (_: any, record: DataItem) => (
                <span>
                    <Popconfirm
                        title="Are you sure delete this organization?"
                        onConfirm={() => handleDelete(record, organizationData, setOrganizationData)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary">Delete</Button>
                    </Popconfirm>
                </span>
            ),
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
            title: 'Report ID',
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
            render: (_: any, record: DataItem) => (
                <span>
                    <Popconfirm
                        title="Are you sure delete this donor?"
                        onConfirm={() => handleDelete(record, donorData, setDonorData)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary">Delete</Button>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div className="delete">
            <h1 className="header">Remove Organization & Donor Accounts</h1>
            <div className="tab-bar-menu">
                <button onClick={() => setSelectedTab('organization')}>Organization</button>
                <button onClick={() => setSelectedTab('donor')}>Donor</button>
            </div>
            {selectedTab === 'organization' && (
                <Table columns={organizationColumns} dataSource={organizationData} />
            )}
            {selectedTab === 'donor' && (
                <Table columns={donorColumns} dataSource={donorData} />
            )}
        </div>
    );
};

export default Delete;
