'use client'
import Image from 'react-bootstrap/Image';
import pfp from '@/assets/navbar/profileIconMale.png'
import Button from 'react-bootstrap/esm/Button';
import Post from '@/components/Posts/Post';
import org from '@/data/registeredOrganizations.json'

import teachPosts from '@/data/Posts/Teacher/teaching.json'
import regPosts from '@/data/Posts/Regular/all.json'
import medPosts from '@/data/Posts/Doctor/medicalCases.json'
import editIcon from '@/assets/profile/editIcon.svg'
import createNewPostIcon from '@/assets/profile/newPostIcon.svg'
import { NavBar } from '@/components/NavBar/NavBar';
import { useRouter } from 'next/navigation';
import { GoogleMarker } from '@/components/LocationMarker/GoogleMarker';

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function organizationProfile() {


    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);
    const userType = user?.userType;
     
    let organization;

    if(userType !== "org"){
      if(userType === "teacher")
        organization = getUserByString("Dar El-Orman")
      if(userType === "doctor")
        organization = getUserByString("57357")
      else
        organization = getUserByString("Resala")
    }
    else{
     // organization = getUserByStringFromLog(user?.orgName)  
    }

    const orgname = (userType !== "org") ? organization?.name : user?.orgName!;
    const type = (userType !== "org") ? organization?.organizationType : user?.orgType!;

    let orgPosts;
    if(type === "Hospital")
      orgPosts = medPosts;
    else if(type === "School")
      orgPosts = teachPosts;
    else 
      orgPosts = regPosts;


    const handleCreateNewPost =() => {
        router.push('/createpost');
    }
    

    return (
      <>
        <NavBar />
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <Image src={pfp.src} className="w-20 h-20" rounded />
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-3">
                <h1 className="text-3xl font-bold">{orgname}</h1>
                {userType === "org" && (
                  <button>
                    <img src={editIcon.src} className="w-6 h-6" />
                  </button>
                )}
              </div>

              <p className="text-gray-500 dark:text-gray-400">
              {organization && organization["organizationType"]}
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Full Name: {userType==="org"? user.name : "Ahmed Samir"}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Email: {userType==="org"? user.email : "ahmedsamir@gmail.com"}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Phone number: {userType==="org"? user.number : "+21012234445"}
            </p>
          </div>
          <div className="mt-8 max-w-3xl space-y-4 text-center">
            <div className="flex items-center justify-center gap-4"></div>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div style={{ display: "flex", alignItems: "center" }} className="py-1">
                <GoogleMarker />
                <span style={{ marginLeft: "0.5rem" }}>
                {organization && organization["address"]}
                </span>
              </div>
              <div>Established in 2007</div>
            </div>
          </div>
          <hr />
          {userType === "org" && (
            <div className="grid gap-4 p-6">
              <div className="flex justify-center items-center gap-2">
                <h6 className="text-2xl font-bold">My Posts</h6>
                <button onClick={handleCreateNewPost}>
                  <img
                    className="w-6 h-6"
                    src={createNewPostIcon.src}
                    alt="create new post"
                  />
                </button>
              </div>
              <div className="flex items-align justify-center gap-2">
                <Button size="sm" variant="outline-dark" className="active:">
                  All
                </Button>
                <Button size="sm" variant="outline-dark">
                  Fulfilled
                </Button>
              </div>
            </div>
          )}
          <div className="border shadow-sm rounded-lg">
            <Post posts={orgPosts} />
          </div>
        </div>
      </>
    );
}

function getUserByString(name: string) {
  let user: any;

  try {
      user = org.find((u: any) => u.name === name);
  }
  catch {
  }

  return user;
}
function getUserByStringFromLog(name: string) {
  let user: any;

  try {
      user = user.find((u: any) => u.orgName === name);
  }
  catch {
  }

  return user;
}