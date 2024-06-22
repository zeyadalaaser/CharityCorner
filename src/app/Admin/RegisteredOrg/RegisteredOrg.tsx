import React, { useState } from 'react';
import { Table, Button, Input, Modal } from 'antd';
import './RegisteredOrg.css';
import adminFilter, { Filter } from '@/components/Filters/adminFilter'
import filterIcon from '@/assets/menu/filterIcon.png'

const { Search } = Input;

interface Organization extends Record<string, string> {
    key: string;
    name: string;
    reportID: string;
    description: string;
    status: string;
    contactDetails: string;
    address: string;
    governorate: string;
    area: string;
    organizationType: string;  
    locationLink: string;
}


const RegisteredOrg: React.FC = () => {
    const [organizationData, setOrganizationData] = useState<Organization[]>([
        {
            key: '1',
            name: 'Resala',
            reportID: '98',
            description: 'Organization',
            status: 'Registered',
            contactDetails: 'example@example.com',
            address: '123 Main Street, Cairo, Egypt',
            governorate: 'Cairo',
            area: 'Maadi',
            organizationType: 'School',
            location: "Cairo, Maadi",
            locationLink: 'https://my.atlist.com/map/e41353ff-25de-4fdf-b225-b75ed8d02a01/?share=true'
        },
        {
            key: '2',
            name: '57357',
            reportID: '38',
            description: 'Organization',
            status: 'Registered',
            contactDetails: 'info@57357.com',
            address: '456 Elm Street, Alexandria, Egypt',
            governorate: 'Alexandria',
            area: 'Miami',
            organizationType: 'Hospital',
            location: "Alexandria, Miami",
            locationLink: 'https://my.atlist.com/map/c1e50cf4-3e88-4aab-801a-ef0a0984f9c5/?share=true'
        },
        {
            key: '3',
            name: 'Dar El-Orman',
            reportID: '23',
            description: 'Organization',
            status: 'Registered',
            contactDetails: 'contact@dar-elorman.org',
            address: '78 Abbas El Akaad, Cairo, Egypt',
            governorate: 'Cairo',
            area: 'Nasr City',
            organizationType: 'Orphanage',
            location: "Cairo, Nasr City",
            locationLink: 'https://my.atlist.com/map/7644fced-14bb-40fc-b438-8e337e726d2c/?share=true'
        },
    ]);


    const [filteredData, setFilteredData] = useState<Organization[]>(organizationData);
    const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleViewDetails = (record: Organization) => {
        setSelectedOrganization(record);
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setSelectedOrganization(null);
        setIsModalVisible(false);
    };

    const handleSearch = (value: string) => {
        const filtered = organizationData.filter(org => org.name.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filtered);
    };

    const [filtersMenuShowing, setFiltersMenuShowing] = useState<boolean>(false);

    const handleToggleFilters = () => {
        setFiltersMenuShowing(true);
    };
    const handleFilter = (pairs: Filter) => {

        const filtered = organizationData.filter((org) => {
            return Object.entries(pairs.pairs).every(([key, value]) => {
                return org[key].toLowerCase() === value?.toLowerCase();
            });
        });

        setFilteredData(filtered);
        if (filtered.length === 0)
            console.log("no results found");
        console.log(filtered);
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
            title: 'Additional Details',
            key: 'action',
            render: (_: any, record: Organization) => (
                <span>
                    <Button type="primary" onClick={() => handleViewDetails(record)}>View Details</Button>
                    <Modal
                        title="Additional Details"
                        visible={isModalVisible && selectedOrganization?.key === record.key}
                        onCancel={handleModalClose}
                        footer={null}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td>Contact Details:</td>
                                    <td>{record.contactDetails}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>{record.address}</td>
                                </tr>
                                <tr>
                                    <td>Organization Type:</td>
                                    <td>{record.organizationType}</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td><a href={record.locationLink} target="_blank">{record.location}</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal>
                </span>
            ),
        },
    ];

    return (
        <div className="RegisteredOrg">
            <h1 className="header">Registered Organizations</h1>
            <div className="search-container">
                <Search
                    placeholder="Search organizations"
                    style={{ width: 250, marginRight: 20 }}
                    onSearch={handleSearch}
                />
            </div>
            <div className="mt-[15px] filterButtonContainer">
                <img className="icon" src={filterIcon.src} alt="filter icon" onClick={handleToggleFilters} />
                <button className="filterButton" onClick={handleToggleFilters}>
                    Filters
                </button>
            </div>
            <div className="filters-overlay">
                <div className="filterDesignContainer">
                    {adminFilter(handleFilter, filtersMenuShowing, setFiltersMenuShowing)}
                </div>
            </div>
            <Table columns={organizationColumns} dataSource={filteredData} />
        </div>
    );
};

export default RegisteredOrg;


