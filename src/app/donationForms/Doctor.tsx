 'use client';

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
 
import egypt from '@/data/egypt.json'
import AddMarker from "@/components/LocationMarker/AddMarker";
import { useRouter } from 'next/navigation';
 
 

export default function Component() {
  const router = useRouter();
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedGovernorate, setSelectedGovernorate] = useState('');
    return (
    <section className="w-full max-w-2xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Request Pro Bono Medical Services</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below to apply for pro bono medical assistance.
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Form.Label htmlFor="name" style={{fontWeight:"bold"}}>Full Name</Form.Label>
              <Form.Control  id="name" placeholder="Enter your full name"  required/>
            </div>
            <div className="space-y-2">
              <Form.Label htmlFor="email"style={{fontWeight:"bold"}}>Email</Form.Label>
              <Form.Control   id="email" placeholder="Enter your email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Form.Label htmlFor="phone" style={{fontWeight:"bold"}}>Phone</Form.Label>
            <Form.Control id="phone" placeholder="Enter your phone number" required />
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
    <label htmlFor="address" className="form-label" style={{fontWeight:"bold"}}>Clinic Adrress</label>
    <input type="text" className="form-control" id="address"    placeholder=" " required></input>
  </div>
  <div className="space-y-2" >
    <AddMarker/>
  </div>
 
          
           
          <div className="flex items-center space-x-2">
            <Form.Check id="terms" />
            <Form.Label htmlFor="terms">I agree to the terms and conditions of the pro bono program.</Form.Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
        <Button className="primary" type="submit" onClick={()=> router.push("/NewsFeed")}>
            Submit Donation
          </Button>
          <Button className="primary" type="button" onClick={()=> router.push("/NewsFeed")} >
            Cancel
          </Button>
        </div>
        </form>
      </div>
    </section>
  )
}