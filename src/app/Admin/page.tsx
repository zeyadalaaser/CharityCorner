"use client";
import React, { useState } from 'react';
import './AdminPage.css';
import Validate from './Validate/Validate';
import RegisteredOrg from './RegisteredOrg/RegisteredOrg';
import Delete from './DeleteAcc/Delete';
import ChangePassword from './Password/ChangePassword';
import { Nav } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

const AdminPage: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('communityRequests'); // State to track the selected tab
    const [open, setOpen] = useState<boolean>(true); // State to manage collapsible content

    // Function to handle the click event of each tab
    const handleTabClick = (tab: string) => {
        setSelectedTab(tab); // Change the selected tab
        setOpen(true); // Open the collapsible content
    };

    // Function to render the appropriate component based on the selected tab
    const renderTabContent = () => {
        switch (selectedTab) {
            case 'communityRequests':
                return <Validate />;
            case 'registeredOrganizations':
                return <RegisteredOrg />;
            case 'deleteAccount':
                return <Delete />;
            case 'changePassword':
                return <ChangePassword />;
            default:
                return null;
        }
    };

    return (
        <div className="container space-y-4">
            <Nav variant="tabs" className="navbar" style={{ marginTop: '45px' }}>
                <Nav.Item>
                    <Nav.Link
                        eventKey="communityRequests"
                        active={selectedTab === 'communityRequests'}
                        onClick={() => handleTabClick('communityRequests')}
                    >
                        View Requests & Manage Submissions
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="registeredOrganizations"
                        active={selectedTab === 'registeredOrganizations'}
                        onClick={() => handleTabClick('registeredOrganizations')}
                    >
                        Registered Organizations
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="deleteAccount"
                        active={selectedTab === 'deleteAccount'}
                        onClick={() => handleTabClick('deleteAccount')}
                    >
                        Delete Account
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="changePassword"
                        active={selectedTab === 'changePassword'}
                        onClick={() => handleTabClick('changePassword')}
                    >
                        Change Password
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Collapse in={open}>
                <div>{renderTabContent()}</div>
            </Collapse>
        </div>
    );
};

export default AdminPage;
