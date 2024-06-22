'user client';
import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/navbar/charityCornerIcon.png';
import manProfile from '../../assets/navbar/profileIconMale.png';
import notificationsIcon from '../../assets/navbar/notificationsIcon.png';
import homeIcon from '../../assets/navbar/homeIcon.png';
import { Toast, ToastBody } from 'react-bootstrap';
import Link from 'next/link';
import { RootState } from '@/state/store';
import { useSelector } from 'react-redux';

export function NavBar() {
    const [showToast, setShowToast] = useState(false); // Declare showToast state variable
    const user = useSelector((state: RootState) => state.user);
    const userType = user.userType;

    const handleNotificationsClick = () => {
        setShowToast(true); // Show the Toast when notifications button is clicked
    };

    const handleCloseToast = (id: any) => {
        setShowToast(false); // Close the Toast when onClose event is triggered
    };
  
    return (
        <div className="mynavbar" style={{ backgroundColor: '#CCCCCC', position: 'relative' }}>
            <div className="left">
                <img className="webIcon" src={logo.src} alt="charity corner logo" />
                <span style={{ fontSize: 26, fontWeight: 'bolder', color: "#000000" }}>
                    Charity Corner
                </span>
            </div>
            <div className="right">
                {userType !== "org" && (
                    <Link  href="/NewsFeed" >
                        <button>
                            <img className="icon" src={homeIcon.src} alt="home" />
                        </button>
                    </Link>
                )}
                {userType === "org" && (
                    <Link  href="/organizationProfile" >
                        <button>
                            <img className="icon" src={homeIcon.src} alt="home" />
                        </button>
                    </Link>
                )}
                <button onClick={handleNotificationsClick}>
                    <img className="icon" src={notificationsIcon.src} alt="notifications" />
                </button>
                
                {userType !== "org" && (
                    <Link  href="/donorProfileDash" >
                        <button>
                            <img className="icon" src={manProfile.src}    alt="profile" />
                        </button>
                    </Link>
                )}
                {userType === "org" && (
                    <Link  href="/organizationProfile" >
                        <button>
                            <img className="icon" src={manProfile.src}    alt="profile" />
                        </button>
                    </Link>
                )}

                <span className="text-20, font-bold">{(user?.userType === "org")?user.orgName:user.name}</span>
            </div>
       
            {showToast && (
              <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '9999' }}>
              <Toast show={showToast} onClose={handleCloseToast}>
                  <Toast.Header>
                      <img
                          src="holder.js/20x20?text=%20"
                          className="rounded me-2"
                          alt=""
                      />      
            
                      <strong className="me-auto">New Notifications</strong>
                    <small>11 mins ago</small>
                    
                </Toast.Header>
                {userType === "org" && (
                    <>
                        <Toast.Body>Donor 1 has chosen a donation post to fulfill</Toast.Body>
                        <hr/>
                        <Toast.Body>Donor 2 has donated 5 school supply items to the Orphanage</Toast.Body>
                        <hr/>
                        <Toast.Body>Donor 3 has chosen a time slot for a donation pickup</Toast.Body>
                        <hr/>
                        <Toast.Body>The admin has suspended your account</Toast.Body>
                    </>
                )}
                {userType !== "org" && (
                    <>
                        <Toast.Body>Driver is coming in 2 hours. Be ready!</Toast.Body>
                        <hr/>
                        <Toast.Body>You have successfully donated 15 items to Resala!</Toast.Body>
                        <hr/>
                        <Toast.Body>Reminder: Expected time of driver Arrival is in 5 hours </Toast.Body>
                        <hr/>
                        <Toast.Body>Successfully booked delivery pickup on 24/2/2024</Toast.Body>
                    </>
                )}

            </Toast>
                </div>
            )}
        
            
        </div>
    );
}

