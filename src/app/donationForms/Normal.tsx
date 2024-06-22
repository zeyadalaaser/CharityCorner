'use client';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import egypt from '@/data/egypt.json'
 

interface FormProps{
    requirements: any[]

}
 
export default function Component({requirements}:FormProps) {

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
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedGovernorate, setSelectedGovernorate] = useState('');

    return (
    <section className="w-full max-w-2xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Support our mission</h1>
          <p className="text-gray-500 dark:text-gray-400">
          Your donation will help us continue to provide vital services to our community.
          </p>
        </div>
        <form className="space-y-4" onSubmit={(e) => {e.preventDefault(); handleFormButtonClick();}}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Form.Label htmlFor="name" style={{fontWeight:"bold"}}>Full Name</Form.Label>
              <Form.Control  id="name" placeholder="Enter your full name"  required />
            </div>
            <div className="space-y-2">
              <Form.Label htmlFor="email"style={{fontWeight:"bold"}}>Email</Form.Label>
              <Form.Control   id="email" placeholder="Enter your email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Form.Label htmlFor="phone" style={{fontWeight:"bold"}}>Phone</Form.Label>
            <Form.Control id="phone" placeholder="Enter your phone number" required/>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <div  className="space-y-2" >
            <label htmlFor="dropdown" style={{fontWeight:"bold"}} > Choose item:</label>
            <select id="dropdown" className="form-select" required>
            <option>Choose item name</option>
            {requirements?.map((item:any , index:number) => ( // Added optional chaining here
                <option key={index} value={item}>{item.itemName ? item.itemName : ''}</option>
            ))}
        </select>

          </div>
          <div>
            <label htmlFor="number of items" className="form-label" style={{fontWeight:"bold"}}>Number of items</label>
            <input type="number" className="form-control" id="number of items" required  ></input>
          </div>
          </div>
          <div>
              <label htmlFor="conditions" style={{fontWeight:"bold"}}>Add a description:</label>   
              <textarea id="conditions"className="form-control" placeholder="Describe the donated items" required />
          </div> 
                <div>
                    <h3 className="text-base font-medium mb-2" style={{fontWeight:"bold"}}>Governorate</h3>
                    <Form.Select defaultValue="" onChange={(e) =>{setSelectedGovernorate(e.target.value) }}>
                        <option disabled value=""></option>
                        {Object.keys(egypt).map((governorate) => (
                        <option key={governorate} value={governorate}>{governorate}</option>
                        ))}
                    </Form.Select>
                </div>
                <div>
                   <h3 className="text-base font-medium mb-2"style={{fontWeight:"bold"}}>Area</h3>
                    <Form.Select defaultValue="" onChange={(e) =>{setSelectedArea(e.target.value) }}>
                        <option disabled value=""></option>
                        {selectedGovernorate!=='' && ((egypt as { [key: string]: string[] })[selectedGovernorate].map((t: string) => (
                        <option key={t} value={t}>{t}</option>
                        )))}
                    </Form.Select>
                </div>
    
    <div className="space-y-2" >
    <label htmlFor="address" className="form-label" style={{fontWeight:"bold"}}>  Address</label>
    <input type="text" className="form-control" id="address"    placeholder=" " required></input>
  </div>
 
  <div className="col-md-15">
    <label htmlFor="transportation" className="form-label" style={{fontWeight:"bold"}} >Type of transportation</label>
    <select id="transportation" className="form-select" required>
      <option selected>Choose type of transportation</option>
      <option>Truck</option>
      <option>Car</option>
      <option>Motorcycle</option>
    </select>
  </div>
  <div className="col-md-12" >
    <label htmlFor="pickup" className="form-label" style={{fontWeight:"bold"}}>Pickup slots </label>
    <select id="pickup" className="form-select" required>
      <option selected>Choose pickup slots</option>
      <option>Monday 11:00 am</option>
      <option>Tuesday 1:00 pm</option>
      <option> Wednesday 3:00 pm</option>
      <option> Thursday7:00 pm</option>
      <option> Saturday9:30 pm</option>
 
    </select>
  </div>
  
           
          <div className="flex items-center space-x-2">
            <Form.Check id="terms" />
            <Form.Label htmlFor="terms">I agree to the terms and conditions of the donation program.</Form.Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
          <Button className="primary" type="button" variant="danger" onClick={()=>{handleFormButtonClick()}}>
            Cancel
          </Button>
          <Button className="primary" onClick={handleSubmit}type="submit">
            Submit Donation
          </Button>
          <p>Donation Count: {donationCount}</p>

          {submitted && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    Donation submitted successfully!
                </div>

            )}
        </div>
        </form>
      </div>
    </section>
  )
}