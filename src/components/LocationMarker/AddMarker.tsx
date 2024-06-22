'use client';
// AddMarker2.jsx
import React, { useState } from 'react';
import './AddMarker.css';
import pic from "../../assets/location/image.png";
import {Modal} from 'antd';

const AddMarker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleOpenModal = () => {
    setIsModalVisible(true);
    setNotificationMessage('');
  };

  const handleCloseModal = (success: boolean) => {
    setIsModalVisible(false); // Set isModalVisible to false when closing the modal
    if (success) {
      setNotificationMessage('You have added your location successfully!');
    } else {
      setNotificationMessage('You have not added your location.');
    }
  };
  

  return (
    <div className="add-marker-container">
      <p className="header">Do you want to add your location?</p>
      <button className="add-marker-button" onClick={handleOpenModal}>Add Location</button>
      <p className='notif'>{notificationMessage}</p>
      <Modal
        title="Add Location"
        visible={isModalVisible}
        onCancel={() => handleCloseModal(false)} // Set onCancel to handleCloseModal with false argument
        footer={null}
      >

        
        <img src={pic.src} alt="Marker Picture" style={{ maxHeight: '400px' ,maxWidth:'600'}}/>
        <div className="modal-actions">
          <button className="modal-action-btn-cancel" onClick={() => handleCloseModal(false)}>Cancel</button>
          <button className="modal-action-btn-add" onClick={() => handleCloseModal(true)}>Add</button>
          
        
        </div>
      </Modal>
    </div>
  );
};

export default AddMarker;