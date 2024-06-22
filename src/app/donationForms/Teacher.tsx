'use client';

import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import egypt from '@/data/egypt.json'
 
export default function Component() {
  const router = useRouter();
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedGovernorate, setSelectedGovernorate] = useState('');
    return (
    <section className="w-full max-w-2xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Pro Bono Teaching Opportunity</h1>
          <p className="text-gray-500 dark:text-gray-400">
            We are looking for passionate educators to volunteer their time and expertise to teach underprivileged
          students. If you have a heart for service and a love for teaching, we would love to hear from you.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Form.Label htmlFor="name" style={{fontWeight:"bold"}}>Full Name</Form.Label>
              <Form.Control  id="name" placeholder="Enter your full name" required/>
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
          <div style={{paddingBottom:"20px"}} className="col-15">
    <label htmlFor="subject" className="form-label" style={{fontWeight:"bold"}} >Subject</label>
    <select id="subject" className="form-select" required>
      <option selected>Choose subject</option>
      <option>English</option>
      <option>Math</option>
      <option>Arabic</option>
      <option>Science</option>
      <option>Social Studies</option>
    </select>
  </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Form.Label htmlFor="studentsnumber" style={{fontWeight:"bold"}}>Number of students per class</Form.Label>
              <Form.Control  id="studentsnumber" placeholder="Enter the number of students" required type="number" />
            </div>
            <div className="space-y-2">
              <Form.Label htmlFor="classesnumber"style={{fontWeight:"bold"}}>Number of classes per week</Form.Label>
              <Form.Control   id="classesnumber" placeholder="Enter your email" required type="number" />
            </div>
          </div>
              
          
           
          <div className="flex items-center space-x-2">
            <Form.Check id="terms" />
            <Form.Label htmlFor="terms">I agree to the terms and conditions of the pro bono program.</Form.Label>
          </div>
          <div className="grid grid-cols-2 gap-4">
        <Button className="primary" type="submit" onClick={()=> router.push("/NewsFeed")}>
            Submit Donation
          </Button>
          <Button className="primary" type="button" onClick={()=> router.push("/NewsFeed")}>
            Cancel
          </Button>
        </div>
        </form>
      </div>
    </section>
  )
}