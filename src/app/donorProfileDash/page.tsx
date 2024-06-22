'use client';
import { Button } from "react-bootstrap";
import pfp from '@/assets/navbar/profileIconMale.png'
import { NavBar } from "@/components/NavBar/NavBar";
import Link from "next/link";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
 
export default function Component() {
    const user = useSelector((state: RootState) => state.user);
    return (
    <>
    <NavBar/>
    <section className="w-full max-w-4xl mx-auto py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold">Donor Profile</h2>
                  <div className="space-y-2">
                      <div className="flex items-center gap-4">
                          <img src={pfp.src} className="w-20 h-20" />
                          <div>
                              <h3 className="text-xl font-semibold">{user.name}</h3>
                              <p className="text-gray-500 dark:text-gray-400">{user.userType} Donor</p>
                          </div>
                      </div>

                      <p className="text-gray-500 dark:text-gray-400 py-3">
                          {user.name} has been donating regularly for the past 5 years.
                          His contributions have helped us make a significant impact in our community.
                      </p>

                  </div>
              </div>

          </div>
          <h3 className="text-2xl font-bold py-1">Personal Information</h3>
          <div  className="flex flex-col items-left space-y-4">
       <p  >
              Full Name: {user.name}
          </p>
          <p >
              Phone number:{user.number}
          </p>
          <p >
              Email: {user.email}
          </p> 
          <p >
              Gender: {user.gender}
          </p>
          <p >
              Address:{user.address}
          </p>
          <p >
              Governorate:{user.governorate}
          </p>
         
         
          </div>
          <div className="my-8" /><div className="space-y-4">
              <h3 className="text-2xl font-bold">Past Donations</h3>
              <div className="grid gap-4">
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                      <div className="space-y-1">
                          <p className="text-sm font-medium">October 15, 2022</p>
                          
                      </div>
                      <div className="text-right">
                          <p className="text-sm font-medium">Blood Donation</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">Thank you for your support!</p>
                      </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                      <div className="space-y-1">
                          <p className="text-sm font-medium">July 1, 2022</p>
                          
                      </div>
                      <div className="text-right">
                          <p className="text-sm font-medium">Clothes Donation</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">Your donation helped those in need.</p>
                      </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                      <div className="space-y-1">
                          <p className="text-sm font-medium">March 15, 2022</p>
                         
                      </div>
                      <div className="text-right">
                          <p className="text-sm font-medium">School supplies donation</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">Thank you for support.</p>
                      </div>
                  </div>
              </div>
          </div> 
    </section>
    </>
  )
}