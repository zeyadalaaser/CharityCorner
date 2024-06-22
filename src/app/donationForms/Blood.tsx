 
'use client';
import bloodDonationPicture from '@/assets/donationForms/donation2000.jpg'
import Link from 'next/link';
import { useState } from "react";
import { Accordion, AccordionItem, Button, Form } from "react-bootstrap"
import { useRouter } from 'next/navigation';

export default function Component() {

    const [activeKey, setActiveKey] = useState(null);
    const [donationCount, setDonationCount] = useState(0);
    const router = useRouter();
    
    const handleFormButtonClick=()=>{
      router.push("/NewsFeed")
    }
    const [submitted, setSubmitted] = useState(false);
    const [showToast, setShowToast] = useState<boolean>(false); // State to control toast visibility

    const handleSubmit = () => {
        // Perform submission logic here, e.g., make an API call
        // Set submitted to true to indicate successful submission
        setSubmitted(true);
        setDonationCount(prevCount => prevCount + 1);
        setShowToast(true); // Show the toast notification

    };
    return (
        <>
      <h1 style={{backgroundColor:"#c23f32"}}  > 
     <img src= {bloodDonationPicture.src} width="750" height="230"style={{ marginRight: '250px' }} 
     alt="Logo" /> 
    </h1>
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="space-y-2 text-center">
        
        <p className="text-gray-500 dark:text-gray-400">
          Help save lives by donating blood. Fill out the form below to get started.
        </p>
      </div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Form.Label htmlFor="name" style={{fontWeight:"bold"}}>Full Name</Form.Label>
            <Form.Control id="name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Form.Label htmlFor="phone"style={{fontWeight:"bold"}}>Phone Number</Form.Label>
            <Form.Control id="phone" placeholder="Enter your phone number" required type="tel" />
          </div>
        </div>
        <div className="space-y-2">
          <Form.Label htmlFor="email"style={{fontWeight:"bold"}}>Email Address</Form.Label>
          <Form.Control id="email" placeholder="Enter your email address" required type="email" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Form.Label htmlFor="blood-type" style={{fontWeight:"bold"}}>Blood Type</Form.Label>
            <Form.Select id="blood-type" required>
             
                <option selected>Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              
            </Form.Select>
          </div>
          <div className="space-y-2">
            <Form.Label htmlFor="donation-date" style={{fontWeight:"bold"}}>Birth Date</Form.Label>
            <Form.Control id="donation-date" required type="date" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Form.Label htmlFor="weight"style={{fontWeight:"bold"}} >Weight </Form.Label>
            <Form.Control id="weight" placeholder="Enter your weight" required type="number"/>
          </div>
          <div className="space-y-2">
            <Form.Label htmlFor="height" style={{fontWeight:"bold"}}>Height</Form.Label>
            <Form.Control id="height" placeholder="Enter your height" required type="number"  />
          </div>
        </div>
        <div className="space-y-2">
              <label htmlFor="medications" style={{fontWeight:"bold"}}>Medications:</label> </div>
              <textarea id="medications" className="form-control" placeholder="List any medications you are currently taking" required />
        <div className="space-y-2">
              <label htmlFor="medications" style={{fontWeight:"bold"}}>Medical conditions:</label> </div>
              <textarea id="medications" className="form-control" placeholder="List any medical conditions you may have" required />
        
        <div className="grid grid-cols-2 gap-4">
        

        
        <Button className="danger" type="submit"  variant="danger" onClick={()=>{handleFormButtonClick()}}>
            Submit Donation
          </Button> 

          {submitted && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    Donation submitted successfully!
                </div>

            )}

          <Button className="danger" type="button" variant="danger" onClick={()=> router.push("/NewsFeed")}>
           Cancel
          </Button>
        </div>
      </form>
      
    </div>
    </>
  )
}

function DropletsIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}